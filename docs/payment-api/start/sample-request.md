---
sidebar_position: 2
title: Sample Request
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Start payment request example 


## Sample code
:::tip Start action
<Tabs groupId="operating-systems">
  <TabItem value="json" label="Json structure">

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
  <TabItem value="curl" label="Curl Request">

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
  <TabItem value="php" label="Php Request">

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
:::