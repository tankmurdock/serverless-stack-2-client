const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1rivq1w0tc14i"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://hubtnzyq1m.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_v3sllzvuc",
    APP_CLIENT_ID: "430iv6s3nhskhrcsmc2jmsrobr",
    IDENTITY_POOL_ID: "us-east-1:4c5b2c35-52d0-47cb-819e-30b4908599ca"
  },
    STRIPE_KEY: "pk_test_6zdeS5OlhPLvUSY5oE4PL4V5",
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-9m623xy5t143"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://prd2jamype.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_uGwqARqk3",
    APP_CLIENT_ID: "586qinb84rb1hkqn9jsd08fjr8",
    IDENTITY_POOL_ID: "us-east-1:a9b628c1-688e-4070-b6eb-cfc8bd6b978e"
  },
  STRIPE_KEY: "pk_test_6zdeS5OlhPLvUSY5oE4PL4V5",
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