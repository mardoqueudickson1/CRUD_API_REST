import multer from "multer";
import multerConfig from "../config/multerConfig";
import Foto from "../models/fotos"


const upload = multer(multerConfig).single('foto')


class fotoController {
  store(req, res) {

    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code]
        })
      }

      //COMANDO SQL de limpar tabela truncate table escola.fotos;

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });

        res.json(foto)
      } catch (error) {
        res.status(400).json({
          errors: ['Aluno não existe']
        })
      }


    })


  }
}


export default new fotoController();


