import express from "express";
import talabalarRoutes from "./routes/talabalar.routes.js";

const server = express();

server.use(express.json());

// ROUTES
server.use("/api/talabalar", talabalarRoutes);

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
