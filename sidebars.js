// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'get-started/index',
      },
      items: [
        'get-started/signup',
        'get-started/kyc',
        'get-started/point-of-sale',
        'get-started/technical-implementation',
      ],
    },
    {
      type: 'category',
      label: 'Payment API',
      link: {
        type: 'doc',
        id: 'payment-api/index',
      },
      items: [
        {
          type: 'category',
          label: 'Version 2.x',
          link: {
            type: 'doc',
            id: 'payment-api/v2.x/intro',
          },
          items: [
            {      
              type: 'category',
              label: 'Card Start',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'payment-api/v2.x/start',
                },
              ],
            },
            {      
              type: 'category',
              label: 'Authorize',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'payment-api/v2.x/authorize',
                },
              ],
            },
            {      
              type: 'category',
              label: 'Verify Auth',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'payment-api/v2.x/verify-auth',
                },
              ],
            },
          ],
        },
        'payment-api/v1.x',
      ],
    },
    {
      type: 'category',
      label: 'Payment Plugins',
      items: [
        {
          type: 'autogenerated',
          dirName: 'payment-plugins',
        },
      ],
    },
    {
      type: 'category',
      label: 'Payment SDKs',
      items: [
        {
          type: 'autogenerated',
          dirName: 'payment-sdks',
        },
      ],
    },
    {
      type: 'category',
      label: 'Web2SMS',
      items: [
        {
          type: 'autogenerated',
          dirName: 'web2sms',
        },
      ],
    },
  ],
};

export default sidebars;
