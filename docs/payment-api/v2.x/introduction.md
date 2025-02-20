---
id: introduction
title: Introduction
sidebar_position: 1
---

# NETOPIA Payments API

The **NETOPIA Payments** API provides a fast, secure way to process transactions in third-party applications.

:::tip
Once you have an **active account** and an **API KEY**, you’re ready to start using NETOPIA Payments APIs.
:::

## Why NETOPIA Payments API

- Fast and Secure
- Full support for 3-D Secure authentication
- Easy to integrate with any third-party application
- Stellar technical support

## Prerequisites

1. **NETOPIA Merchant Account**  
   If you don't have one, start by [creating it](https://netopia-payments.com/register/).

2. **Administration Platform**  
   - [Admin Platform](https://admin.netopia-payments.com/): configure account, track transactions, etc.
   - [Admin Sandbox](https://sandbox.netopia-payments.com/): test environment mirroring production features.

3. **API Key**  
In order to communicate with the payment API, you need a specific **API KEY**

   - Generate in your NETOPIA admin panel: **Profile -> Security**.  
   - Include it in the `Authorization` HTTP header (e.g., `Authorization: YOUR_API_KEY`).  
   - Keys can be created, regenerated, or removed at any time.  
   - Sandbox keys do not work in Live, and vice versa.

<img src="/img/api-key.png" alt="Example API Key" width="200" height="280" />
<img src="/img/generate-api-key.png" alt="Generate API Key" width="720" height="260" />
:::note
-   You shoyld always pass the API KEY in the **HTTP Headers** of your request 
-   You can regenerate/remove/add a new API Key at any time
:::

## Full API Documentation

For the complete NETOPIA Payments API documentation, visit our dedicated Stoplight page.

<a class="button button--primary button--lg" href="https://netopia-system.stoplight.io/docs/payments-api" target="_blank">View API Stoplight</a>