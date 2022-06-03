export default function initThreeToFourPaxWaitingListsController(db) {
  const threeFourIndex = async (request, response) => {
    try {
      const threeFourLists = await db.ThreeToFourPaxWaitingListModel.findAll({
        where: { queueStatus: "Active" },
      });
      if (threeFourLists === null) {
        const value3 = 0;
        response.send({ value3 });
      } else {
        response.send({ threeFourLists });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    threeFourIndex,
  };
}
