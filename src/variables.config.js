export const variables = {
  bucket: "https://websiteshot-docs.s3.eu-central-1.amazonaws.com",
};

export const image = {
  app: {
    apikeys: {
      src: `${variables.bucket}/app-apikeys.png`,
      alt: `API Keys`,
    },
    create: {
      src: `${variables.bucket}/app-create.png`,
      alt: `Create Screenshot Job`,
    },
    dashboard: {
      src: `${variables.bucket}/app-dashboard.png`,
      alt: `Dashboard`,
    },
    login: {
      src: `${variables.bucket}/app-login.png`,
      alt: `Login`,
    },
    members: {
      src: `${variables.bucket}/app-members.png`,
      alt: `Members`,
    },
    usage: {
      src: `${variables.bucket}/app-usage.png`,
      alt: `Usage`,
    },
  },
  github: {
    action: {
      src: `${variables.bucket}/github-github-action.png`,
      alt: `GitHub Action`,
    },
    actionmarketplace: {
      src: `${variables.bucket}/github-github-action-marketplace.png`,
      alt: `GitHub Action Marketplace`,
    },
    nodejs: {
      src: `${variables.bucket}/github-nodejs-client.png`,
      alt: `NodeJS Client`,
    },
    screenshotautomation: {
      src: `${variables.bucket}/github-screenshot-automation.png`,
      alt: `Screenshot Automation`,
    },
    simplescript: {
      src: `${variables.bucket}/github-simple-script.png`,
      alt: `Simple Script`,
    },
  },
  example: {
    natural: {
      src: `${variables.bucket}/example-natural.png`,
      alt: `Example Natural`,
    },
    shadow: {
      src: `${variables.bucket}/example-shadow.png`,
      alt: `Example Shadow`,
    },
    stylemacosdark: {
      src: `${variables.bucket}/example-macos-simple-dark.png`,
      alt: `Example Style MacOS Simple Dark`,
    },
    combined: {
      src: `${variables.bucket}/example-combined.png`,
      alt: `Example Combined`,
    },
    resize: {
      src: `${variables.bucket}/example-resize.png`,
      alt: `Example Resize`,
    },
    blur: {
      src: `${variables.bucket}/example-blur.png`,
      alt: `Example Blur`,
    },
    areaupperhalf: {
      src: `${variables.bucket}/example-upperhalf.png`,
      alt: `Example Area Upper Half`,
    },
  },
  socialshare: {
    template1: {
      src: `${variables.bucket}/examples-social-share-template-1.png`,
      alt: `Example Social Share Template 1`,
    },
    template2: {
      src: `${variables.bucket}/examples-social-share-template-2.png`,
      alt: `Example Social Share Template 2`,
    },
    template3: {
      src: `${variables.bucket}/examples-social-share-template-3.png`,
      alt: `Example Social Share Template 3`,
    },
  },
};
