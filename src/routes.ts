import { Router } from 'express';
import CreateCategoryController from './controllers/CreateCategoryController';
import CreateProductCategoryController from './controllers/CreateProductCategoryController';
import { CreateProductController } from './controllers/CreateProductController';
import CreateProductWithExistController from './controllers/CreateProductWithExistCategory';
import FindCategoryController from './controllers/FindCategoryController';
import FindProductController from './controllers/FindProductController';

const router = Router();

const createProductController = new CreateProductController();
const createCategoryController = new CreateCategoryController();
const createProductCategoryController = new CreateProductCategoryController();
const createProductWithExistController = new CreateProductWithExistController();

const findProductController = new FindProductController();
const findCategoryController = new FindCategoryController();

router.post("/product", createProductController.handle);
router.post("/category", createCategoryController.handle);
router.post("/categoryProduct", createProductCategoryController.handle);
router.post("/productWithCategory", createProductWithExistController.handle);
router.get("/product/:id", findProductController.handle);
router.get("/category/:id", findCategoryController.handle);

export { router };
