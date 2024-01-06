import { Router } from "express";
import pointerController from "./pointer.controller";

const pointerRouter = Router();

pointerRouter.post("/addPointer", pointerController.addPointer);

pointerRouter.get("/getPointers/:userId", pointerController.getPointersByUserId);

export default pointerRouter;