import User from "../models/User";


class UserController {

  //CRIA USUARIO
  async store(req, res) {


    try {


      const novoUsuario = await User.create(req.body)
      res.json(novoUsuario)
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

//LISTA USUARIOS
  async index(req, res) {
    try {
      const users = await User.findAll({attributes: ['id', 'nome', 'email']});
      return res.json(users);
    } catch (e) {
      return res.json(null)
    }
  }



  //Mostra um usuário
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null)
    }
  }


  //UPDATE

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body);

      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
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

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        })
      }
      await user.destroy();
      return res.json({
        success:[`Usuário ${user.nome} apagado com sucesso`]
      });


    } catch (e) {
      return res.json(e.errors.map((err) => err.message))
    }
  }



}






export default new UserController();

/*

index > lista todos usuarios > GET
store/create > crua um novo usuário > POST
delete > apaga usuario > DELETE
show < mostra um usuario > GET
update < atualiza um usuario > PATCH ou PUT

*/
