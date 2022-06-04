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

  return {
    threeFourIndex,
  };
}
