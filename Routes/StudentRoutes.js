import { Router } from "express";
import { createStudent, updateStudent, getAllStudent, getAStudent, deleteAStudent } from "../Controller/studentController.js";

const router = Router()

router.get("/",getAllStudent);
router.get("/:id",getAStudent);
router.post("/",createStudent);
router.put("/:id",updateStudent);
router.delete("/:id",deleteAStudent);

export default router;