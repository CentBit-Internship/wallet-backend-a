const getUssdRequest = {
  tags: ["Ussd-check"],
  description: "Displays a text about the USSD-BASED service",
  responses: {
    200: {
      description: "OK",
      content: {
        "text/plain": {
          schema: {
            type: "string",
            example:
              "Build a simple USSD-BASED service that allows a user to update his name via USSD.",
          },
        },
      },
    },
  },
};

const postUssdRequest = {
  tags: ["Ussd-post"],
  description: "Makes a Ussd service call.",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            serviceCode: {
              type: "string",
              description: "Ussd service code.",
              example: "*384*54616#",
            },
            sessionId: {
              type: "string",
              description: "Ussd Session Id",
              example: "ATUid_b1188fcb366d1b6b637da4d4cc71054b",
            },
            phoneNumber: {
              type: "string",
              description: "User's phone number",
              example: "+2348151615265",
            },
            text: {
              type: "string",
              description: "User's input",
              example: "",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "Ok",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: `CON What do you want to check
      1. My Account
      2. My Phone Number`,
          },
        },
      },
    },
  },
};

const ussdRouteDocs = {
  "/": {
    get: getUssdRequest,
    post: postUssdRequest
  },
};


export default ussdRouteDocs;