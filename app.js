import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import userRoutes from "./routes/userRoutes.js";
import swaggerSpec from "./swagger.js";

import swaggerUiAssetPath from "swagger-ui-dist";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

// Swagger JSON
app.get("/api-docs.json", (req, res) => {
  res.json(swaggerSpec);
});

// Swagger UI
app.use("/api-docs", express.static(swaggerUiAssetPath.getAbsoluteFSPath()));

app.get("/api-docs", (req, res) => {
  res.sendFile(path.join(swaggerUiAssetPath.getAbsoluteFSPath(), "index.html"));
});

app.get("/", (req, res) => {
  res.send("Express Routing Server is Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;