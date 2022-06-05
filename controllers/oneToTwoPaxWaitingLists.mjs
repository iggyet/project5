export default function initOneToTwoPaxWaitingListsController(db) {
  const oneTwoIndex = async (request, response) => {
    try {
      const { count, rows } =
        await db.OneToTwoPaxWaitingListModel.findAndCountAll({
          where: { queueStatus: "Active" },
        });
      response.send({ count, rows });
      // if (oneTwoLists === null) {
      //   const value1 = 0;
      //   response.send({ value1 });
      // } else {
      //   response.send({ oneTwoLists });
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const oneTwoStaffIndex = async (request, response) => {
    try {
      const { count, rows } =
        await db.OneToTwoPaxWaitingListModel.findAndCountAll();
      response.send({ count, rows });
      // if (oneTwoLists === null) {
      //   const value1 = 0;
      //   response.send({ value1 });
      // } else {
      //   response.send({ oneTwoLists });
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
      const newQueue = await db.OneToTwoPaxWaitingListModel.create(queue);
      console.log(newQueue);
      response.send(newQueue);
    } catch (error) {
      console.log(error);
    }
  };
  const oneTwoDelete = async (request, response) => {
    try {
      const deleting = await db.OneToTwoPaxWaitingListModel.destroy({
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
  const oneTwoMissed = async (request, response) => {
    try {
      console.log("value is");
      console.log(request.body.value);
      const missed = await db.OneToTwoPaxWaitingListModel.update(
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
    oneTwoIndex,
    createQueue,
    oneTwoStaffIndex,
    oneTwoDelete,
    oneTwoMissed,
  };
}
