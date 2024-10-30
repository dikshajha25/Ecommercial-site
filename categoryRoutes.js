import express from 'express';
import {isAdmin, requireSingIn} from './../middlewares/authMiddleware';
import router from './authRoute';
import { categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController, } from '../controllers/categoryController';

const router = express.Router()

//routes
//create category
router.post(
  'create-category', 
  requireSingIn, 
  isAdmin, 
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;