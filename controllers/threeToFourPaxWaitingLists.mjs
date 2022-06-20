export default function initThreeToFourPaxWaitingListsController(db) {
  const threeFourIndex = async (request, response) => {
    try {
      const { count, rows } =
        await db.ThreeToFourPaxWaitingListModel.findAndCountAll({
          where: { queueStatus: "Active" },
        });
      response.send({ count, rows });
      // if (threeFourLists === null) {
      //   const value3 = 0;
      //   response.send({ value3 });
      // } else {
      //   response.send({ threeFourLists });
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const threeFourMissedIndex = async (request, response) => {
    try {
      const { count, rows } =
        await db.ThreeToFourPaxWaitingListModel.findAndCountAll({
          where: { queueStatus: "Missed" },
        });
      response.send({ count, rows });
      // if (threeFourLists === null) {
      //   const value3 = 0;
      //   response.send({ value3 });
      // } else {
      //   response.send({ threeFourLists });
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const createQueue = async (request, response) => {
    try {
      const queue = {
        restaurantId: 1,
        name: request.body.name,
        contactNumber: request.body.contactnumber,
        // tableFor: request.body.tablefor,
        // groupSize: request.body.groupsize,
        queueStatus: "Active",
        takenAt: new Date(),
      };
      const newQueue = await db.ThreeToFourPaxWaitingListModel.create(queue);
      console.log(newQueue);
      response.send({ newQueue });
    } catch (error) {
      console.log(error);
    }
  };
  const threeFourDelete = async (request, response) => {
    try {
      const deleting = await db.ThreeToFourPaxWaitingListModel.destroy({
        where: { id: request.body.value },
      });
      response.send("deleted");
      // if (threeFourLists === null) {
      //   const value3 = 0;
      //   response.send({ value3 });
      // } else {
      //   response.send({ threeFourLists });
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const threeFourMissed = async (request, response) => {
    try {
      console.log("value is");
      console.log(request.body.value);
      const missed = await db.ThreeToFourPaxWaitingListModel.update(
        { queueStatus: "Missed" },
        { where: { id: request.body.value } }
      );
      response.send(missed);
      // if (threeFourLists === null) {
      //   const value3 = 0;
      //   response.send({ value3 });
      // } else {
      //   response.send({ threeFourLists });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    threeFourIndex,
    createQueue,
    threeFourMissedIndex,
    threeFourDelete,
    threeFourMissed,
  };
}
