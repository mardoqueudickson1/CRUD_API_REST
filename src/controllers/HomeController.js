import Aluno from "../models/aluno";

class HomeController {
  async index(req, res) {
    const novoAluno =  await Aluno.create({
      nome: 'Pedro',
      sobrenome: 'Dickson',
      email: 'teste@teste.com',
      idade: 23,
      peso: 80,
      altura: 1.75,
    })
    res.json(novoAluno)
  }
}


export default new HomeController();


