export default function initAvailableTablesController(db) {
  const index = async (request, response) => {
    try {
      const availableTables = await db.AvailableTable.findAll();
      response.send({ availableTables });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
  };
}
