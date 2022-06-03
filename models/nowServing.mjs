export default function nowServingModel(sequelize, DataTypes) {
  return sequelize.define(
    "now_serving",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      oneTwoPax: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      threeFourPax: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      fourPlusPax: {
        type: DataTypes.TEXT,
        // allowNull: false,
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
