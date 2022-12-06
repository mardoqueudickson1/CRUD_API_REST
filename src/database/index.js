import  Sequelize  from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../models/aluno";
import User from "../models/User";
import Foto from "../models/fotos";

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);


models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));



