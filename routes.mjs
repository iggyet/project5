import { resolve } from "path";
import db from "./models/index.mjs";

import initAvailableTablesController from "./controllers/availableTables.mjs";
import initStaffsController from "./controllers/staffs.mjs";
import initOneToTwoPaxWaitingListsController from "./controllers/oneToTwoPaxWaitingLists.mjs";
import initThreeToFourPaxWaitingListsController from "./controllers/threeToFourPaxWaitingLists.mjs";
import initMoreThanFourPaxWaitingListsController from "./controllers/moreThanFourPaxWaitingLists.mjs";
import initHistoryOfTableActivitiesController from "./controllers/historyOfTableActivities.mjs";

export default function routes(app) {
  const AvailableTablesController = initAvailableTablesController(db);
  const StaffsController = initStaffsController(db);
  const OneToTwoPaxWaitingListsController =
    initOneToTwoPaxWaitingListsController(db);
  const ThreeToFourPaxWaitingListsController =
    initThreeToFourPaxWaitingListsController(db);
  const MoreThanFourPaxWaitingListsController =
    initMoreThanFourPaxWaitingListsController(db);
  const HistoryOfTableActivitiesController =
    initHistoryOfTableActivitiesController(db);

  app.get("/availabletables", AvailableTablesController.index);
  app.get("/availableTwoTables", AvailableTablesController.twoIndex);
  app.get("/availableFourTables", AvailableTablesController.fourIndex);
  app.post("/updateOccupied", AvailableTablesController.updateOccupied);
  app.post("/updateAvailable", AvailableTablesController.updateAvailable);
  app.post(
    "/updateAvailableOnly",
    AvailableTablesController.updateAvailableOnly
  );
  app.post("/staffsLogin", StaffsController.login);
  app.get("/getOneTwoLists", OneToTwoPaxWaitingListsController.oneTwoIndex);
  app.get(
    "/getOneTwoMissedLists",
    OneToTwoPaxWaitingListsController.oneTwoMissedIndex
  );
  app.get(
    "/getThreeFourLists",
    ThreeToFourPaxWaitingListsController.threeFourIndex
  );
  app.get(
    "/getThreeFourMissedLists",
    ThreeToFourPaxWaitingListsController.threeFourMissedIndex
  );
  app.get(
    "/getFourPlusLists",
    MoreThanFourPaxWaitingListsController.fourPlusIndex
  );
  app.get(
    "/getFourPlusMissedLists",
    MoreThanFourPaxWaitingListsController.fourPlusMissedIndex
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
  app.put("/oneTwoMissed", OneToTwoPaxWaitingListsController.oneTwoMissed);

  app.post(
    "/threeFourDelete",
    ThreeToFourPaxWaitingListsController.threeFourDelete
  );
  app.put(
    "/threeFourMissed",
    ThreeToFourPaxWaitingListsController.threeFourMissed
  );
  app.post(
    "/fourPlusDelete",
    MoreThanFourPaxWaitingListsController.fourPlusDelete
  );
  app.put(
    "/fourPlusMissed",
    MoreThanFourPaxWaitingListsController.fourPlusMissed
  );
  app.post("/findOne", AvailableTablesController.findOne);
  app.post("/updateActivity", HistoryOfTableActivitiesController.insert);

  // special JS page. Include the webpack index.html file
  app.get("/home", (request, response) => {
    response.sendFile(resolve("dist", "main.html"));
  });
}
