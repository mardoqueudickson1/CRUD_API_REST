import dotenv from "dotenv";
import { resolve } from 'path';
import cors from 'cors';
import delay from "express-delay";

dotenv.config();

import './src/database';

import express from "express";
import homeRoutes from "./src/routes/homeRoutes";
import UserRoutes from "./src/routes/UserRoutes";
import alunosRoutes from "./src/routes/alunosRoutes";
import tokenRoutes from "./src/routes/TokenRoutes";
import fotoRoutes from "./src/routes/FotoRoutes"





const whiteList  = [
  'http://localhost:3000'
]


const corsOptions = {
  origin: function(origin, callback){
    if(whiteList.indexOf(origin) !== -1 || !origin){
      callback(null, true)
    } else{
      callback(new Error("Not allow by CORS"))
    }
  }
}

//Class da aplicação principal
class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(cors(corsOptions))
    this.app.use(delay(1500))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.static(resolve(__dirname, 'uploads')))
  }

  routes() {

    this.app.use('/', homeRoutes)
    this.app.use('/users/', UserRoutes)
    this.app.use('/alunos/', alunosRoutes)
    this.app.use('/tokens/', tokenRoutes)
    this.app.use('/foto/', fotoRoutes)
  }
}

export default new App().app

