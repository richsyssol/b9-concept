const express = require("express");
const appointmentController = require("../controller/appointmentController");
const router = express.Router();

router.post("/create", appointmentController.createAppointment);
router.get("/list", appointmentController.getAppointments);
router.get("/:id", appointmentController.getAppointmentById);
router.put("/:id", appointmentController.updateAppointment);
router.delete("/delete/:id", appointmentController.deleteAppointment);

module.exports = router;
