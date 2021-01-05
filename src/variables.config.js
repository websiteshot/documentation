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
};
