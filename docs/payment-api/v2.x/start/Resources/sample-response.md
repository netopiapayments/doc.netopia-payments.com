---
sidebar_position: 2
title: Sample Response
---

# Sample Response

## Overview

When you initiate a payment request using `/payment/card/start`, the API returns a structured response containing:

- **Success response**: For approved transactions.
- **3D Secure authentication required**: When further verification is needed.
- **Error response**: If the request fails due to incorrect parameters or transaction issues.

### Response Components

Each response consists of:
- **`customerAction`**: Present if further action is required (e.g., 3D Secure authentication).
- **`error`**: Contains an error code and message if the request fails.
- **`payment`**: Provides details of the transaction, including status, amount, currency, and transaction ID.

---

## Successful Response

A successful response indicates that the payment was processed and approved.

### Example: Standard Success Response

```json
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

#### Key Fields:
- **`status: 3`** → Payment successfully processed.
- **`code: "00"`** → Indicates the payment was approved.
- **`ntpID`** → Unique transaction identifier.
- **`token`** → If available, can be used for future payments.

---

## 3D Secure Authentication Required

If 3D Secure authentication is required, the response includes a redirection URL and an authentication token.

### Example: 3D Secure Required Response

```json
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

#### Key Fields:
- **`status: 15`** → Indicates that 3D Secure authentication is required.
- **`authenticationToken`** → Must be used for verification.
- **`url`** → Redirect the user to this URL for authentication.

#### Next Steps:
1. Redirect the user to `customerAction.url`.
2. After authentication, finalize the payment using the **Verify Authentication** endpoint.

---

## Error Response

If a transaction fails, the API returns an error code and message explaining the reason.

### Example: Error Response

```json
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

#### Key Fields:
- **`status: 5`** → The payment was not completed.
- **`code: "56"`** → Indicates the order is closed (possibly a duplicate or already completed).

#### Common Error Statuses:
<a class="button button--primary button--lg" href="errors-statuses">Go to Error Statuses</a>

---

## Notes on Responses

- If the server responds with **`status = 15`** and **`error.code = 100`**, 3-D Secure is required:
  - Check the `customerAction` object.
  - Redirect the user for authentication.
  - Finalize via `verify-auth`.

- A successful **non-3DS** transaction usually has:
  - **`status: 3`** or **`status: 5`**.
  - **`error.code: "00"`** or `"Approved"`.

For further details, refer to the **StartResponse** section in the OpenAPI specification.