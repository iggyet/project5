import { Sequelize } from "sequelize";
import url from "url";
import allConfig from "../config/config.js";

import staffModel from "./staff.mjs";
import availableTableModel from "./availableTable.mjs";
import titleModel from "./title.mjs";
import restaurantModel from "./restaurant.mjs";
import oneToTwoPaxWaitingListModel from "./oneToTwoPaxWaitingList.mjs";
import threeToFourPaxWaitingListModel from "./threeToFourPaxWaitingList.mjs";
import moreThanFourPaxWaitingListModel from "./moreThanFourPaxWaitingList.mjs";
import nowServingModel from "./nowServing.mjs";

const env = process.env.NODE_ENV || "development";

const config = allConfig[env];

const db = {};

let sequelize;

if (env === "production") {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(":"));
  const password = dbUrl.auth.substr(
    dbUrl.auth.indexOf(":") + 1,
    dbUrl.auth.length
  );
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.Staff = staffModel(sequelize, Sequelize.DataTypes);
db.AvailableTable = availableTableModel(sequelize, Sequelize.DataTypes);
db.Title = titleModel(sequelize, Sequelize.DataTypes);
db.Restaurant = restaurantModel(sequelize, Sequelize.DataTypes);
db.OneToTwoPaxWaitingListModel = oneToTwoPaxWaitingListModel(
  sequelize,
  Sequelize.DataTypes
);
db.ThreeToFourPaxWaitingListModel = threeToFourPaxWaitingListModel(
  sequelize,
  Sequelize.DataTypes
);
// eslint-disable-next-line max-len
db.MoreThanFourPaxWaitingListModel = moreThanFourPaxWaitingListModel(
  sequelize,
  Sequelize.DataTypes
);
db.NowServingModel = nowServingModel(sequelize, Sequelize.DataTypes);

db.Staff.belongsToMany(db.Title, { through: "staffs_titles" });
db.Title.belongsToMany(db.Staff, { through: "staffs_titles" });

db.Restaurant.hasMany(db.Staff);
db.Staff.belongsTo(db.Restaurant);

// unsure
// db.Staff.hasMany(db.AvailableTable);
// db.AvailableTable.belongsTo(db.Staff);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
