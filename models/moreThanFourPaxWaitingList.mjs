export default function moreThanFourPaxWaitingListModel(sequelize, DataTypes) {
  return sequelize.define(
    "more_than_four_pax_waiting_list",
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
      // availableTableId: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: "available_tables",
      //     key: "id",
      //   },
      // },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contactNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // tableFor: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      groupSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // queuePosition: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      // queueNumber: {
      //   type: DataTypes.TEXT,
      //   allowNull: false,
      // },
      queueStatus: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // nowServing: {
      //   type: DataTypes.TEXT,
      //   // references: {
      //   //   model: "more_than_four_pax_waiting_list",
      //   //   key: "queue_number",
      //   // },
      // },
      takenAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
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
