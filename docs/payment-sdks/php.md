---
sidebar_position: 1
title: PHP SDK
---

## Overview

:::warning[API V2]

The NETOPIA Payments PHP SDK provides seamless integration with the Netopia Payments API v2. 

:::

It allows developers to handle payments, IPN verification, and status retrieval efficiently within their PHP applications.

Github Repository: https://github.com/netopiapayments/composer

### Features

- Start a payment with customer details, products, and billing/shipping data.

- Retrieve the status of an order.

- Verify 3D Secure authentications.

- Validate IPNs (Instant Payment Notifications) for order updates.

- Compatible with both Sandbox and Live environments.

## Installation

### Install the SDK

To install the library via [composer](https://getcomposer.org/), run the following command:

```
composer require netopia/payment2
```

Or add ``"netopia/payment2": "^1.0.0"`` to the "require" section in the **composer.json** file.

### API Specifications

You can find the API specs here: https://secure.sandbox.netopia-payments.com/spec

## API Reference

### Start Payment

Initiates a payment transaction.

#### Step 1

Define settings:

```php
    $request = new Request();
    $request->posSignature  = 'XXXX-XXXX-XXXX-XXXX-XXXX';                                 // Your signiture ID here
    $request->apiKey        = 'ApiKey_GENERATE-YOUR-KEY-FROM-MobilPay-AND-USE-IT-HERE';   // Your API key here
    $request->isLive        = false;                                                      // false for SANDBOX & true for LIVE
    $request->notifyUrl     = 'http://your-domain.com/ipn.php';                           // Path of your IPN
    $request->redirectUrl   = null;
```

#### Step 2

Make a start JSON request:

```php
    $request->setRequest($configData, $cardData, $orderData, $threeDSecusreData);
```

- You can look at a sample JSON below:

<details>
<summary>View JSON</summary>
```
    {
        "config": {
            "emailTemplate": "",
            "notifyUrl": "http://your-domain/example/ipn.php",
            "redirectUrl": "http://your-domain/example/backUrl.php",
            "language": "RO"
        },
        "payment": {
            "options": {
                "installments": 1,
                "bonus": 0
            },
            "instrument": {
                "type": "card",
                "account": "9900009184214768",
                "expMonth": 11,
                "expYear": 2025,
                "secretCode": "111",
                "token": null
            },
            "data": {
                "BROWSER_USER_AGENT": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome",
                "OS": "Linux",
                "OS_VERSION": "x86_64",
                "MOBILE": "false",
                "SCREEN_POINT": "false",
                "SCREEN_PRINT": "Current Resolution: 1920x1080, Available Resolution: 1920x1080, Color Depth: 24",
                "BROWSER_COLOR_DEPTH": "24",
                "BROWSER_SCREEN_HEIGHT": "1080",
                "BROWSER_SCREEN_WIDTH": "1920",
                "BROWSER_PLUGINS": "PDF Viewer, Chrome PDF Viewer, Chromium PDF Viewer, Microsoft Edge PDF Viewer",
                "BROWSER_JAVA_ENABLED": "false",
                "BROWSER_LANGUAGE": "en-US",
                "BROWSER_TZ": "Europe/Bucharest",
                "BROWSER_TZ_OFFSET": "-120",
                "IP_ADDRESS": "37.221.166.134"
            }
        },
        "order": {
            "ntpID": "",
            "posSignature": "1PD2-FYKC-R27B-55BW-NVGN",
            "dateTime": "2022-11-21T14:13:13+02:00",
            "description": "DEMO API FROM WEB - SDK",
            "orderID": "R973i8Stza46n0me152oidgnr_492",
            "amount": 159.9,
            "currency": "RON",
            "billing": {
                "email": "clientemail84@5n3a4dmoi.com",
                "phone": "9430715286",
                "firstName": "Client prenume d21anr3",
                "lastName": "Client nume nd21ar3",
                "city": "Bucuresti",
                "country": 642,
                "state": "Bucuresti",
                "postalCode": "246513",
                "details": "Fara Detalie"
            },
            "shipping": {
                "email": "clientemail84@5n3a4dmoi.com",
                "phone": "9430715286",
                "firstName": "Client prenume d21anr3",
                "lastName": "Client nume nd21ar3",
                "city": "Bucuresti",
                "country": 642,
                "state": "Bucuresti",
                "postalCode": "246513",
                "details": "Fara Detalie"
            },
            "products": [
                {
                    "name": "T-shirt Alfa",
                    "code": "D276C05398EO14",
                    "category": "Fashion",
                    "price": 17,
                    "vat": 0
                },
                {
                    "name": "T-shirt Beta",
                    "code": "5E89D3C40O7126",
                    "category": "Fashion",
                    "price": 11,
                    "vat": 0
                },
                {
                    "name": "T-shirt Gamma",
                    "code": "D9E1826347OC50",
                    "category": "Fashion",
                    "price": 91,
                    "vat": 0
                },
                {
                    "name": "T-shirt Delta",
                    "code": "3574CE8102DO69",
                    "category": "Fashion",
                    "price": 40,
                    "vat": 0
                }
            ],
            "installments": {
                "selected": 1,
                "available": [
                    0
                ]
            },
            "data": null
        }
    }
```
</details>

#### Step 3

You can now send your request:

```php
    $request->startPayment();
```

#### Example response

Below you can find an example response. You can also head over to the [Payment V2 API page](/docs/payment-api/v2.x/intro.md) for more detailed information.

<details>
<summary>View response</summary>
```
    {
    "status": 1,
    "code": 200,
    "message": "You send your request, successfully",
    "data": {
            "customerAction": {
            "authenticationToken": "0dDmWTelIV7SCTEH65t-rsfTqjZV39ihIBZud-AH_gz_DveTOjocRVUf-AflRAPYtAg5w13q3QgO6RyDIya",
            "formData": {
                "backUrl": "http://your-domain/example/backUrl.php",
                "paReq": "E5bmIpX_RfopDI4uPbvT_ZBsS_hinKMZ8o5nuOPVOZU5F28vOwjDg4LyXzDQeVI="
            },
            "type": "Authentication3D",
            "url": "https://secure.sandbox.netopia-payments.com/sandbox/authorize"
            },
            "error": {
            "code": "100",
            "message": "Approved"
            },
            "payment": {
            "amount": 143.6,
            "currency": "RON",
            "ntpID": "1234567",
            "status": 15
            }
        }
    }
```
</details>

#### Status and error codes

To continue the payment progress, you will need to verify the status and error codes you receive in your response.

For example, an error code **100** and status code **15** means you need to Authorize the transaction via the cardholder's bank first (3D Secure). An error code **0** and status code **3** means that card has no 3D Secure, and that the order is paid.

For the complete list of codes please go to the [Payment V2 API page](/docs/payment-api/v2.x/intro.md), under the Status & Error codes section.

### Authorize (3D Secure cards)

This action is used to authorize a 3D Secure card payment.

You will find the parameters that you need to send in the response from [Start Payment](#startpayment) under ``data -> formData``

<details>
<summary>View Start Payment response</summary>
```
    {
    "status": 1,
    "code": 200,
    "message": "You send your request, successfully",
--> "data": {
            "customerAction": {
            "authenticationToken": "0dDmWTelIV7SCTEH65t-rsfTqjZV39ihIBZud-AH_gz_DveTOjocRVUf-AflRAPYtAg5w13q3QgO6RyDIya",
-->         "formData": {
                "backUrl": "http://your-domain/example/backUrl.php",
                "paReq": "E5bmIpX_RfopDI4uPbvT_ZBsS_hinKMZ8o5nuOPVOZU5F28vOwjDg4LyXzDQeVI="
            },
            "type": "Authentication3D",
            "url": "https://secure.sandbox.netopia-payments.com/sandbox/authorize"
            },
            "error": {
            "code": "100",
            "message": "Approved"
            },
            "payment": {
            "amount": 143.6,
            "currency": "RON",
            "ntpID": "1234567",
            "status": 15
            }
        }
    }
```
</details>

---

:::info

To complete the Authorize action, please use the detailed information from the [Payment V2 API](/docs/payment-api/v2.x/intro.md) Authorize section.

:::

### Verify Authentication

Handles 3D Secure verification for transactions.

To verify authentication you will need to send the request to verify-auth end point.

- Action URL: /payment/card/verify-auth
- Method: POST
- Param type: JSON

#### Verify Authentication settings:

```php
    $verifyAuth = new VerifyAuth();
    $verifyAuth->apiKey              = 'ApiKey_GENERATE-YOUR-KEY-FROM-NETOPIA-AND-USE-IT-HEAR';
    $verifyAuth->authenticationToken = 'YOUR-UNIQUE-AUTHENTICATION-TOKEN-PER-REQUEST';
    $verifyAuth->ntpID               = 'THE-UNIQUE-TRANSACTION-ID';
    $verifyAuth->paRes               = 'THE-DATA-WHAT-YOU-RECIVE-IT-FROM-THE-BANK';
    $verifyAuth->isLive              = false;       // FALSE for SANDBOX & TRUE for LIVE mode
```

#### Create the verify-auth JSON request:

```php
    $jsonAuthParam = $verifyAuth->setVerifyAuth();
```

#### Send the verify-auth JSON request:

```php
    $paymentResult = $verifyAuth->sendRequestVerifyAuth($jsonAuthParam);
```

#### Example request

```
{
"authenticationToken": "YOUR-UNIQUE-AUTHENTICATION-TOKEN-PER-REQUEST",
"ntpID": "1234567",
"formData": 
    {
        "paRes": "THE-DATA-THAT-YOU-RECEIVE-FROM-THE-BANK"
    }
}
```

#### Example response

Below you can find an example response. You can also head over to the [Payment V2 API page](/docs/payment-api/v2.x/intro.md) for more detailed information.

<details>
<summary>View response</summary>
```
{
"status": 1,
"code": 200,
"message": "Successfully verify authentication ",
"data": {
    "error": {
    "code": "00",
    "message": "Approved"
    },
    "payment": {
    "amount": 141.7,
    "currency": "RON",
    "data": {
        "AuthCode": "4MHf",
        "BIN": "990000",
        "ISSUER": "Netopia GB",
        "ISSUER_COUNTRY": "642",
        "RRN": "m5kLj2HOLSfn"
    },
    "ntpID": "1234567",
    "status": 3,
    "token": "NTY1Mzq4mPwzwb4nynMLEfcwrA0MnEUJ/19Pk9doJWe5PWxoLhQC++W/Eqh6h/wB1KCDVSiBCkaWYtfeWFzWyFoP6YbS"
    }
}
}
```
</details>

