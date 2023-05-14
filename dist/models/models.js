"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachesReviews = exports.Coaches = exports.TypeSubscription = exports.Subscription = exports.Basket = exports.User = void 0;
var database_1 = __importDefault(require("../db/database"));
var sequelize_1 = __importDefault(require("sequelize"));
var User = database_1.default.define("user", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: sequelize_1.default.STRING, unique: true },
    password: { type: sequelize_1.default.STRING },
    role: { type: sequelize_1.default.STRING, defaultValue: "USER" },
    DateofBirth: { type: sequelize_1.default.STRING },
    mail: { type: sequelize_1.default.STRING },
});
exports.User = User;
var Basket = database_1.default.define("basket", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.Basket = Basket;
var Subscription = database_1.default.define("subscription", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, unique: true, allowNull: false },
    description: { type: sequelize_1.default.STRING },
    price: { type: sequelize_1.default.INTEGER },
});
exports.Subscription = Subscription;
var TypeSubscription = database_1.default.define("typesubscription", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, unique: true, allowNull: false },
});
exports.TypeSubscription = TypeSubscription;
var Coaches = database_1.default.define("coaches", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    fullname: { type: sequelize_1.default.STRING },
    description: { type: sequelize_1.default.STRING },
    experience: { type: sequelize_1.default.STRING },
});
exports.Coaches = Coaches;
var CoachesReviews = database_1.default.define("coachesreviews", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    review: { type: sequelize_1.default.STRING },
});
exports.CoachesReviews = CoachesReviews;
User.hasOne(Basket);
Basket.belongsTo(User);
Coaches.hasMany(CoachesReviews);
CoachesReviews.belongsTo(Coaches);
User.hasMany(CoachesReviews);
CoachesReviews.belongsTo(User);
TypeSubscription.hasMany(Subscription);
Subscription.belongsTo(TypeSubscription);
