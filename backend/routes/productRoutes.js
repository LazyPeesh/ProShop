import express from "express";
import bodyParser from "body-parser";
const router = express.Router();
router.use(bodyParser.json());

import {
  getProducts,
  getProductById,
  createProducts,
  updateProducts,
  deleteProduct,
} from "../controllers/productControllers.js";

router.route("/").get(getProducts).post(createProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(updateProducts)
  .delete(deleteProduct);

export default router;
