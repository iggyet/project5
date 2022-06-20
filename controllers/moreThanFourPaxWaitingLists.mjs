export default function initMoreThanFourPaxWaitingListsController(db) {
  const fourPlusIndex = async (request, response) => {
    try {
      const { count, rows } =
        await db.MoreThanFourPaxWaitingListModel.findAndCountAll({
          where: { queueStatus: "Active" },
        });
      response.send({ count, rows });
      // if (fourPlusLists === null) {
      //   const value4 = 0;
      //   response.send({ value4 });
      // } else {
      //   response.send({ fourPlusLists });
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const fourPlusMissedIndex = async (request, response) => {
    try {
      const { count, rows } =
        await db.MoreThanFourPaxWaitingListModel.findAndCountAll({
          where: { queueStatus: "Missed" },
        });
      response.send({ count, rows });
      // if (fourPlusLists === null) {
      //   const value4 = 0;
      //   response.send({ value4 });
      // } else {
      //   response.send({ fourPlusLists });
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
        groupSize: request.body.groupsize,
        queueStatus: "Active",
        takenAt: new Date(),
      };
      const newQueue = await db.MoreThanFourPaxWaitingListModel.create(queue);
      console.log(newQueue);
      response.send({ newQueue });
    } catch (error) {
      console.log(error);
    }
  };
  const fourPlusDelete = async (request, response) => {
    try {
      const deleting = await db.MoreThanFourPaxWaitingListModel.destroy({
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
  const fourPlusMissed = async (request, response) => {
    try {
      console.log("value is");
      console.log(request.body.value);
      const missed = await db.MoreThanFourPaxWaitingListModel.update(
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
    fourPlusIndex,
    createQueue,
    fourPlusMissedIndex,
    fourPlusDelete,
    fourPlusMissed,
  };
}
