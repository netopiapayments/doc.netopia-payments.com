---
sidebar_position: 1
title: Sample Request
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Start Payment Request Example

## Overview
This endpoint initiates a card payment request. Based on the response received, the process can either continue with 3D Secure authentication or be completed directly.  
**Note:** For payments requiring 3D Secure authentication, the user must be redirected to the authentication URL.

---

## Sample Code

  :::tip Important
  - Set `token` in `instrument` if you have a saved payment token; otherwise, fill in the card fields (`account`, `expMonth`, `expYear`, `secretCode`).
  - `emailSubject` and `cancelUrl` are optional, but `notifyUrl`, `redirectUrl`, and `language` are required.
  :::

<Tabs groupId="operating-systems">
  <TabItem value="json" label="Json Structure">

  ```json
  {
  "config": {
    "emailTemplate": "confirm",
    "notifyUrl": "http://yourdomain.com/example/ipn.php",
    "redirectUrl": "http://yourdomain.com/example/backUrl.php",
    "language": "en"
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
      "expYear": 2025,
      "secretCode": "111",
      "token": ""
    }
  },
  "order": {
    "posSignature": "XXXX-XXXX-XXXX-XXXX",
    "dateTime": "2023-08-24T14:15:22Z",
    "description": "Order Desc",
    "orderID": "stringOrderID12345",
    "amount": 200,
    "currency": "USD",
    "billing": {
      "email": "user@example.com",
      "phone": "+1 555-555-5555",
      "firstName": "John",
      "lastName": "Doe",
      "city": "New York",
      "country": 840,
      "countryName": "United States",
      "state": "NY",
      "postalCode": "10001",
      "details": "123 5th Avenue, Apt 7"
    }
  }
}
  ```

  </TabItem>
  <TabItem value="curl" label="Curl Request">

  ```bash
  curl --location --request POST 'https://secure.sandbox.netopia-payments.com/payment/card/start' \
--header 'Authorization: YourApiKeyFromNETOPIA-PaymentsAdminPANEL--YourUNICHETOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
  "config": {
    "notifyUrl": "http://yourdomain.com/example/ipn.php",
    "redirectUrl": "http://yourdomain.com/example/backUrl.php",
    "language": "en"
  },
  "payment": {
    "options": {
      "installments": 1
    },
    "instrument": {
      "type": "card",
      "account": "9876543210987654",
      "expMonth": 1,
      "expYear": 2025,
      "secretCode": "111"
    }
  },
  "order": {
    "posSignature": "XXXX-XXXX-XXXX-XXXX",
    "dateTime": "2023-08-24T14:15:22Z",
    "description": "Order Desc",
    "orderID": "stringOrderID4694",
    "amount": 200,
    "currency": "USD",
    "billing": {
      "email": "user@example.com",
      "phone": "+1 333-222-1111",
      "firstName": "John",
      "lastName": "Doe",
      "city": "New York",
      "country": 840,
      "countryName": "United States",
      "state": "NY",
      "postalCode": "12345",
      "details": "Billing address details"
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
      "notifyUrl": "http://yourdomain.com/example/ipn.php",
      "redirectUrl": "http://yourdomain.com/example/backUrl.php",
      "language": "en"
    },
    "payment": {
      "options": {
        "installments": 1
      },
      "instrument": {
        "type": "card",
        "account": "9900004810225098",
        "expMonth": 1,
        "expYear": 2025,
        "secretCode": "111"
      }
    },
    "order": {
      "posSignature": "XXXX-XXXX-XXXX-XXXX",
      "dateTime": "2023-08-24T14:15:22Z",
      "description": "Order Desc",
      "orderID": "stringOrderID4694",
      "amount": 200,
      "currency": "USD",
      "billing": {
        "email": "user@example.com",
        "phone": "+1 333-222-1111",
        "firstName": "John",
        "lastName": "Doe",
        "city": "New York",
        "country": 840,
        "countryName": "United States",
        "state": "NY",
        "postalCode": "12345",
        "details": "Billing address details"
      }
    }
  }',
  CURLOPT_HTTPHEADER => array(
    'Authorization: YourApiKeyFromNETOPIA-PaymentsAdminPANEL--YourUNICHETOKEN',
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>
  ```

  </TabItem>
</Tabs>

---