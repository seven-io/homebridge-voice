'use strict'

globalThis.fetch = require('node-fetch').default
var Client = require('sms77-client')
var Characteristic
var Service

module.exports = function(homebridge) {
    Characteristic = homebridge.hap.Characteristic
    Service = homebridge.hap.Service

    homebridge.registerAccessory(
        'homebridge-sms77-voice', 'Sms77Voice', Sms77VoiceSwitch)
}

function Sms77VoiceSwitch(log, config) {
    if (!config['apiKey']) throw new Error('Missing apiKey!')
    if (!config['name']) throw new Error('Missing name!')
    if (!config['text']) throw new Error('Missing text!')
    if (!config['to']) throw new Error('Missing to!')

    this.log = log

    this.apiKey = config['apiKey']
    this.debug = Boolean(config['debug'])
    this.from = config['from']
    this.name = config['name']
    this.text = config['text']
    this.to = config['to'].split(',')
    //if (!Array.isArray(this.to)) this.to.split(',') = [this.to]
    this.xml = Boolean(config['xml'])

    this.client = new Client(this.apiKey, 'homebridge-voice')

    this.services = {
        AccessoryInformation: new Service.AccessoryInformation(),
        Switch: new Service.Switch(this.name)
    }

    this.services.AccessoryInformation
        .setCharacteristic(Characteristic.Manufacturer, 'sms77 e.K.')

    this.services.AccessoryInformation
        .setCharacteristic(Characteristic.Model, 'Voice Call Switch')

    this.services.Switch.getCharacteristic(Characteristic.On)
        .on('set', this.setPowerState.bind(this))

    this.services.Switch.setCharacteristic(Characteristic.On, false)
}

Sms77VoiceSwitch.prototype.sendVoice = function(to) {
    var self = this
    var params = {
        debug: self.debug,
        from: self.from,
        text: self.text,
        to: to,
        xml: self.xml
    }

    self.client.voice(params).then(finalize).catch(function(e) {
        self.log('Voice mail error (will retry):')
        self.log(e)

        setTimeout(function() {
            self.log('Voice mail retry...')

            params.text = params.text + ' (retry)'

            self.client.voice(params).then(finalize).catch(function(e) {
                self.log('Voice mail error (giving up):')
                self.log(e)
            })
        }, 30000)
    })

    function finalize(apiRes) {
        self.log('Voice mail sent: ' + to + ' : ' + self.text)
        self.services.Switch.setCharacteristic(Characteristic.On, false) // switch off
    }
}

Sms77VoiceSwitch.prototype.setPowerState = function(powerOn, callback) {
    if (powerOn)
        for (var i = 0; i < this.to.length; ++i) this.sendVoice(this.to[i])

    callback()
}

Sms77VoiceSwitch.prototype.getServices = function() {
    return [this.services.AccessoryInformation, this.services.Switch]
}
