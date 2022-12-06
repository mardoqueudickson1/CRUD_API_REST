import Jwt from "jsonwebtoken"
import User from "../models/User"


export default async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required']
    })
  }

  const [, token] = authorization.split(' ')

  try {

    const dados = Jwt.verify(token, process.env.TOKEN_SECRET)
    const { id, email } = dados

    const user = await User.findOne({
      where: {
        id,
        email,
      }
    })

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido']
      })
    }

    req.userId = id
    req.Useremail = email

    //console.log(`'OLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA': ${req.userId}`)
    next()

  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido']
    })
  }
}
