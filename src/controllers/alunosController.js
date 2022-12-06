import Aluno from "../models/aluno";
import Foto from "../models/fotos";

class AlunosController {


  //Criar aluno
  async store(req, res) {

    try {
      const novoAluno = await Aluno.create(req.body)
      res.json(novoAluno)
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  //Listar alunos
  async index(req, res) {

    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      }

    });
    res.json(alunos)

  }


  //Listar um aluno
  async show(req, res) {

    const { id } = req.params;

    try {

      const alunos = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url','filename'],
        }

      });
      return res.json(alunos)

    } catch (e) {
      return res.json('ALUNO NÀO ENCONTRADO')
    }
  }



  //UPDATE
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.']
        })
      }

      const novosDados = await aluno.update(req.body)

      return res.json(novosDados);
    } catch (e) {
      return res.json(e.errors.map((err) => err.message))
    }
  }



  //DELETE

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado']
        })
      }

      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.']
        })
      }
      await aluno.destroy();
      return res.json({
        success: [`Aluno ${aluno.nome} apagado com sucesso`]
      });


    } catch (e) {
      return res.json(e.errors.map((err) => err.message))
    }
  }


}


export default new AlunosController();



/*

index > lista todos usuarios > GET
store/create > crua um novo usuário > POST
delete > apaga usuario > DELETE
show < mostra um usuario > GET
update < atualiza um usuario > PATCH ou PUT

*/
