export default function initHistoryOfTableActivitiesController(db) {
  const insert = async (request, response) => {
    try {
      const table = {
        restaurantId: request.body.restaurantId,
        combinability: request.body.combinability,
        estimatedToBeAvailableAt: request.body.estimatedToBeAvailableAt,
        occupiedAt: request.body.occupiedAt,
        availableAt: request.body.availableAt,
        status: request.body.status,
        tableNumber: request.body.tableNumber,
        tableCapacity: request.body.tableCapacity,
      };
      const newQueue = await db.HistoryOfTableActivityModel.create(table);
      console.log(newQueue);
      response.send({ newQueue });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    insert,
  };
}
