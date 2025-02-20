---
sidebar_position: 3
title: Starting a Payment
---

# Starting a Payment

To initiate a new payment, you begin with the **`/payment/card/start`** endpoint.  
This endpoint sends all the necessary details of a transaction to the NETOPIA Payments server.

Depending on the **start** endpoint's **response**, you may need to continue the 3-D Secure authentication flow via **[verify-auth](../authorize/authorize-intro)**.

---

## Live/Production

```http
https://secure.mobilpay.ro/pay/payment/card/start
```

## Sandbox/Test

```http
https://secure.sandbox.netopia-payments.com/payment/card/start
```

---

## Request Structure

Below is a concise overview of the JSON payload you should send to `/payment/card/start`.  
For advanced usage or additional fields, refer to the **OpenAPI** specification (particularly `StartRequest`).

    <h4>Check a full example of a request payload.</h4>
    <a class="button button--primary button--lg" href="Resources/sample-request">View Sample Request</a>

---

## Request Fields

The start request is composed of three main sections: config, payment, and order.

### 1. Config

| Field         | Type   | Description                                           | Required | Who Configures |
| ------------- | ------ | ----------------------------------------------------- | -------- | -------------- |
| emailTemplate | string | Name of a custom email template shared by NETOPIA     | No       | Operator       |
| emailSubject  | string | Email subject if emailTemplate is set                 | No       | Operator       |
| cancelUrl     | string | URL where user is redirected if payment is cancelled  | No       | Merchant       |
| notifyUrl     | string | The merchant URL for receiving payment notifications  | Yes      | Merchant       |
| redirectUrl   | string | The callback URL after 3D Secure or finalization      | Yes      | Merchant       |
| language      | string | Language code (ISO 639-1), e.g. "en", "ro"            | Yes      | Merchant       |

### 2. Payment

#### (a) Options

| Field        | Type    | Description               | Required | Who Configures |
| ------------ | ------- | ------------------------- | -------- | -------------- |
| installments | integer | Number of installments    | No       | Operator       |
| bonus        | integer | Loyalty points to use     | No       | Operator       |

#### (b) Instrument

| Field      | Type    | Description                              | Required         | Who Provides |
| ---------- | ------- | ---------------------------------------- | ---------------- | ------------ |
| type       | string  | Payment method type (e.g. "card")        | Yes (unless token) | Client       |
| account    | string  | Card number (PAN)                        | Yes (unless token) | Client       |
| expMonth   | integer | Card expiry month (1–12)                 | Yes (unless token) | Client       |
| expYear    | integer | Card expiry year (YYYY)                  | Yes (unless token) | Client       |
| secretCode | string  | CVV/CVC code                              | Yes (unless token) | Client       |
| token      | string  | Token from a previous transaction/binding| No               | Operator     |

#### (c) Data

General device/browser information to help with fraud checks and 3-D Secure.

| Field                | Type    | Description                     | Required | Provided By |
| -------------------- | ------- | ------------------------------- | -------- | ----------- |
| BROWSER_USER_AGENT   | string  | Client browser’s user agent     | No       | Client      |
| OS                   | string  | Operating System name           | No       | Client      |
| OS_VERSION           | string  | Operating System version        | No       | Client      |
| MOBILE               | string  | "true"/"false" if mobile        | No       | Client      |
| SCREEN_POINT         | string  | Extra screen size info          | No       | Client      |
| SCREEN_PRINT         | string  | Extra data about resolution     | No       | Client      |
| BROWSER_COLOR_DEPTH  | string  | E.g. "24" or "32"               | No       | Client      |
| BROWSER_SCREEN_WIDTH | string  | Screen width in pixels          | No       | Client      |
| BROWSER_SCREEN_HEIGHT| string  | Screen height in pixels         | No       | Client      |
| BROWSER_PLUGINS      | string  | Plugins present in the browser  | No       | Client      |
| BROWSER_JAVA_ENABLED | string  | "true"/"false"                  | No       | Client      |
| BROWSER_LANGUAGE     | string  | E.g. "en-US"                    | No       | Client      |
| BROWSER_TZ           | string  | Timezone name                   | No       | Client      |
| BROWSER_TZ_OFFSET    | string  | Timezone offset from UTC        | No       | Client      |
| IP_ADDRESS           | string  | User’s IP address               | No       | Client      |

