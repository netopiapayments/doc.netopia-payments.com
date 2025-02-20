---
id: authorize-query
title: Query Parameters
sidebar_position: 2
---

# Query Parameters

When sending **Authorize** data to the 3DS authentication URL (the bank’s ACS), you must include the following required parameters.

## What is 3D Secure?
3D Secure (3DS) is a security protocol used to authenticate online card transactions, reducing fraud risk. When a payment requires 3D Secure verification, the user is redirected to their bank's **Access Control Server (ACS)** to complete an authentication step, typically via a password, OTP, or biometric verification.

Once the authentication is complete, the ACS sends the user back to your system with the authentication result.

## Required Parameters

### Payment Authentication Request
`paReq`
- A unique encoded string generated in the **Start** response.
- Found in `customerAction.formData.paReq`.
- This value must be sent to the bank’s ACS URL in a **POST request**.
  
**Example:**
```json
{
    "customerAction": {
        "type": "“Authentication3D”",
        "“url”": "“https://acs.bank.com/auth”",
        "“authenticationToken”": "“xyz123”",
        "“formData”": {
            "“paReq”": "“rcrO9tXAiBpwv-ZE4JQ4y…”"
        }
    }      
}
```

### Return URL
`backUrl`

- A **public** URL in your system where the user is redirected after authentication.
- This URL will receive the **`paRes`** parameter, containing the authentication result.
- You must validate this response and complete the transaction flow.

**Important Notes:**
- If the authentication fails, the ACS might still redirect the user to `backUrl` with an error message.
- Always handle possible failures and unexpected redirects gracefully.

---

## Example Response Scenarios

| Scenario                         | `paRes` Content | Action to Take |
|----------------------------------|----------------|---------------|
| Successful authentication | Valid token    | Proceed with payment authorization |
| Failed authentication       | Error message  | Show error to user, allow retry |
| Timeout / User cancel       | Empty response | Redirect user to retry or alternative payment |

---

### Next Steps
After receiving the `paRes` response at `backUrl`, you must call the `verify-auth` endpoint to confirm authentication status and proceed with payment finalization.