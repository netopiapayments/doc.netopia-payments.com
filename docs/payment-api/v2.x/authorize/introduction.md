---
id: authorize-intro
title: Authorize a Payment
sidebar_position: 1
---

# Authorize a Payment

This **Authorize** endpoint applies **only** to payments that require **3-D Secure (3DS)**. In most cases, you'll invoke it **after** receiving a 3DS indicator from the **Start** endpoint (`customerAction.type = "Authentication3D"`).

## How Does 3DS Authorization Work?
Whenever a **3DS** transaction is triggered:
- The **Start** response contains `error.code = 100` (indicating 3DS authentication is required).
- **payment.status = 15**, meaning authentication is necessary.
- A **customerAction.url** is provided (the URL where the user must authenticate).
- A unique **authenticationToken** is issued.

This flow ensures that the cardholder’s bank (ACS – Access Control Server) verifies the payer's identity before proceeding with the transaction.

## Why Is Authorization Needed?

For **3DS** transactions, the bank’s **Access Control Server (ACS)** must authenticate the user before payment can continue. The authentication process involves:
1. **Sending `paReq` (Payment Authentication Request)** to the bank via the provided `customerAction.url`.
2. The bank verifies the request and returns `paRes` (Payment Authentication Response) to your system via `backUrl`.
3. You finalize the transaction by calling **NETOPIA's** `/payment/card/verify-auth` endpoint.

**Key Steps in the Authorization Process:**
| Step | Action |
|------|--------|
| **Start Payment** | Call `/payment/card/start` and receive `customerAction.type = Authentication3D`. |
| **Redirect to Bank** | Send `paReq` and `backUrl` to `customerAction.url`. |
| **Receive `paRes`** | The bank redirects the user to `backUrl` with `paRes`. |
| **Verify with NETOPIA** | Call `/payment/card/verify-auth` to finalize payment. |

---

## When Do I Need to Authorize?

- **Only if the Start response indicates 3DS (`payment.status = 15`)**.
- If `payment.status = 3` (paid) or `payment.status = 5` (confirmed), **authorization is NOT required**.

---

## Endpoints Overview

You must send the authorization request to the appropriate environment:

| Environment | URL |
|------------|------------------------------------------------------|
| **Sandbox (Testing 3DS Flows)** | `https://secure.sandbox.netopia-payments.com/sandbox/authorize` |
| **Production (Live Transactions)** | The **`customerAction.url`** provided in the Start response (typically a bank’s 3DS server). |

:::warning
 Do **not** hardcode a production URL. Always use the `customerAction.url` from the **Start** response.
:::

---

## Next Steps

Follow these key guides to complete authorization:

1. [**Query Parameters**](./authorize-query)  
   Learn about `paReq` and `backUrl`—both required for authentication.
2. [**Sample Request**](./authorize-sample)  
   See how to send `paReq` and `backUrl` via **HTML form**, **cURL**, or **PHP**.
3. [**Authorize Response**](./authorize-response)  
   Understand how to process the bank’s response and finalize payment.