### 3. Order

| Field        | Type    | Description                                           | Required | Who Provides |
| ------------ | ------- | ----------------------------------------------------- | -------- | ------------ |
| ntpID        | string  | NETOPIA transaction ID (leave empty "" for new payments) | No       | Operator     |
| posSignature | string  | POS Signature ID from your NETOPIA account            | Yes      | Merchant     |
| dateTime     | string  | Timestamp of when the order is created (ISO 8601, e.g. "2023-08-24T14:15:22Z") | Yes | Merchant |
| description  | string  | Brief description of the order                        | Yes      | Merchant     |
| orderID      | string  | Unique merchant order ID                              | Yes      | Merchant     |
| amount       | float   | Total amount to be charged                            | Yes      | Merchant     |
| currency     | string  | ISO 4217 currency code (e.g. "RON", "EUR")            | Yes      | Merchant     |

#### (a) Billing Information

| Field       | Type    | Description                     | Required | Provided By |
| ----------- | ------- | ------------------------------- | -------- | ----------- |
| email       | string  | Customer’s billing email        | Yes      | Client      |
| phone       | string  | Customer’s billing phone number | Yes      | Client      |
| firstName   | string  | Customer’s first name           | Yes      | Client      |
| lastName    | string  | Customer’s last name            | Yes      | Client      |
| city        | string  | City for billing address        | Yes      | Client      |
| country     | integer | Numeric ISO 3166-1 code for country | Yes  | Client      |
| state       | string  | State or region                 | Yes      | Client      |
| postalCode  | string  | Billing ZIP code                | Yes      | Client      |
| details     | string  | Additional notes for billing    | Yes      | Client      |

#### (b) Shipping Information

| Field       | Type    | Description                     | Required | Provided By |
| ----------- | ------- | ------------------------------- | -------- | ----------- |
| email       | string  | Recipient’s email               | Yes      | Client      |
| phone       | string  | Recipient’s phone               | Yes      | Client      |
| firstName   | string  | Recipient’s first name          | Yes      | Client      |
| lastName    | string  | Recipient’s last name           | Yes      | Client      |
| city        | string  | City for shipping address       | Yes      | Client      |
| country     | integer | Numeric ISO 3166-1 code for shipping country | Yes | Client |
| state       | string  | State or region                 | Yes      | Client      |
| postalCode  | string  | ZIP code                        | Yes      | Client      |
| details     | string  | Additional notes for shipping   | Yes      | Client      |

#### (c) Products

Products is an array containing each item in the cart:

| Field    | Type    | Description               | Required | Who Provides |
| -------- | ------- | ------------------------- | -------- | ------------ |
| name     | string  | Product name              | No       | Merchant     |
| code     | string  | Product code or SKU       | No       | Merchant     |
| category | string  | Category or product group | No       | Merchant     |
| price    | int     | Unit price for the product| No       | Merchant     |
| vat      | int     | VAT percentage            | No       | Merchant     |

#### (d) Installments

| Field     | Type    | Description               | Required | Who Provides |
| --------- | ------- | ------------------------- | -------- | ------------ |
| selected  | integer | Number of installments chosen | Yes  | Operator     |
| available | array   | List of possible installments (e.g., [0,3,6]) | Yes | Operator |

#### (e) Data

| Field      | Type    | Description               | Required | Who Provides |
| ---------- | ------- | ------------------------- | -------- | ------------ |
| property1  | string  | Custom extra data (merchant use) | No | Merchant     |
| property2  | string  | Custom extra data (merchant use) | No | Merchant     |

## Notes on the Response

:::note
- If the server responds with `status = 15` and `error.code = 100`, 3-D Secure is required. Check the `customerAction` object, redirect the user for authentication, and then finalize via verify-auth.
- A successful non-3DS transaction usually has `status = 3` or `status = 5` with `error.code = "00"` or `"Approved"`.
:::

For more details on parsing the response, see `StartResponse` in the OpenAPI or your next step: [***Authorize a Payment***](../authorize/authorize-intro).

