---
id: errors-statuses
title: Errors & Statuses
sidebar_position: 3
---

# Errors & Statuses

## Common Error Codes

| Code | Meaning                                          |
|------|--------------------------------------------------|
| 0    | Card without 3DS                                 |
| 19   | Expired Card                                     |
| 20   | Insufficient funds                               |
| 21   | CVV error                                        |
| 22   | CVV error                                        |
| 34   | Transaction not allowed for this card            |
| 56   | Order closed (duplicate or already completed)    |
| 99   | Another order with a different amount            |
| 100  | Requires 3-D Secure (or missing/invalid params)  |

> Additional codes may appear depending on the specific scenario.

## Payment Status Codes

| Status | Meaning                            |
|--------|------------------------------------|
| 3      | Paid                               |
| 5      | Confirmed                          |
| 12     | Invalid account                    |
| 15     | 3-D Secure authentication required |