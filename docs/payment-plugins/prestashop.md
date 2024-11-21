---
sidebar_position: 3
title: Prestashop Plugin
---

# Prestashop Plugin

## Setting up

In order to set up the Netopia Prestashop plugin, you need to follow the 3 steps below:

#### Step 1 - Create a Point of Sale

Make sure you have already [created a Point of Sale](/docs/get-started/03-point-of-sale.md) specifically for Prestashop. Check out the Point of Sale signature and encryption keys, which are essential for the technical implementation.

#### Step 2 - Install and activate the Netopia Payments Prestashop plugin

Download the [Netopia Prestashop plugin](https://github.com/mobilpay/prestashop) from our Github repository and install it on your Prestashop e-commerce platform.

#### Step 3 - Configure the plugin and validate the technical implementation

Configure the plugin by setting the Point of Sale signature and the associated keys. Once the integration is complete, send an email to implementare@netopia.ro and request the final validation. Our technical support team will activate your Point of Sale, enabling you to start receiving payments.

---

## Detailed instructions

Let's detail these steps one by one:

### Step 1 - Create a Point of Sale

You need a Point of Sale before you can configure a payment gateway. If you don't have one yet, please first follow the [Points of Sale instructions](/docs/get-started/03-point-of-sale.md) and return here once you have a validated Point of Sale.

### Step 2 - Install and activate the Netopia Payments Prestashop plugin

Go to the [Netopia Github - Prestashop module](https://github.com/mobilpay/prestashop) and download the module by clicking on the green "Code" button in the top right and then on the "Download ZIP" button

![Step two](../../static/img/prestashop/prestashop-plugin-1.png)

Unzip the downloaded file and then navigate to the folder named as the latest Prestashop version. You have to compress the "mobilpay_cc" folder inside it into a .zip file

![Step three](../../static/img/prestashop/prestashop-plugin-2.png)

In the left menu of your Prestashop dashboard, go to Modules -> Module Manager and upload the mobilpay_cc.zip that you created in the previous step

![Step four](../../static/img/prestashop/prestashop-plugin-3.png)

### Step 3 - Configure the plugin and validate the technical implementation

After the module is installed, you will get a "Modules installed!" popup with a "Configure" button. Click on the button to configure the module.

![Step five](../../static/img/prestashop/prestashop-plugin-4.png)

Alternatively, if you wish to access the module configuration at any time, you can do so by navigating to Modules -> Module Manager from the left menu, selecting the Category "Payments" and then clicking on the "Configure" button from the Mobilpay - credit card module.

![Step five](../../static/img/prestashop/prestashop-plugin-6.png)

In the module configuration, you need to provide your Account Signature and public and private key files.

![Step six](../../static/img/prestashop/prestashop-plugin-5.png)

The Account Signature and the public and private key files can be found in the merchant account (https://admin.netopia-payments.com) → Points of Sale → Options (the icon with 3 dots) → Technical Settings.

![Step seven](../../static/img/prestashop/prestashop-plugin-7.png)

**The last step is to send an email to implementare@netopia.ro and request the final validation. Our technical support team will activate your Point of Sale, enabling you to start receiving payments.**

NETOPIA Payments development team tries to mantain the compatibility of the Prestashop module with the latest version of Prestashop. For modules compatible with previous versions of Prestashop, please use the previous branches from our Github repository.

Tested up to Prestashop 8.1.x