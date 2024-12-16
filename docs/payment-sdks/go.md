---
sidebar_position: 3
title: Go SDK
---

## Overview

The NETOPIA Payments Go SDK provides seamless integration with the Netopia Payments API v2. It allows developers to handle payments, IPN verification, and status retrieval efficiently within their Go applications.

Github Repository: https://github.com/netopiapayments/go-sdk

### Dependencies

- https://github.com/golang-jwt/jwt (latest version: v5)

### Features

- Start a payment with customer details, products, and billing/shipping data.

- Retrieve the status of an order.

- Verify 3D Secure authentications.

- Validate IPNs (Instant Payment Notifications) for order updates.

- Compatible with both Sandbox and Live environments.

## Installation

### Install the SDK

To install the SDK, use ``go get`` to include it in your project:

```
go get github.com/netopiapayments/go-sdk
```

### Initialization

```go
import "github.com/netopiapayments/go-sdk"

cfg := netopia.Config {
	PosSignature: "XXXX-XXXX-XXXX-XXXX",
	ApiKey: "your-api-key",
	IsLive: false, // True = production | False = sandbox
	NotifyURL: "https://yourdomain.com/ipn",
	RedirectURL: "https://yourdomain.com/redirect",
	PublicKey: []byte("-----PUBLIC KEY-----"),
	ActiveKey: "your-active-key",
	PosSignatureSet: []string{"XXXX-XXXX-XXXX-XXXX"},
	HashMethod: "sha512", // Default hash method
}

client, err := netopia.NewPaymentClient(cfg)

if  err != nil {
	panic(err)
}
```

### Configuration

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| **PosSignature** | string | Yes | POS Signature for your NETOPIA account |
| **ApiKey** | string | Yes | API key generated in NETOPIA's admin panel |
| **IsLive** | bool | No | Whether to use the live environment (true) or sandbox (false) |
| **NotifyURL** | string | Yes | The URL where IPNs (order updates) will be sent |
| **RedirectURL** | string | Yes | The URL to redirect the customer after payment |
| **PublicKey** | []byte | Yes | RSA public key provided by NETOPIA for signature verification |
| **ActiveKey** | string | Yes | Active key for your merchant account |
| **PosSignatureSet**| []string| Yes | List of allowed POS Signatures |
| **HashMethod** | string | No | Hash method for IPN validation (default: sha512) |

## API Reference

### StartPayment

Initiates a payment transaction.

```go

startReq := &requests.StartPaymentRequest{
		Config: &requests.ConfigData{
		NotifyURL: cfg.NotifyURL,
		RedirectURL: cfg.RedirectURL,
		Language: "ro", // ro is the default language if not provided
	},
	Payment: &requests.PaymentData{
		Options: requests.PaymentOptions{
			Installments: 1,
			Bonus: 0,
		},
		Instrument: requests.PaymentInstrument{
			Type: "card",
			Account: "9900009184214768",
			ExpMonth: 11,
			ExpYear: 2025,
			SecretCode: "111",
		},
	},
	Order: &requests.OrderData{
		OrderID: "R973i8Stza46n0me152oidgnr_492",
		Amount: 0,
		Currency: "RON",
		Description: "Sample order",
		Billing: requests.BillingShipping{
			Email: "client@example.com",
			Phone: "123456789",
			FirstName: "John",
			LastName: "Doe",
			City: "Bucharest",
			Country: 642,
		},
	Products: []requests.Product{
			{Name: "T-shirt Alfa", Code: "D276C05398EO14", Price: 17, Vat: 19},
		},
	},
}

startResp, err := client.StartPayment(startReq)

if  err != nil {
	fmt.Println("Error:", err)
	return
}

// Get the response from the API
fmt.Printf("Start payment response: %+v", startResp)
```

### GetStatus

Retrieves the status of an order.

```go

statusResp, err := client.GetStatus("ntpID-123456", "orderID-12345")

if  err != nil {	
	fmt.Println("Error:", err)
	return
}

fmt.Printf("Order status: %+v", statusResp)
```

### VerifyAuth

Handles 3D Secure verification for transactions.

```go

verifyResp, err := client.VerifyAuth("authToken123", "ntpID-123456", "paResData")

if  err != nil {
	fmt.Println("Error:", err)
	return
}

fmt.Printf("VerifyAuth response: %+v", verifyResp)
```

### IPN Verification

Validates the authenticity and integrity of IPNs (Instant Payment Notifications).

```go

func  ipnHandler(w  http.ResponseWriter, r *http.Request) {
	result, err := client.VerifyIPN(r)
	if  err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Printf("IPN Verification Result: %+v", result)
	w.WriteHeader(http.StatusOK)
}

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

```go

if  err != nil {
	switch  err {
		case  netopia.ErrMissingAPIKey:
			fmt.Println("API Key is missing!")
		default:
			fmt.Println("An error occurred:", err)
	}
}

```

The SDK provides structured error handling with pre-defined error variables. Some common errors include:

| Error Name | Description |
| :--- | :--- |
| ErrMissingAPIKey | API Key is not provided. |
| ErrInvalidPublicKey | The provided public key is invalid. |
| ErrInvalidIssuer | JWT token issuer (iss) is not "NETOPIA Payments". |
| ErrPayloadHashMismatch | Hash of the payload does not match sub in the JWT.|
| ErrInvalidToken | The JWT token is invalid. |