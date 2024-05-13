---
sidebar_position: 3
title: Sample Response
---
# Start response example

## Example of start payment response

### Success ex.

```
{
  "customerAction": {},
  "error": {
    "code": "00",
    "message": "Approved"
  },
  "payment": {
    "amount": 200,
    "currency": "RON",
    "data": {
      "AuthCode": "24od",
      "BIN": "990000",
      "ISSUER": "Netopia GB",
      "ISSUER_COUNTRY": "642",
      "RRN": "hYnY8zpdcNo-"
    },
    "ntpID": "1309088",
    "status": 3,
    "token": "MjMyMjqqdx3XTbYC78OoidTk6DTtEvHcrqcz91Pr4PQqXf/u33xoDkdgIlkq226avk1ik8fvLElkbLopnvNbIs8+Ve6L"
  }
}
```
or for **3DS Card**
```
{
  "customerAction": {
    "authenticationToken": "iNPqJWDRoRXsd77StNELrvBiGr_ihsLdvikrsTiYqprMh9ViBO-lq_i38YsmxT-JTZPqf04uS4dBhCAQjNSxcAyZcVAcGhCH3r7knN-KePOzno16psy5O_OvzfRlbuvkrBtrpjcXyzcTi--M6uM-X1C7aBzVgPa1",
    "formData": {
      "backUrl": "http://yourdomain.com/example/backUrl.php",
      "paReq": "AT5ewtLVDsEgB5lcRjeEoSMF6RZ4A3sPWhsU3IiSy8X0XdrQ49D7b-oUMYnwslzZ436FCQv6aB4m7Sn1QNqYzZU="
    },
    "type": "Authentication3D",
    "url": "https://secure.sandbox.netopia-payments.com/sandbox/authorize"
  },
  "error": {
    "code": "100",
    "message": "Approved"
  },
  "payment": {
    "amount": 200,
    "currency": "RON",
    "ntpID": "1310396",
    "status": 15
  }
}
```
### Error ex.
```
{
  "customerAction": {},
  "error": {
    "code": "56",
    "message": "Order closed"
  },
  "payment": {
    "amount": 200,
    "currency": "RON",
    "ntpID": "1309088",
    "status": 5
  }
}
```
