import { Router } from "express";
import StudentRoutes from "./StudentRoutes.js";

const router = Router()

router.use("/api/student",StudentRoutes)

export default router;