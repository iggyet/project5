export default function availableTableModel(sequelize, DataTypes) {
  return sequelize.define(
    "available_table",
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
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      estimatedToBeAvailableAt: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      occupiedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      availableAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      seatedByStaffId: {
        type: DataTypes.INTEGER,
        references: {
          model: "staffs",
          key: "id",
        },
      },
      clearedByStaffId: {
        type: DataTypes.INTEGER,
        references: {
          model: "staffs",
          key: "id",
        },
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
