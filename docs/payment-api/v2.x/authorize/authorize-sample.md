---
id: authorize-sample
title: Sample Request
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authorize Request Example

Below are typical examples for sending `paReq` and `backUrl` to the **sandbox** environment. In production, you use the **customerAction.url** provided by the **Start** response.

## Sample Code

:::tip 3DS Authorization
<Tabs groupId="operating-systems">
  <TabItem value="html" label="HTML Request">

```html
<html>
  <head>
    <title>NETOPIA Payments DEMO</title>
  </head>
  <body>
    <form method="POST" action="https://secure.sandbox.netopia-payments.com/sandbox/authorize">
      <input type="hidden" name="paReq" value="rcrO9tXAiBpwv-ZE4JQ4yeI-tbf6aJ0ZsCV-cEa9p..." />
      <input type="hidden" name="backUrl" value="https://yourdomain.com/example/backUrl.php" />
      <input type="submit" value="Authorize with 3DS" />
    </form>
  </body>
</html>
```

  </TabItem>
  <TabItem value="curl" label="cURL Request">

```shell
curl --location --request POST 'https://secure.sandbox.netopia-payments.com/sandbox/authorize' \
--form 'paReq="rcrO9tXAiBpwv-ZE4JQ4yeI..."' \
--form 'backUrl="https://yourdomain.com/example/backUrl.php"'
```

  </TabItem>
  <TabItem value="php" label="PHP Request">

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://secure.sandbox.netopia-payments.com/sandbox/authorize',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => array(
    'paReq' => 'rcrO9tXAiBpwv-ZE4JQ4yeI...',
    'backUrl' => 'https://yourdomain.com/example/backUrl.php'
  ),
));

$response = curl_exec($curl);
curl_close($curl);

echo $response;
```

  </TabItem>
</Tabs>
:::

:::note
**Tip**: The exact `paReq` value and `customerAction.url` are always returned by the **Start** endpoint for each transaction. Make sure to use the correct ones in your flow.
:::