---
sidebar_position: 4
title: Sample Response
draft: true
---

# Verify-auth response example

### Success ex.
```
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
### Error ex.
```
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

Please, check **[Errors & Statuses](../start/start-Error)** for get more information about **error** codes & **status** codes