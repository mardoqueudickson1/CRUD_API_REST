import { Router } from "express";
import alunosController from "../controllers/alunosController";

const router = new Router();

router.get('/', alunosController.index)
router.post('/', alunosController.store)
router.get('/:id', alunosController.show)
router.delete('/:id', alunosController.delete)
router.put('/:id', alunosController.update)



export default router;



/*

index > lista todos usuarios > GET
store/create > crua um novo usuário > POST
delete > apaga usuario > DELETE
show < mostra um usuario > GET
update < atualiza um usuario > PATCH ou PUT

*/
