export default function threeToFourPaxWaitingListModel(sequelize, DataTypes) {
  return sequelize.define(
    "three_to_four_pax_waiting_list",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
          allowNull: false,
        },
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        references: {
          model: "restaurants",
          key: "id",
        },
      },
      availableTableId: {
        type: DataTypes.INTEGER,
        references: {
          model: "available_tables",
          key: "id",
        },
      },
      queuePosition: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      queueNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      queueStatus: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      nowServing: {
        type: DataTypes.TEXT,
        // references: {
        //   model: "three_to_four_pax_waiting_list",
        //   key: "queue_number",
        // },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    { underscored: true }
  );
}
