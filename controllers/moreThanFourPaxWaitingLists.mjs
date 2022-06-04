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

  return {
    fourPlusIndex,
  };
}
