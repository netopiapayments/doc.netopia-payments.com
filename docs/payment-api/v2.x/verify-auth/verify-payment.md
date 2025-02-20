---
sidbar_position: 1
title: Verify a Payment
---

# Verify a Payment

The `verify-auth` endpoint is used **only** for transactions with **3DS-secured cards** and must be called **after** receiving the response from the `authorize` endpoint.

To complete the transaction process, you need to verify the **`paRes`** token and **`ntpID`**.

## Payment Verification Flow
| **Step** | **Action** |
|----------|-----------|
| **1. Start Payment** | Call `/payment/card/start` to initiate a payment. If 3D Secure is required, the response will contain `customerAction.type = Authentication3D`. |
| **2. Redirect to Bank** | Send `paReq` to the `customerAction.url` provided by NETOPIA. |
| **3. Receive Bank Response** | The bank redirects the user to `backUrl` with `paRes`. |
| **4. Finalize Payment** | Call `/payment/card/verify-auth` with `authenticationToken`, `ntpID`, and `paRes` to confirm authentication. |

## `verify-auth` Payment URL

**Sandbox:**
```
https://secure.sandbox.netopia-payments.com/payment/card/verify-auth
```
**Production:**
```
https://secure.mobilpay.ro/pay/payment/card/verify-auth
```

## Request Structure
```json
{
  "authenticationToken": "string",
  "ntpID": "string",
  "formData": {
    "paRes": "string"
  }
}
```

## Query Parameters
| **Parameter** | **Type** | **Required** | 
|--------------|--------|------------|
| `authenticationToken` | string | Yes | 
| `ntpID` | string | Yes | 
| `formData.paRes` | string | Yes | 


## Parameters Explanation

**What is `authenticationToken` and how to get it?**
- The **authenticationToken** is a unique token for authentication, generated per transaction by NETOPIA Payments.
- You receive the `authenticationToken` in the response from the `start` endpoint.

**What is `ntpID` and how to get it?**
- The **ntpID** is a unique transaction identifier assigned by NETOPIA Payments.
- You receive the `ntpID` in the response from the `start` endpoint.

**What is `paRes` and where does it come from?**
- The **paRes** (Payment Authentication Response) token is received from the bank after the **3D Secure authentication process**.
- You receive `paRes` as a parameter in your `backUrl` after the user completes the 3DS challenge.

---

## Sample Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info verify-auth
Below are examples of how to send a `verify-auth` request using different methods.
:::

<Tabs groupId="request-method">
  <TabItem value="json" label="JSON Request">

  ```json
  {
    "authenticationToken": "ihsLdvikrsTiYqprMh9ViBO_iNPqJWDRoRXsd77StNELrvBiGr-JTZPqf04uS4dBhCAQjNSxcAyZcVAcGhCH3r7knNlq_i38YsmxT-KePOzno16psy5O_OvzfRlbuvkrBtrpjcXyzcTi--M6uM-X1C7aBzVgPa1",
    "ntpID": "1310396",
    "formData": {
      "paRes": "Tti9mI28jvShfDTK_7hn6TAZmeO7xQEpoc8wwKIR7tWWlybyWDiYEYRKKw=="
    }
  }
  ```
  </TabItem>

  <TabItem value="curl" label="cURL Request">
  ```sh
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
      </Tabs>



---

# Sample Response

<Tabs groupId="response-type">
  
  <TabItem value="success" label="Success Response">

  ```json
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
  <TabItem value="error" label="Error Response">

  ```json
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


---

## Error Handling

- If the `paRes` validation fails, the bank may reject the transaction.
- Check the **error codes** in [Errors & Statuses](../start/Resources/error-codes.md) for troubleshooting.
- Ensure you correctly pass `authenticationToken`, `ntpID`, and `paRes` as expected.

---

## Next Steps

1. **Return to the Start**: [Start Payment Documentation](../start/quick-start) to understand the initial request.
2. **Handle Errors Properly**: Check [Errors & Statuses](../start/Resources/error-codes.md) for debugging failed transactions.
3. **Complete the Payment Flow**: Implement the `verify-auth` call correctly to ensure the transaction is finalized.

:::warning **Important:**
If you skip the `verify-auth` call, the payment remains incomplete, and funds will not be captured.
:::
