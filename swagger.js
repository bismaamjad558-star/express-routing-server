import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express Routing Server API",
      version: "1.0.0",
      description: "Week 4 Internship Project API Documentation",
    },
    servers: [
      {
        url: "https://express-routing-server.vercel.app",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;