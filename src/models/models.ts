/** @format */

import DataBase from "../db/database";
import DataTypes from "sequelize";

const User = DataBase.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  DateofBirth: { type: DataTypes.STRING },
  mail: { type: DataTypes.STRING },
});

const Basket = DataBase.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Subscription = DataBase.define("subscription", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
});

const TypeSubscription = DataBase.define("typesubscription", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Coaches = DataBase.define("coaches", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fullname: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  experience: { type: DataTypes.STRING },
});

const CoachesReviews = DataBase.define("coachesreviews", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  review: { type: DataTypes.STRING },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Coaches.hasMany(CoachesReviews);
CoachesReviews.belongsTo(Coaches);

User.hasMany(CoachesReviews);
CoachesReviews.belongsTo(User);

TypeSubscription.hasMany(Subscription);
Subscription.belongsTo(TypeSubscription);

export {
  User,
  Basket,
  Subscription,
  TypeSubscription,
  Coaches,
  CoachesReviews,
};
