---
sidebar_position: 2
title: Node.js SDK
---


## Overview

The NETOPIA Payments Node.js SDK provides seamless integration with the Netopia Payments API v2. It allows developers to handle payments, IPN verification, and status retrieval efficiently within their Node.js applications.

### Features

- Start a payment with customer details, products, and billing/shipping data.

- Retrieve the status of an order.

- Verify 3D Secure authentications.

- Validate IPNs (Instant Payment Notifications) for order updates.

- Compatible with both Sandbox and Live environments.

## Example of implementation

You can check out an example of implementation for online payment with credit card here: https://github.com/mobilpay/Node.js

## Endpoints

- Live: https://secure.mobilpay.ro
- Sandbox: https://sandboxsecure.mobilpay.ro (only HTTP POST requests accepted)

## Payment request structure

In order to send the payment request to NETOPIA Payments , you need to encrypt the payment data on **POST** method and encapsulate the information using the following structure:

<details>
<summary>View structure</summary>
```javascript
const data = {
  order: {
    $: {
      id: orderId,
      timestamp: date.getTime(),
      type: "card",
    },
    signature: "<your_netopia_seller_account_signature>",
    url: {
      return: "<your_return_URL>",
      confirm: "<your_confirm_URL>",
    },
    invoice: {
      $: {
        currency: currency,
        amount: amount,
      },
      details: "test plata",
      contact_info: {
        billing: {
          $: {
            type: "person",
          },
          first_name: "Test",
          last_name: "Test",
          address: "strada",
          email: "test@mobilpay.ro",
          mobile_phone: "mobilePhone",
        },
        shipping: {
          $: {
            type: "person",
          },
          first_name: "Test",
          last_name: "Test",
          address: "strada",
          email: "test@mobilpay.ro",
          mobile_phone: "mobilePhone",
        },
      },
    },
    ipn_cipher: "aes-256-cbc",
  },
}
```
</details>

**Requiered fields**: All the fields are requiered, except `shipping`.

**Confirm URL**: The confirm URL will be used for IPN (Instant Payment Notification) - i.e. to send information about the transaction's status.

**Redirect URL**: The redirect URL will be used to redirect the user / customer back to the merchant's website from the Netopia Payments page, after the payment is done.

