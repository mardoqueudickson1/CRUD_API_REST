import { Router } from "express";
import UserController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get('/', loginRequired, UserController.index)
router.get('/:id', UserController.show)
router.put('/', loginRequired, UserController.update)
router.delete('/:id', loginRequired, UserController.delete)
router.post('/', UserController.store)


export default router;




/*

index > lista todos usuarios > GET
store/create > crua um novo usuário > POST
delete > apaga usuario > DELETE
show < mostra um usuario > GET
update < atualiza um usuario > PATCH ou PUT

*/
