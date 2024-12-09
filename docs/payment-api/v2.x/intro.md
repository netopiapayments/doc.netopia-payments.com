---
sidebar_position: 1
title: Netopia API v2.x
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Getting started

The Payments API was designed and implemented by NETOPIA Payments development team to be used in third party applications to cover the payment process.

[https://netopia-system.stoplight.io/docs/payments-api/6530c434c2f93-netopia-payments-merchant-api](https://netopia-system.stoplight.io/docs/payments-api/6530c434c2f93-netopia-payments-merchant-api)

### How it works

![Netopia UML](/img/netopia-uml.png)

You can see the payment flow in the graphic above.

First, the client sends the order information to the merchant's server. The merchant creates a checkout session with the 
Netopia API.

If the credit card is not using 3DS Secure, the checkout session is returned from the Netopia API and the client is then redirected to the Netopia Checkout page, where he completes the payment.

If the card is using 3DS Secure, Netopia API returns an auth code to the merchant's server to complete the 3DS Secure and then the client is redirected to the Netopia Checkout page to complete the payment.

After the payment is complete, the client is then forwarded back to the merchant's application.

### Merchant account

You need to have a merchant account opened with Netopia in order to interact with our API. If you don't have one, you can **[register here](https://netopia-payments.com/register/)**.

### API Key

You need to generate an API Key that will be used to communicate with the payment API. You can create one by logging into the Netopia admin dashboard, click on the profile icon in the top right of the page and then on "Securitate / Security". Here you can create and manage the API Keys.

:::info[SANDBOX API KEY]

You can generate an API Key for our sandbox testing environment by clicking on the "Mediu de testare / Testing environment" button in the left menu of the [Netopia admin dashboard](https://admin.netopia-payments.com) and following exactly the same steps for the live API Keys

:::

![API Key](/img/payment-v2-1.png)

## Endpoints

After you completed all the requirements listed above, you can now access our API endpoints.

**LIVE**: https://secure.mobilpay.ro/pay

**SANDBOX (Testing environment)**: https://secure.sandbox.netopia-payments.com

- NETOPIA offers a convenient way to test the payment process during or after your application's implementation. With a dedicated sandbox environment that mirrors the features of the live one, you can ensure everything works seamlessly.

#### OpenAPI 3.0 Specifications

You can check out our OpenAPI link to get a more detailed view into Netopia Payments' API

[https://secure.sandbox.netopia-payments.com/spec](https://secure.sandbox.netopia-payments.com/spec)

### Starting a payment

To initiate a new payment, you need to access the /payment/card/start endpoint. Here you send the full details of a single transaction to the Netopia Payments' server.

#### Endpoint

:::tip[LIVE]

```
https://secure.mobilpay.ro/pay/payment/card/start
```

:::

:::warning[SANDBOX]

```
https://secure-sandbox.netopia-payments.com/payment/card/start
```

:::

Below you can find the code structure and some sample requests

<details>
<summary>Start payment request code structure</summary>
```
{
  "config": {
    "emailTemplate": "string",
    "notifyUrl": "string",
    "redirectUrl": "string",
    "language": "string"
  },
  "payment": {
    "options": {
      "installments": int,
      "bonus": int
    },
    "instrument": {
      "type": "string",
      "account": "string",
      "expMonth": int,
      "expYear": int,
      "secretCode": "string",
      "token": "string"
    },
    "data": {
      "BROWSER_USER_AGENT": "string",
      "OS": "string",
      "OS_VERSION": "string",
      "MOBILE": "string",
      "SCREEN_POINT": "string",
      "SCREEN_PRINT": "string",
      "BROWSER_COLOR_DEPTH": "string",
      "BROWSER_SCREEN_HEIGHT": "string",
      "BROWSER_SCREEN_WIDTH": "string",
      "BROWSER_PLUGINS": "string",
      "BROWSER_JAVA_ENABLED": "string",
      "BROWSER_LANGUAGE": "string",
      "BROWSER_TZ": "string",
      "BROWSER_TZ_OFFSET": "string",
      "IP_ADDRESS": "string"
    }
  },
  "order": {
    "ntpID": "string",
    "posSignature": "string",
    "dateTime": "string",
    "description": "string",
    "orderID": "string",
    "amount": float,
    "currency": "string",
    "billing": {
      "email": "string",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": int,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "shipping": {
      "email": "string",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": int,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "products": [
      {
        "name": "string",
        "code": "string",
        "category": "string",
        "price": int,
        "vat": int
      }
    ],
    "installments": {
      "selected": 0,
      "available": [
        0
      ]
    },
    "data": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```
</details>

<details>
<summary>Sample request (JSON, CURL, PHP)</summary>
<Tabs groupId="sample-request">
  <TabItem value="json" label="JSON structure">

 ```
{
  "config": {
    "emailTemplate": "confirm",
    "notifyUrl": "http://yourdomain.com/example/ipn.php",
    "redirectUrl": "http://yourdomain.com/example/backUrl.php",
    "language": "ro"
  },
  "payment": {
    "options": {
      "installments": 1,
      "bonus": 0
    },
    "instrument": {
      "type": "card",
      "account": "9900004810225098",
      "expMonth": 1,
      "expYear": 2023,
      "secretCode": "111",
      "token": ""
    },
    "data": {
      "BROWSER_USER_AGENT": "AMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
      "OS": "Linux",
      "OS_VERSION": "x86_64",
      "MOBILE": "false",
      "SCREEN_POINT": "false",
      "SCREEN_PRINT": "Current Resolution: 1920x1080, Available Resolution: 1853x1053, Color Depth: 24, Device XDPI: undefined, Device YDPI: undefined",
      "BROWSER_COLOR_DEPTH": "24",
      "BROWSER_SCREEN_HEIGHT": "1080",
      "BROWSER_SCREEN_WIDTH": "1920",
      "BROWSER_PLUGINS": "PDF Viewer, Chrome PDF Viewer, Chromium PDF Viewer, Microsoft Edge PDF Viewer, WebKit built-in PDF",
      "BROWSER_JAVA_ENABLED": "false",
      "BROWSER_LANGUAGE": "en-US",
      "BROWSER_TZ": "Europe/Bucharest",
      "BROWSER_TZ_OFFSET": "-120",
      "IP_ADDRESS": "37.221.166.134"
    }
  },
  "order": {
    "ntpID": "",
    "posSignature": "RAND-OM01-SIGN-TURE-3POS",
    "dateTime": "2019-08-24T14:15:22Z",
    "description": "Order Desc",
    "orderID": "stringOrderIDdddfgdfg3323",
    "amount": 200,
    "currency": "RON",
    "billing": {
      "email": "user@example.com",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": 0,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "shipping": {
      "email": "user@example.com",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": 0,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "products": [
      {
        "name": "string",
        "code": "string",
        "category": "string",
        "price": 0,
        "vat": 0
      }
    ],
    "installments": {
      "selected": 1,
      "available": [
        0
      ]
    },
    "data": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```
  </TabItem>
  <TabItem value="curl" label="CURL Request">

  ```shell
  curl --location --request POST 'https://secure.sandbox.netopia-payments.com/payment/card/start' \
--header 'Authorization: YourApiKeyFromNETOPIA-PaymentsAdminPANEL--YourUNICHETOKEN' \
--data-raw '{
  "config": {
    "emailTemplate": "confirm",
    "notifyUrl": "http://yourdomain.com/example/ipn.php",
    "redirectUrl": "http://yourdomain.com/example/backUrl.php",
    "language": "ro"
  },
  "payment": {
    "options": {
      "installments": 1,
      "bonus": 0
    },
    "instrument": {
      "type": "card",
      "account": "9876543210987654",
      "expMonth": 1,
      "expYear": 2023,
      "secretCode": "111",
      "token": ""
    },
    "data": {
      "BROWSER_USER_AGENT": "AMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
      "OS": "Linux",
      "OS_VERSION": "x86_64",
      "MOBILE": "false",
      "SCREEN_POINT": "false",
      "SCREEN_PRINT": "Current Resolution: 1920x1080, Available Resolution: 1853x1053, Color Depth: 24, Device XDPI: undefined, Device YDPI: undefined",
      "BROWSER_COLOR_DEPTH": "24",
      "BROWSER_SCREEN_HEIGHT": "1080",
      "BROWSER_SCREEN_WIDTH": "1920",
      "BROWSER_PLUGINS": "PDF Viewer, Chrome PDF Viewer, Chromium PDF Viewer, Microsoft Edge PDF Viewer, WebKit built-in PDF",
      "BROWSER_JAVA_ENABLED": "false",
      "BROWSER_LANGUAGE": "en-US",
      "BROWSER_TZ": "Europe/Bucharest",
      "BROWSER_TZ_OFFSET": "-120",
      "IP_ADDRESS": "73.122.66.134"
    }
  },
  "order": {
    "ntpID": "",
    "posSignature": "ABCD-ABCD-ABCD-ABCD-ABCD",
    "dateTime": "2021-08-24T14:15:22Z",
    "description": "Order Desc",
    "orderID": "stringOrderID4694",
    "amount": 200,
    "currency": "RON",
    "billing": {
      "email": "user@example.com",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": 0,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "shipping": {
      "email": "user@example.com",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": 0,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "products": [
      {
        "name": "string",
        "code": "string",
        "category": "string",
        "price": 0,
        "vat": 0
      }
    ],
    "installments": {
      "selected": 1,
      "available": [
        0
      ]
    },
    "data": {
      "property1": "string",
      "property2": "string"
    }
  }
}'
  ```

  </TabItem>
  <TabItem value="php" label="PHP Request">

  ```php
  <?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://secure.sandbox.netopia-payments.com/payment/card/start',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "config": {
    "emailTemplate": "confirm",
    "notifyUrl": "http://35.204.43.65/demoV2/example/ipn.php",
    "redirectUrl": "http://35.204.43.65/demoV2/example/backUrl.php",
    "language": "ro"
  },
  "payment": {
    "options": {
      "installments": 1,
      "bonus": 0
    },
    "instrument": {
      "type": "card",
      "account": "9900004810225098",
      "expMonth": 1,
      "expYear": 2023,
      "secretCode": "111",
      "token": ""
    },
    "data": {
      "BROWSER_USER_AGENT": "AMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
      "OS": "Linux",
      "OS_VERSION": "x86_64",
      "MOBILE": "false",
      "SCREEN_POINT": "false",
      "SCREEN_PRINT": "Current Resolution: 1920x1080, Available Resolution: 1853x1053, Color Depth: 24, Device XDPI: undefined, Device YDPI: undefined",
      "BROWSER_COLOR_DEPTH": "24",
      "BROWSER_SCREEN_HEIGHT": "1080",
      "BROWSER_SCREEN_WIDTH": "1920",
      "BROWSER_PLUGINS": "PDF Viewer, Chrome PDF Viewer, Chromium PDF Viewer, Microsoft Edge PDF Viewer, WebKit built-in PDF",
      "BROWSER_JAVA_ENABLED": "false",
      "BROWSER_LANGUAGE": "en-US",
      "BROWSER_TZ": "Europe/Bucharest",
      "BROWSER_TZ_OFFSET": "-120",
      "IP_ADDRESS": "37.221.166.134"
    }
  },
  "order": {
    "ntpID": "",
    "posSignature": "RAND-OM01-SIGN-TURE-3POS",
    "dateTime": "2019-08-24T14:15:22Z",
    "description": "Order Desc",
    "orderID": "stringOrderID4694",
    "amount": 200,
    "currency": "RON",
    "billing": {
      "email": "user@example.com",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": 0,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "shipping": {
      "email": "user@example.com",
      "phone": "string",
      "firstName": "string",
      "lastName": "string",
      "city": "string",
      "country": 0,
      "state": "string",
      "postalCode": "string",
      "details": "string"
    },
    "products": [
      {
        "name": "string",
        "code": "string",
        "category": "string",
        "price": 0,
        "vat": 0
      }
    ],
    "installments": {
      "selected": 1,
      "available": [
        0
      ]
    },
    "data": {
      "property1": "string",
      "property2": "string"
    }
  }
}',
  CURLOPT_HTTPHEADER => array(
    'Authorization: YourApiKeyFromNETOPIA-PaymentsAdminPANEL--YourUNICHETOKEN'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
  ```
  </TabItem>
</Tabs>
</details>

#### Responses

There are different responses based on the type of card being used. If 3D Secure is used, you will receive an **authenticationToken** object and you will need to continue the transaction by accessing our **authorize endpoint** to send a verification to the client's bank, and then you need to verify the response from the bank again with Netopia by accessing the **verify-auth endpoint**.

You can look at some responses example below.

For the full list of response codes you can check out the [Status & Error Codes](#status-codes)

<details>
<summary>Sample responses</summary>
<Tabs groupId="sample-responses">
<TabItem value="response-yes" label="Success Response (no 3D Secure)">
```
{
  "customerAction": {},
  "error": {
    "code": "00",
    "message": "Approved"
  },
  "payment": {
    "amount": 200,
    "currency": "RON",
    "data": {
      "AuthCode": "24od",
      "BIN": "990000",
      "ISSUER": "Netopia GB",
      "ISSUER_COUNTRY": "642",
      "RRN": "hYnY8zpdcNo-"
    },
    "ntpID": "1309088",
    "status": 3,
    "token": "MjMyMjqqdx3XTbYC78OoidTk6DTtEvHcrqcz91Pr4PQqXf/u33xoDkdgIlkq226avk1ik8fvLElkbLopnvNbIs8+Ve6L"
  }
}
```
</TabItem>
<TabItem value="response-yes-3ds" label="Success Response 3D Secure">
```
{
  "customerAction": {
    "authenticationToken": "iNPqJWDRoRXsd77StNELrvBiGr_ihsLdvikrsTiYqprMh9ViBO-lq_i38YsmxT-JTZPqf04uS4dBhCAQjNSxcAyZcVAcGhCH3r7knN-KePOzno16psy5O_OvzfRlbuvkrBtrpjcXyzcTi--M6uM-X1C7aBzVgPa1",
    "formData": {
      "backUrl": "http://yourdomain.com/example/backUrl.php",
      "paReq": "AT5ewtLVDsEgB5lcRjeEoSMF6RZ4A3sPWhsU3IiSy8X0XdrQ49D7b-oUMYnwslzZ436FCQv6aB4m7Sn1QNqYzZU="
    },
    "type": "Authentication3D",
    "url": "https://secure.sandbox.netopia-payments.com/sandbox/authorize"
  },
  "error": {
    "code": "100",
    "message": "Approved"
  },
  "payment": {
    "amount": 200,
    "currency": "RON",
    "ntpID": "1310396",
    "status": 15
  }
}
```
</TabItem>
<TabItem value="error-response" label="Error Response">
```
{
  "customerAction": {},
  "error": {
    "code": "56",
    "message": "Order closed"
  },
  "payment": {
    "amount": 200,
    "currency": "RON",
    "ntpID": "1309088",
    "status": 5
  }
}
```
</TabItem>
</Tabs>

</details>

### Authorize

The **authorize endpoint** is used only for the transactions with **3D Secure cards**.

You will need to send a HTTP request via POST method to the **card holder's bank authentication URL** to authorize a transaction.

#### Endpoint

:::tip[LIVE]

```
https://secure.mobilpay.ro/pay/authorize
```

:::

:::warning[SANDBOX]

```
https://secure.sandbox.netopia-payments.com/sandbox/authorize
```

:::

Below you can find the code structure

<details>
<summary>Authorize payment request code structure</summary>
```
{
  "paReq": "string",
  "backUrl": "string"
}
```
</details>

---

#### What is paReq and backUrl?

The **paReq** is an unique code per transaction, generated by Netopia Payments. You receive this code from the start payment endpoint response.

The cardholder's bank will authorize the transaction and communicate the result to your application through the **backUrl**. In practice, the **backUrl** is a publicly accessible URL on your application or website that listens for responses from the cardholder's bank.

The generated token (**paRes**) will be sent to your **backUrl**.

---

#### How to identify if a transaction is being made with a 3D Secure card?

To determine if a transaction request involves a 3DS card, you can check the response from the **start endpoint**. Here's how:

- In the response, look at **customerAction** -> **type**. If the value is **Authentication3D**, it indicates that this specific transaction requires 3D Secure authentication to be completed.
- Additionally, the response provides an error code and payment status. For transactions involving 3DS cards, the error code will be ```100```, and the payment status will be ```15``` in the start endpoint response.

This information makes it easy to identify and handle 3DS transactions effectively.

---

#### How to get the "authentication URL" of the cardholder's bank?

To retrieve the **authentication URL** of the cardholder's bank, refer to the response from the **start endpoint**.

In the response, locate **customerAction** -> **url**. This field contains the authentication URL provided by the cardholder's bank, which is required to proceed with the 3D Secure authentication process.

---

Below you can find some sample requests

<details>
<summary>Sample request (HTML, CURL, PHP)</summary>
<Tabs groupId="sample-request">
  <TabItem value="json" label="HTML Request">

 ```html
<html>
    <head>
        <title>NETOPIA Payments DEMO</title>
    </head>
    <body>
        <form method="POST" action="https://secure.sandbox.netopia-payments.com/sandbox/authorize">
            <input type="hidden" name="paReq" value="rcrO9tXAiBpwv-ZE4JQ4yeI-tbf6aJ0ZsCV-cEa9pvHEtfg-IVEm9YrypUW_--AcWWwLQB9pyI="/>
            <input type="hidden" name="backUrl" value="http://yourdomain.com/example/backUrl.php"/>
            <input type="submit" value="Submit">
        </form>
    </body>
</html>
```
  </TabItem>
  <TabItem value="curl" label="CURL Request">

  ```shell
curl --location --request POST 'https://secure.sandbox.netopia-payments.com/sandbox/authorize' \
--form 'paReq="rcrO9tXAiBpwv-ZE4JQ4yeI-tbf6aJ0ZsCV-cEa9pvHEtfg-IVEm9YrypUW_--AcWWwLQB9pyI="' \
--form 'backUrl="http://yourdomain.com/example/backUrl.php"'
  ```

  </TabItem>
  <TabItem value="php" label="PHP Request">

  ```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://secure.sandbox.netopia-payments.com/sandbox/authorize',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => array('paReq' => 'rcrO9tXAiBpwv-ZE4JQ4yeI-tbf6aJ0ZsCV-cEa9pvHEtfg-IVEm9YrypUW_--AcWWwLQB9pyI=','backUrl' => 'http://yourdomain.com/example/backUrl.php'),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
  ```
  </TabItem>
</Tabs>
</details>

---

#### Response

When the cardholder's bank receives the payment request, it will authorize the transaction and send the authorization result to your application.

The result will be sent as a token called **paRes** to your designated **backUrl**.

Once you receive the **paRes** token, it must be verified with Netopia Payments to complete the authorization process through the **verify-auth endpoint**.

For the full list of response codes you can check out the [Status & Error Codes](#status-codes)

### Verify Auth

The **verify-auth endpoint** is also used only for the transactions with 3D Secure cards, and only **after** you have received the response from the **authorize endpoint**.

In order to complete a transaction process you need to verify the **paRes** token and **ntpID**.

#### Endpoint

:::tip[LIVE]

```
https://secure.mobilpay.ro/pay/card/verify-auth
```

:::

:::warning[SANDBOX]

```
https://secure.sandbox.netopia-payments.com/payment/card/verify-auth
```

:::

Below you can find the code structure

<details>
<summary>Verify auth request code structure</summary>
```
{
  "authenticationToken": "string",
  "ntpID": "string",
  "formData": {
    "paRes": "string"
  }
}
```
</details>

---

#### What is the authenticationToken and how to get it?

The **authenticationToken** is a unique token generated by Netopia Payments for each transaction. It is used to authenticate and track the specific transaction throughout the payment process.

You can obtain the **authenticationToken** from the response of the **start endpoint**. It will be included in the response data, allowing you to use it for further steps in the transaction process.

---

#### What is ntpID and how to get it?

The **ntpID** is a unique identifier assigned to each transaction by Netopia Payments. It is used to track and reference the transaction throughout the payment process.

You can retrieve the **ntpID** from the response of the **start endpoint**, where it will be included as part of the response data.

---

Below you can find some sample requests

<details>
<summary>Sample request (JSON, CURL, PHP)</summary>
<Tabs groupId="sample-request">
  <TabItem value="json" label="JSON structure">

 ```{
  "authenticationToken": "ihsLdvikrsTiYqprMh9ViBO_iNPqJWDRoRXsd77StNELrvBiGr-JTZPqf04uS4dBhCAQjNSxcAyZcVAcGhCH3r7knNlq_i38YsmxT-KePOzno16psy5O_OvzfRlbuvkrBtrpjcXyzcTi--M6uM-X1C7aBzVgPa1",
  "ntpID": "1310396",
  "formData": {
    "paRes": "Tti9mI28jvShfDTK_7hn6TAZmeO7xQEpoc8wwKIR7tWWlybyWDiYEYRKKw=="
  }
}
```
  </TabItem>
  <TabItem value="curl" label="CURL Request">

  ```shell
curl --location --request POST 'https://secure.sandbox.netopia-payments.com/payment/card/verify-auth' \
--header 'Authorization: YourApiKeyFromNETOPIA-PaymentsAdminPANEL--YourUNICHETOKEN' \
--data-raw '{
  "authenticationToken": "ihsLdvikrsTiYqprMh9ViBO_iNPqJWDRoRXsd77StNELrvBiGr-JTZPqf04uS4dBhCAQjNSxcAyZcVAcGhCH3r7knNlq_i38YsmxT-KePOzno16psy5O_OvzfRlbuvkrBtrpjcXyzcTi--M6uM-X1C7aBzVgPa1",
  "ntpID": "1310396",
  "formData": {
    "paRes": "Tti9mI28jvShfDTK_7hn6TAZmeO7xQEpoc8wwKIR7tWWlybyWDiYEYRKKw=="
  }
}'
  ```

  </TabItem>
  <TabItem value="php" label="PHP Request">

  ```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://secure.sandbox.netopia-payments.com/payment/card/verify-auth',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "authenticationToken": "ihsLdvikrsTiYqprMh9ViBO_iNPqJWDRoRXsd77StNELrvBiGr-JTZPqf04uS4dBhCAQjNSxcAyZcVAcGhCH3r7knNlq_i38YsmxT-KePOzno16psy5O_OvzfRlbuvkrBtrpjcXyzcTi--M6uM-X1C7aBzVgPa1",
  "ntpID": "1310396",
  "formData": {
    "paRes": "Tti9mI28jvShfDTK_7hn6TAZmeO7xQEpoc8wwKIR7tWWlybyWDiYEYRKKw=="
  }
}',
  CURLOPT_HTTPHEADER => array(
    'Authorization: YourApiKeyFromNETOPIA-PaymentsAdminPANEL--YourUNICHETOKEN'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
  ```
  </TabItem>
</Tabs>
</details>

---

#### Responses

You can look at some response examples below (Success and error).

For the full list of response codes you can check out the [Status & Error Codes](#status-codes)

<details>
<summary>Sample responses</summary>
<Tabs groupId="sample-responses">
<TabItem value="response-yes" label="Success Response">
```
{
  "error": {
    "code": "00",
    "message": "Approved"
  },
  "payment": {
    "amount": 200,
    "currency": "RON",
    "data": {
      "AuthCode": "HenQ",
      "BIN": "990000",
      "ISSUER": "Netopia GB",
      "ISSUER_COUNTRY": "642",
      "RRN": "zVfHN8o9gRjn"
    },
    "ntpID": "1310396",
    "status": 3,
    "token": "MjMyNTotx7IbVyQ+ahEfk3v0ZX03NktTuBhDYQAAGRCoDzWfERrmE477yJnqDCem6RTWE3S1r2L7zNbihsOCA1clluQd"
  }
}
```
</TabItem>
<TabItem value="response-yes-3ds" label="Error Response">
```
{
  "error": {
    "code": "56",
    "message": "Order closed"
  },
  "payment": {
    "amount": 200,
    "currency": "RON",
    "ntpID": "1310396",
    "status": 3
  }
}
```
</TabItem>
</Tabs>

</details>

## Test cards

Here is a list of test cards that you can use in the SANDBOX environment.

        | Description    | Card Number    | CVV    | Expiration Date | Full Name |
        | :---           | :----:         | :----:  | :----:          | :---:      |
        | Accepted card, Garanti Bonuscard (*)       | 9900004810225098  | 111 | Any future date | Test Test |
        | Accepted card, Cardavantaj (*)   | 99110059532258  | 111 | Any future date | Test Test |
        | Expired card  | 9900541631437790 | 111 | Any future date | Test Test |
        | Insufficient funds   | 9900518572831942 | 111 | Any future date | Test Test |
        | Incorrect CVV number | 9900827979991500  | 111 | Any future date | Test Test |
        | Antifraud check     | 9900005786662552 | 111 | Any future date | Test Test |
        | Transaction not allowed    | 9900576270414197 | 111 | Any future date | Test Test |
        | Bank error     | 9900130597497640 | 111 | Any future date | Test Test |

    (*) *Can be used to generate transactions both in full amount, or in installments*

## Status & Error Codes {#status-codes}

### Status codes

-   **3** : Is paid
-   **5** : Is confirmed
-   **12** : Invalid Account
-   **15** : Need Authorization

### Error codes

-   **100** : Set authenticationToken & ntpID to session
-   **56** : Duplicated Order ID
-   **99** : There is another order with a different price
-   **19** : Expire Card Error
-   **20** : Insufficient Funds Error
-   **21** : CVV Error
-   **22** : CVV Error
-   **34** : Card Not Allowed Transaction Error
-   **0** : Card has no 3D Secure

# Introduction

The **Payments API**  was designed and implemented by NETOPIA Payments development team to be used in third party applications to cover the payment process.

[https://netopia-system.stoplight.io/docs/payments-api/6530c434c2f93-netopia-payments-merchant-api](https://netopia-system.stoplight.io/docs/payments-api/6530c434c2f93-netopia-payments-merchant-api)

## Prerequisites

You should have a merchant account with NETOPIA. If you dont yet have one, start by **[creating it](https://netopia-payments.com/register/)**.


### NETOPIA Payments administration platform
Login with your username/password to **[administration console](https://admin.netopia-payments.com/)**. From here you'll be able to configure your account, monitor incoming transactions, add users, etc.

NETOPIA gives you the possibility to test the payment process during or after the implemention of your application too by providing a sandbox environment which mirrors the features of production. It can be accessed directly from your production account or by logging in to **[sandbox](https://sandbox.netopia-payments.com)**.


### API KEY
In order to communicate with the payment API, you need a specific **API KEY**

From NETOPIA **[Payments admin](https://admin.netopia-payments.com/)** -> Profile -> Security, you can generate an **API KEY**

![Example API Key](/img/apiKey.jpg)

**Note:** 
-   You shoyld always pass the API KEY in the **HTTP Headers** of your request 
-   You can regenerate/remove/add a new API Key at any time

Once you have an **_ACTIVE ACCOUNT_** and an **_API KEY_**, you are almost ready to [start](start/start-strc.md) actual payments via **NETOPIA Payments' API**

## API Diagram
![Api diagram](/img/ApiDiagram.svg)

## Payments OpenAPI Specification
Following the link below you can find the **openapi 3.0 specification** to have bigger picture on NETOPIA Payments' API 

```
https://secure.sandbox.netopia-payments.com/spec
```

## API Reference
-   NETOPIA Payments API **Version 2** 
-   Release at **2021**
