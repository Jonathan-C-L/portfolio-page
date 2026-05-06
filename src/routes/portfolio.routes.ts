//-----------------------------------------------------
// Keeps route definitions thin — just method, path, middleware, and a pointer to the controller. 
// Wrapping controller methods in arrow functions ((req, res, next) => controller.method(req, res, next)) 
// preserves the correct this context when using classes, avoiding a common runtime bug.
//-----------------------------------------------------
/*
import { Router } from 'express';
import { PortfolioController } from '../controllers/portfolio.controller';
import { validateContact } from '../middlewares/validate.middleware';

const router = Router();
const controller = new PortfolioController();

router.get('/projects', (req, res, next) => controller.getProjects(req, res, next));
router.get('/projects/:id', (req, res, next) => controller.getProjectById(req, res, next));
router.post('/contact', validateContact, (req, res, next) =>
  controller.sendContact(req, res, next),
);

export default router;
*/