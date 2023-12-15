<img src="https://www.seven.io/wp-content/uploads/Logo.svg" width="250" />

Homebridge plugin to make text-to-speech calls via [seven](https://www.seven.io).

Useful for homekit alarms and sensors. Set an automation to make a call in case of a water
leak, smoke detection or so.

Your **apiKey** can be retrieved
from [Dashboard->Developer](https://app.seven.io/developer)

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
            "apiKey": "InsertSuperSecretSevenApiKey",
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

Need help? Feel free to [contact us](https://www.seven.io/en/company/contact).

[![MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)
