---
sidebar_position: 1
---

# Introduction

The **Payments API**  was designed and implemented by NETOPIA Payments development team to be used in third party applications to cover the payment process.

## Why NETOPIA Payments API
-   Fast and Secure
-   Full support for 3DSecure authentication
-   Easy to integrate with any third party application 
-   Stellar support

## Prerequisites

You should have a merchant account with NETOPIA. If you dont yet have one, start by **[creating it](https://netopia-payments.com/register/)**.


### NETOPIA Payments administration platform
Login with your username/password to **[administration console](https://admin.netopia-payments.com/)**. From here you'll be able to configure your account, monitor incoming transactions, add users, etc.

NETOPIA gives you the possibility to test the payment process during or after the implemention of your application too by providing a sandbox environment which mirrors the features of production. It can be accessed directly from your production account or by logging in to **[sandbox](https://sandbox.netopia-payments.com)**.


### API KEY
In order to communicate with the payment API, you need a specific **API KEY**

From NETOPIA **[Payments admin](https://admin.netopia-payments.com/)** -> Profile -> Security, you can generate an **API KEY**

![Example API Key](/img/apiKey.jpg)

**Note:** 
-   You shoyld always pass the API KEY in the **HTTP Headers** of your request 
-   You can regenerate/remove/add a new API Key at any time

Once you have an **_ACTIVE ACCOUNT_** and an **_API KEY_**, you are almost ready to [start](start/start-strc.md) actual payments via **NETOPIA Payments' API**

## API Diagram
![Api diagram](/img/ApiDiagram.svg)

## Payments OpenAPI Specification
Following the link below you can find the **openapi 3.0 specification** to have bigger picture on NETOPIA Payments' API 

```
https://secure.sandbox.netopia-payments.com/spec
```

## API Reference
-   NETOPIA Payments API **Version 1** 
-   Release at **2021**
