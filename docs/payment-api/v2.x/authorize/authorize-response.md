---
id: authorize-response
title: Authorize Response
sidebar_position: 4
---

# Authorize Response

Once the **3DS** authentication is completed, the bank (ACS) redirects the user to your **`backUrl`** with:

- **`paRes`**: A token indicating the outcome of 3DS authentication.  

:::info At this point:
1. You have the initial **`authenticationToken`** (from the **Start** response).  
2. You have the new **`paRes`** (sent to `backUrl`).  
:::

## Final Step: Verify Auth

To complete the payment, call:
```html
POST /payment/card/verify-auth
```

### **Required Parameters:**
- **authenticationToken** (received in **Start** response)
- **ntpID** (NETOPIA transaction ID from **Start** response)
- **formData** (all data from `backUrl`, including `paRes`)

### **Why is this step mandatory?**  
Calling **Verify Auth** ensures NETOPIA completes the transaction using the 3DS result.  
:::warning **If you skip this step, the payment remains incomplete!** 
::: 

## Handling Different `paRes` Outcomes  

| **Scenario** | **paRes Indicator** | **What to Do** |
|-------------|--------------------|---------------|
| Authentication Successful | Valid `paRes` | Call `/payment/card/verify-auth` |
| Authentication Failed | `paRes` with error | Inform user & retry |
| User Canceled | `paRes` missing | Treat as **canceled** |

---

## **Handling `backUrl` Correctly**  

Your `backUrl` should be a **secure endpoint** that:  
- **Receives `paRes`** and extracts it.  
- **Handles errors gracefully**, such as authentication failures or user cancellations.  

:::info **Example:**  
If `paRes` contains an error, display a message to the user instead of proceeding with verification.  
:::

:::note 
If the bank denies the authentication, or the user cancels, `paRes` may indicate a failed status.  
Your `backUrl` **must handle** these cases to prevent incorrect processing.
:::

---

## **Next Steps in the Flow**
1. **[Return to Start](../start/quick-start)** → Understand the initial request flow.  
2. **[Check Error Codes](../start/Resources/error-codes.md)** → Interpret authentication failures.  
3. **[Implement `verify-auth`](../verify-auth/verify-payment)** → Finalize the payment with the 3DS authentication result.  