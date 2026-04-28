<p align="center">
  <img src="https://www.seven.io/wp-content/uploads/Logo.svg" width="250" alt="seven logo" />
</p>

<h1 align="center">seven Voice for Homebridge</h1>

<p align="center">
  Place text-to-speech voice calls from <a href="https://homebridge.io/">Homebridge</a> automations - perfect for HomeKit alarms (water leak, smoke detection, motion).
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-teal.svg" alt="MIT License" /></a>
  <a href="https://www.npmjs.com/package/homebridge-sms77-voice"><img src="https://img.shields.io/npm/v/homebridge-sms77-voice" alt="npm" /></a>
  <img src="https://img.shields.io/badge/Homebridge-1.x-blue" alt="Homebridge 1.x" />
</p>

---

## Features

- **HomeKit Trigger to Voice Call** - Wire any HomeKit accessory to place a TTS call
- **Multiple Recipients** - Comma-separate phone numbers in the `to` array
- **Custom Sender** - Override the caller ID via the `from` field

## Prerequisites

- [Homebridge](https://homebridge.io/) 1.x
- A [seven account](https://www.seven.io/) with API key ([How to get your API key](https://help.seven.io/en/developer/where-do-i-find-my-api-key))

## Installation

```bash
npm i -g homebridge
npm i -g homebridge-sms77-voice
```

## Configuration

Add a `Sms77Voice` accessory to your Homebridge `config.json`:

```json
{
  "accessories": [
    {
      "accessory": "Sms77Voice",
      "apiKey":   "InsertSuperSecretSevenApiKey",
      "debug":    false,
      "from":     "MyBookStore",
      "name":     "SMS to employees on smoke detection",
      "text":     "Emergency: The smoke detection has triggered!",
      "to":       ["+49876543210", "+490123456789"],
      "xml":      false
    }
  ]
}
```

| Field | Description |
|-------|-------------|
| `accessory` | Must be `Sms77Voice` |
| `apiKey` | Your seven API key |
| `name` | HomeKit accessory name |
| `text` | Text the call will speak |
| `to` | Array of recipient phone numbers |
| `from` | Caller ID. Up to 11 alphanumeric or 16 numeric characters |
| `debug` | Print extra log output |
| `xml` | Use XML response format instead of JSON |

## Usage

The accessory exposes a HomeKit switch. Toggling it on - via Home app, Siri, or any HomeKit automation - places the configured voice call to every recipient in `to`.

Typical setup: pair the switch with a HomeKit motion sensor, smoke detector or water-leak sensor in the Home app's automation builder.

## Support

Need help? Feel free to [contact us](https://www.seven.io/en/company/contact/) or [open an issue](https://github.com/seven-io/homebridge-voice/issues).

## License

[MIT](LICENSE)
