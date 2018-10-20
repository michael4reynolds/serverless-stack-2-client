const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1035janyos2gc"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://12pu6r8zs9.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_W5eQcf3RH ",
    APP_CLIENT_ID: "6bt2nncbqnp9stpe4djbgucfvq",
    IDENTITY_POOL_ID: "us-east-1:7f3633fc-697b-4743-b4e2-3a5c828287af"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1r0a55heof78k"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ud1x19d9m1.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_UtGEmE3YM",
    APP_CLIENT_ID: "7k4k57iub48q00gbomri8u8h2",
    IDENTITY_POOL_ID: "us-east-1:bed0ed1e-ac44-4471-8097-2a9b2b6fea31"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
