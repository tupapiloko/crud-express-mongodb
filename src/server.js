import express from "express";
import { create } from "express-handlebars";
import morgan from "morgan";
import path from 'path';

import indexRoutes from "./routes/index.routes";

const app = express();

app.use(morgan("dev"));

app.set('port', 3000);

// Handlebars
app.set('views', path.join(__dirname, 'views'))
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);

app.set('view engine', '.hbs')

// Routes
app.use(indexRoutes)

export default app;
