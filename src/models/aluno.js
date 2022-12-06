import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {


  static init(sequelize) {

    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 à  255 caracteres',
          },
        },
      },


      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo sobrenome deve ter entre 3 à  255 caracteres',
          },
        },
      },


      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique:{
          msg: 'Email já existe'
        },

        validate: {
          isEmail: {
            msg: 'Email inválido.',
          },
        },
      },

      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 200],
            msg: 'Campo idade não pode estar vazio',
          },
        },
      },


      peso: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 200],
            msg: 'Campo peso não pode estar vazio',
          },
        },
      },


      altura: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 200],
            msg: 'Campo idade não pode estar vazio',
          },
        },
      },

    }, {
      sequelize,
    })
    return this;
  }

 static associate(models){
  this.hasMany(models.Foto, {foreignKey: 'aluno_id'})
 }
}















