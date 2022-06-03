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

  return {
    oneTwoIndex,
  };
}
