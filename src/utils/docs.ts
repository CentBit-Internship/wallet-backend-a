const swaggerDocumentation = {
  openapi: "3.0.0",
  info: {
    title: "Ussd App",
    version: "0.0.1",
    description:
      "This is a simple USSD-BASED service that allows a user to update his name via USSD.",
  },
  servers: [
    {
      url: "https://fathomless-atoll-54584.herokuapp.com",
      description: "deployed production api",
    },
    {
      url: "http://localhost:3000",
      description: "Local dev",
    },
  ],
  tags: [
    {
      name: "Ussd Based Service",
      description: "A simple USSD app.",
    },
  ],
  paths: {
    "/": {
      get: {
        tags: ["Ussd-check"],
        description: "Displays a text about the USSD-BASED service",
        responses: {
          200: {
            description: "OK",
            content: {
              "text/html": {
                schema: {
                  type: "string",
                  example:
                    "Build a simple USSD-BASED service that allows a user to update his name via USSD.",
                },
              },
            },
          },
        },
      },
    },
  },
};

export default swaggerDocumentation;
