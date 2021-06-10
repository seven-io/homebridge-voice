![Sms77.io Logo](https://www.sms77.io/wp-content/uploads/2019/07/sms77-Logo-400x79.png "Sms77.io Logo")

Homebridge plugin to make text-to-speech calls via [Sms77](https://www.sms77.io).

Useful for homekit alarms and sensors. Set an automation to make a call in case of a water
leak, smoke detection or so.

Your **apiKey** can be retrieved
from [Dashboard->Developer](https://app.sms77.io/developer)

## Installation

1. Install homebridge: `npm i -g homebridge`
2. Install plugin: `npm i -g homebridge-sms77-voice`
3. Update `config.json` configuration file

### Configuration Example

Example `config.json`:

```json
{
    "accessories": [
        {
            "accessory": "Sms77Voice",
            "apiKey": "InsertSuperSecretSms77ApiKey",
            "debug": false,
            "from": "MyBookStore",
            "name": "SMS to employees on smoke detection",
            "text": "Emergency: The smoke detection has triggered!",
            "to": [
                "+49876543210",
                "+490123456789"
            ],
            "xml": false
        }
        }
```

#### Support

Need help? Feel free to [contact us](https://www.sms77.io/en/company/contact).

[![MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)
