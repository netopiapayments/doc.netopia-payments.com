---
sidebar_position: 3
title: Sample Request
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authorize request example  

## Sample code
:::tip authorize
<Tabs groupId="operating-systems">
  <TabItem value="html" label="HTML Request">

```html
<html>
    <head>
        <title>NETOPIA Payments DEMO</title>
    </head>
    <body>
        <form method="POST" action="https://secure.sandbox.netopia-payments.com/sandbox/authorize">
            <input type="hidden" name="paReq" value="rcrO9tXAiBpwv-ZE4JQ4yeI-tbf6aJ0ZsCV-cEa9pvHEtfg-IVEm9YrypUW_--AcWWwLQB9pyI="/>
            <input type="hidden" name="backUrl" value="http://yourdomain.com/example/backUrl.php"/>
            <input type="submit" value="Submit">
        </form>
    </body>
</html>
```
  </TabItem>
  <TabItem value="curl" label="Curl Request">

```shell
curl --location --request POST 'https://secure.sandbox.netopia-payments.com/sandbox/authorize' \
--form 'paReq="rcrO9tXAiBpwv-ZE4JQ4yeI-tbf6aJ0ZsCV-cEa9pvHEtfg-IVEm9YrypUW_--AcWWwLQB9pyI="' \
--form 'backUrl="http://yourdomain.com/example/backUrl.php"'
```

  </TabItem>
  <TabItem value="php" label="Php Request">

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
  CURLOPT_POSTFIELDS => array('paReq' => 'rcrO9tXAiBpwv-ZE4JQ4yeI-tbf6aJ0ZsCV-cEa9pvHEtfg-IVEm9YrypUW_--AcWWwLQB9pyI=','backUrl' => 'http://yourdomain.com/example/backUrl.php'),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```
  </TabItem>
</Tabs>
:::