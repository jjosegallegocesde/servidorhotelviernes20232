//espacio para definir las rutas
//o endpoints especificos de SU API
import express from "express";

import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
let controladorHabitacion=new ControladorHabitacion()

export let rutasAPI = express.Router();

//ACA PONE SUS ENDPOINTS
rutasAPI.post("/api/habitaciones", controladorHabitacion.registrar)
rutasAPI.get("/api/habitaciones",controladorHabitacion.buscarTodas )
rutasAPI.get("/api/habitacion/:id", controladorHabitacion.buscarPorId)
rutasAPI.put("/api/habitaciones/:id", controladorHabitacion.modificar)
rutasAPI.delete("/api/habitaciones/:id", controladorHabitacion.eliminar)
