export default function historyOfTableActivityModel(sequelize, DataTypes) {
  return sequelize.define(
    "history_of_table_activity",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        references: {
          model: "restaurants",
          key: "id",
        },
      },
      tableCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tableNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      combinability: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      estimatedToBeAvailableAt: {
        type: DataTypes.TIME,
      },
      occupiedAt: {
        type: DataTypes.DATE,
      },
      availableAt: {
        type: DataTypes.DATE,
      },
      // seatedByStaffId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: "staffs",
      //     key: "id",
      //   },
      // },
      // clearedByStaffId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: "staffs",
      //     key: "id",
      //   },
      // },
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
