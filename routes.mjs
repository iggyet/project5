import { resolve } from "path";
import db from "./models/index.mjs";

import initAvailableTablesController from "./controllers/availableTables.mjs";
import initStaffsController from "./controllers/staffs.mjs";
import initOneToTwoPaxWaitingListsController from "./controllers/oneToTwoPaxWaitingLists.mjs";
import initThreeToFourPaxWaitingListsController from "./controllers/threeToFourPaxWaitingLists.mjs";
import initMoreThanFourPaxWaitingListsController from "./controllers/moreThanFourPaxWaitingLists.mjs";

export default function routes(app) {
  const AvailableTablesController = initAvailableTablesController(db);
  const StaffsController = initStaffsController(db);
  const OneToTwoPaxWaitingListsController =
    initOneToTwoPaxWaitingListsController(db);
  const ThreeToFourPaxWaitingListsController =
    initThreeToFourPaxWaitingListsController(db);
  const MoreThanFourPaxWaitingListsController =
    initMoreThanFourPaxWaitingListsController(db);

  app.get("/availabletables", AvailableTablesController.index);
  app.post("/updateOccupied", AvailableTablesController.updateOccupied);
  app.post("/updateAvailable", AvailableTablesController.updateAvailable);
  app.post("/staffsLogin", StaffsController.login);
  app.get("/getOneTwoLists", OneToTwoPaxWaitingListsController.oneTwoIndex);
  app.get(
    "/getThreeFourLists",
    ThreeToFourPaxWaitingListsController.threeFourIndex
  );
  app.get(
    "/getFourPlusLists",
    MoreThanFourPaxWaitingListsController.fourPlusIndex
  );

  // special JS page. Include the webpack index.html file
  app.get("/home", (request, response) => {
    response.sendFile(resolve("dist", "main.html"));
  });
}
