export default function initMoreThanFourPaxWaitingListsController(db) {
  const fourPlusIndex = async (request, response) => {
    try {
      const fourPlusLists = await db.MoreThanFourPaxWaitingListModel.findAll({
        where: { queueStatus: "Active" },
      });
      if (fourPlusLists === null) {
        const value4 = 0;
        response.send({ value4 });
      } else {
        response.send({ fourPlusLists });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fourPlusIndex,
  };
}
