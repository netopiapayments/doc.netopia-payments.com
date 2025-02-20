---
id: quick-start
title: Quick Start
sidebar_position: 2
---

# Quick Start

Below is a minimal flow for processing a **card payment** using NETOPIA’s API:

1. **[Start Payment](./start-payment)**  
  Send a `POST` request to `/payment/card/start` with transaction data.

2. **Check if 3-D Secure is needed**  
   - If response has `error.code = 100` & `payment.status = 15`, it indicates 3-D Secure flow is required.  
   - Redirect user for 3DS, then finalize with `/payment/card/verify-auth`.

3. **Wait for callback** (via `notifyUrl`)  
   - After finalizing the payment, NETOPIA will send a POST callback.

4. **(Optional) Further operations**  
   - Use `/operation/status`, or other operation endpoints to query or alter the payment (void, credit, etc.).

Continue reading for more details on each endpoint and advanced flows.