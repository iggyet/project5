export default function initAvailableTablesController(db) {
  const index = async (request, response) => {
    try {
      const availableTables = await db.AvailableTable.findAll();
      response.send({ availableTables });
    } catch (error) {
      console.log(error);
    }
  };
  const updateOccupied = async (request, response) => {
    try {
      console.log(request.body.value);
      const oldOccupied = new Date();
      const newOccupied = new Date();
      newOccupied.setTime(oldOccupied.getTime() + 30 * 60 * 1000);
      console.log(newOccupied);
      const updateTable = await db.AvailableTable.update(
        {
          occupiedAt: oldOccupied,
          estimatedToBeAvailableAt: newOccupied,
          availableAt: null,
        },
        {
          where: { id: request.body.value },
        }
      );
      console.log(updateTable);
      response.send("hello");
    } catch (error) {
      console.log(error);
    }
  };
  const updateAvailable = async (request, response) => {
    try {
      console.log(request.body.value);
      const updateTable = await db.AvailableTable.update(
        {
          availableAt: new Date(),
          occupiedAt: null,
          estimatedToBeAvailableAt: null,
        },
        {
          where: { id: request.body.value },
        }
      );
      console.log(updateTable);
      response.send("hello");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    updateOccupied,
    updateAvailable,
  };
}
