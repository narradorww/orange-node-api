import express from "express";
import TrilhaController from "../controller/trilhasController.js";

const router = express.Router();

router
  .get("/trilhas", TrilhaController.listarTrilhas)
  .get("/trilhas/:id", TrilhaController.listarTrilhaPorId)
  .post("/trilhas", TrilhaController.cadastrarTrilha)
  .put("/trilhas/:id", TrilhaController.atualizarTrilha)
  .delete("/trilhas/:id", TrilhaController.apagarTrilha);


export default router;
