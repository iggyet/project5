import { resolve } from "path";
import db from "./models/index.mjs";

import initAvailableTablesController from "./controllers/availableTables.mjs";

export default function routes(app) {
  const AvailableTablesController = initAvailableTablesController(db);
  app.get("/availabletables", AvailableTablesController.index);

  // special JS page. Include the webpack index.html file
  app.get("/home", (request, response) => {
    response.sendFile(resolve("dist", "main.html"));
  });
}
