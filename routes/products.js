const express=require("express");
const router=express.Router();

const {getAllProducts,getAllProductsTutorial}=require("../controllers/products")
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTutorial);

module.exports=router;