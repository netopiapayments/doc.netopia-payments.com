---
sidebar_position: 3
title: Sample Request
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Verify-auth request example  

## Sample code
:::tip verify-auth
<Tabs groupId="operating-systems">
  <TabItem value="json" label="Json structure">

```
{
  "authenticationToken": "ihsLdvikrsTiYqprMh9ViBO_iNPqJWDRoRXsd77StNELrvBiGr-JTZPqf04uS4dBhCAQjNSxcAyZcVAcGhCH3r7knNlq_i38YsmxT-KePOzno16psy5O_OvzfRlbuvkrBtrpjcXyzcTi--M6uM-X1C7aBzVgPa1",
  "ntpID": "1310396",
  "formData": {
    "paRes": "Tti9mI28jvShfDTK_7hn6TAZmeO7xQEpoc8wwKIR7tWWlybyWDiYEYRKKw=="
  }
}
```
  </TabItem>
  <TabItem value="curl" label="Curl Request">

```shell
curl --location --request POST 'https://secure.sandbox.netopia-payments.com/payment/card/verify-auth' \
--header 'Authorization: YourApiKeyFromNETOPIA-PaymentsAdminPANEL--YourUNICHETOKEN' \
--data-raw '{
  "authenticationToken": "ihsLdvikrsTiYqprMh9ViBO_iNPqJWDRoRXsd77StNELrvBiGr-JTZPqf04uS4dBhCAQjNSxcAyZcVAcGhCH3r7knNlq_i38YsmxT-KePOzno16psy5O_OvzfRlbuvkrBtrpjcXyzcTi--M6uM-X1C7aBzVgPa1",
  "ntpID": "1310396",
  "formData": {
    "paRes": "Tti9mI28jvShfDTK_7hn6TAZmeO7xQEpoc8wwKIR7tWWlybyWDiYEYRKKw=="
  }
}'
```

  </TabItem>
  <TabItem value="php" label="Php Request">

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://secure.sandbox.netopia-payments.com/payment/card/verify-auth',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "authenticationToken": "ihsLdvikrsTiYqprMh9ViBO_iNPqJWDRoRXsd77StNELrvBiGr-JTZPqf04uS4dBhCAQjNSxcAyZcVAcGhCH3r7knNlq_i38YsmxT-KePOzno16psy5O_OvzfRlbuvkrBtrpjcXyzcTi--M6uM-X1C7aBzVgPa1",
  "ntpID": "1310396",
  "formData": {
    "paRes": "Tti9mI28jvShfDTK_7hn6TAZmeO7xQEpoc8wwKIR7tWWlybyWDiYEYRKKw=="
  }
}',
  CURLOPT_HTTPHEADER => array(
    'Authorization: YourApiKeyFromNETOPIA-PaymentsAdminPANEL--YourUNICHETOKEN'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```
  </TabItem>
</Tabs>
:::