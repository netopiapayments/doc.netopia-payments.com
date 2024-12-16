---
sidebar_position: 4
title: Python SDK
---

## Overview

The NETOPIA Payments Python SDK provides seamless integration with the Netopia Payments API v2. It allows developers to handle payments, IPN verification, and status retrieval efficiently within their Go applications.

Github Repository: https://github.com/netopiapayments/python-sdk

### Dependencies

- https://github.com/jpadilla/pyjwt
- https://github.com/psf/requests

### Features

- Start a payment with customer details, products, and billing/shipping data.

- Retrieve the status of an order.

- Verify 3D Secure authentications.

- Validate IPNs (Instant Payment Notifications) for order updates.

- Compatible with both Sandbox and Live environments.

## Installation

### Install the SDK

You can install the SDK from PyPI Test or PyPI, or by cloning this repository.:

Install the SDK from the PyPI Test repository (unstable, only for test purpose):

```
pip install -i https://test.pypi.org/simple/ netopia-sdk
```

Install the SDK from the PyPI repository (recommended):
```
pip install netopia-sdk
```

Alternatively, clone this repository and install the dependencies:

```
git clone https://github.com/netopiapayments/python-sdk
pip install -r requirements.txt
```

You can also add the SDK to your project by copying the netopia_sdk folder to your project directory.

### Initialization

```go
from netopia_sdk.config import Config
from netopia_sdk.client import PaymentClient
from netopia_sdk.payment import PaymentService

config = Config(
    api_key="your-api-key",
    pos_signature="your-pos-signature",
    is_live=False,  # True = production, False = sandbox
    notify_url="https://yourdomain.com/ipn",
    redirect_url="https://yourdomain.com/redirect",
    public_key_str="-----BEGIN PUBLIC KEY-----....-----END PUBLIC KEY-----",
    pos_signature_set=["your-pos-signature"],
)

client = PaymentClient(config)
payment_service = PaymentService(client)
```

### Configuration

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| **api_key** | string | Yes | API key generated in NETOPIA's admin panel |
| **pos_signature** | string | Yes | POS Signature for your NETOPIA account |
| **is_live** | bool | No | Whether to use the live environment (true) or sandbox (false) |
| **notify_url** | string | Yes | The URL where IPNs (order updates) will be sent |
| **redirect_url** | string | Yes | The URL to redirect the customer after payment |
| **public_key_str** | string | Yes | RSA public key provided by NETOPIA for signature verification |
| **pos_signature_set** | list | Yes | List of allowed POS Signatures |

## API Reference

### StartPayment

Initiates a payment transaction.

```python
from netopia_sdk.requests.models import (
    StartPaymentRequest, ConfigData, PaymentData, PaymentOptions, Instrument,
    OrderData, BillingData, ProductsData,
)

start_payment_request = StartPaymentRequest(
    config=ConfigData(
        emailTemplate="default",
        emailSubject="Order Confirmation",
        cancelUrl="https://yourdomain.com/cancel",
        notifyUrl=config.notify_url,
        redirectUrl=config.redirect_url,
        language="ro",
    ),
    payment=PaymentData(
        options=PaymentOptions(installments=1, bonus=0),
        instrument=Instrument(
            type="card",
            account="4111111111111111",
            expMonth=12,
            expYear=2025,
            secretCode="123",
        ),
    ),
    order=OrderData(
        orderID="R12345",
        amount=100.0,
        currency="RON",
        description="Test Order",
        billing=BillingData(
            email="customer@example.com",
            phone="1234567890",
            firstName="John",
            lastName="Doe",
            city="Bucharest",
            country=642,
        ),
        products=[
            ProductsData(name="Product1", code="P001", category="Category1", price=100.0, vat=0),
        ],
    ),
)

response = payment_service.start_payment(start_payment_request)
print("Start Payment Response:", response)
```

### GetStatus

Retrieves the status of an order.

```python
response = payment_service.get_status(ntpID="ntpID-123456", orderID="orderID-12345")
print("Order Status Response:", response)
```

### VerifyAuth

Handles 3D Secure verification for transactions.

```python
response = payment_service.verify_auth(
    authenticationToken="authToken123",
    ntpID="ntpID-123456",
    formData={"paRes": "paResData"},
)
print("VerifyAuth Response:", response)
```

### IPN Verification

Validates the authenticity and integrity of IPNs (Instant Payment Notifications).

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/ipn", methods=["POST"])
def ipn_handler():
    try:
        result = payment_service.verify_ipn(request.data)
        return jsonify({"message": "IPN verified", "data": result}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400
```

## Sample App

You can check out our Go Sample App which contains the backend and Postman Collections by going to its [Github repository here](https://github.com/netopiapayments/sample-app-go).

## Running tests

To ensure the SDK functions as expected, comprehensive unit tests are provided. You can run unit tests suit using the following command:

```shell
cd go-sdk
go test -v ./tests
```

## Error handling

Handling errors:

```python
try:
    response = payment_service.get_status(ntpID="ntpID-123456", orderID="orderID-12345")
except MissingAPIKeyError:
    print("API Key is missing!")
except Exception as e:
    print("An error occurred:", str(e))
```

The SDK provides structured error handling with pre-defined error variables. Some common errors include:

| Error Name | Description |
| :--- | :--- |
| MissingAPIKeyError | API Key is not provided. |
| InvalidPublicKeyError | The provided public key is invalid. |
| InvalidIssuerError | JWT token issuer (iss) is not "NETOPIA Payments". |
| PayloadHashMismatchError | Hash of the payload does not match sub in the JWT.|
| InvalidTokenError | The JWT token is invalid. |