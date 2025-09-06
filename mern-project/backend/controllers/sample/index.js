const router = require("express").Router();
const sampleService = require("../../services/user");

const { validate } = require("../../middlewares/validator");
const validationSchemas = require("../../middlewares/validationSchemas");
const { validateParams } = require("../../middlewares/paramsValidate");

router.post("/add",  sampleService.create);

router.get("/get", sampleService.get);
router.get("/get/:id", sampleService.getOne);

router.patch( "/update/:id",    sampleService.update);

router.delete("/delete/:id", sampleService.del);

module.exports = router;
