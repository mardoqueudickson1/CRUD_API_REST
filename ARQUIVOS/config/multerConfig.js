// import multer from "multer";
// import { extname, resolve} from 'path';

// const aleatorio = () => Math.floor(Math.random() * 1000 * 1000)

// export default {

//   storage: multer.diskStorage({
//     destination: (req, file, cb) =>{
//       cb(null, resolve(__dirname, '..', '..', 'uploads'))
//     },

//     filename:(req, file, cb) =>{
//       cb(null, `${Date.now()}_${aleatorio}${extname(file.originalname)}`)
//     },
//   })

// }
