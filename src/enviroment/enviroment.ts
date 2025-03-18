export const awsConfig = {
    Auth: {
      Cognito: {
        userPoolId: 'us-east-2_dFo6D5L5J',
        userPoolWebClientId: '15n6ondbdkq326ua51h2bqgu7u',
        identityPoolId: 'us-east-2:d3e7e0d0-d4e6-4d5f-a7f7-c4c5b5a5d6d7',
        loginWith: {
          email: true,
        },
        signUpVerificationMethod: "code",
        userAttributes: {
          email: {
            required: true,
          },
        },
        allowGuestAcces: true,
        passwordFormat: {
          minLength: 8,
          requireLowercase: true,
          requireUppercase: true,
          requireNumbers: true,
          requireSpecialCharacters: true,
        },
      },
    }
};

export const environment = {
  production: false,
  USER_POOL_ID: 'us-east-2_dFo6D5L5J',
  CLIENT_ID:'15n6ondbdkq326ua51h2bqgu7u',
  IDENTITY_POOL_ID: 'us-east-2:d3e7e0d0-d4e6-4d5f-a7f7-c4c5b5a5d6d7',
}


