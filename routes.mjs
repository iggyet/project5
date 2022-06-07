import { resolve } from "path";
import db from "./models/index.mjs";

import initAvailableTablesController from "./controllers/availableTables.mjs";
import initStaffsController from "./controllers/staffs.mjs";
import initOneToTwoPaxWaitingListsController from "./controllers/oneToTwoPaxWaitingLists.mjs";
import initThreeToFourPaxWaitingListsController from "./controllers/threeToFourPaxWaitingLists.mjs";
import initMoreThanFourPaxWaitingListsController from "./controllers/moreThanFourPaxWaitingLists.mjs";
import threeToFourPaxWaitingListModel from "./models/threeToFourPaxWaitingList.mjs";

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
  app.get("/availableTwoTables", AvailableTablesController.twoIndex);
  app.get("/availableFourTables", AvailableTablesController.fourIndex);
  app.post("/updateOccupied", AvailableTablesController.updateOccupied);
  app.post("/updateAvailable", AvailableTablesController.updateAvailable);
  app.post("/staffsLogin", StaffsController.login);
  app.get("/getOneTwoLists", OneToTwoPaxWaitingListsController.oneTwoIndex);
  app.get(
    "/getOneTwoStaffLists",
    OneToTwoPaxWaitingListsController.oneTwoStaffIndex
  );
  app.get(
    "/getThreeFourLists",
    ThreeToFourPaxWaitingListsController.threeFourIndex
  );
  app.get(
    "/getThreeFourStaffLists",
    ThreeToFourPaxWaitingListsController.threeFourStaffIndex
  );
  app.get(
    "/getFourPlusLists",
    MoreThanFourPaxWaitingListsController.fourPlusIndex
  );
  app.get(
    "/getFourPlusStaffLists",
    MoreThanFourPaxWaitingListsController.fourPlusStaffIndex
  );
  app.post("/oneTwoCreateQueue", OneToTwoPaxWaitingListsController.createQueue);
  app.post(
    "/threeFourCreateQueue",
    ThreeToFourPaxWaitingListsController.createQueue
  );
  app.post(
    "/fourPlusCreateQueue",
    MoreThanFourPaxWaitingListsController.createQueue
  );
  app.post("/oneTwoDelete", OneToTwoPaxWaitingListsController.oneTwoDelete);
  app.post("/oneTwoMissed", OneToTwoPaxWaitingListsController.oneTwoMissed);

  app.post(
    "/threeFourDelete",
    ThreeToFourPaxWaitingListsController.threeFourDelete
  );
  app.post(
    "/threeFourMissed",
    ThreeToFourPaxWaitingListsController.threeFourMissed
  );
  app.post(
    "/fourPlusDelete",
    MoreThanFourPaxWaitingListsController.fourPlusDelete
  );
  app.post(
    "/fourPlusMissed",
    MoreThanFourPaxWaitingListsController.fourPlusMissed
  );

  // special JS page. Include the webpack index.html file
  app.get("/home", (request, response) => {
    response.sendFile(resolve("dist", "main.html"));
  });
}
