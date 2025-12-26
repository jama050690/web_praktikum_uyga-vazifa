import { promises as fs } from "fs";
import express from "express";
import ejs from "ejs";

const app = express();

app.listen(3000, () => console.log("Server running on 3000"));
