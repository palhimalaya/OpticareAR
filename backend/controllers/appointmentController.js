const Appointment = require('../models/appointment');
const User = require('../models/user');

// Create a new appointment
const createAppointment = async (req, res) => {
  const { date, time, doctorId, patientId, contact } = req.body;
  if (!date || !time || !doctorId || !patientId || !contact) {
    return res.status(400).json({ success: false, message: 'Please enter all required fields' });
  }
  const doctor = await User.findById(doctorId);
  const patient = await User.findById(patientId);
  if (!doctor || !patient) {
    return res.status(404).json({ success: false, message: 'Doctor or patient not found' });
  }
  try {
    const appointment = await Appointment.create({
      date,
      time,
      doctor: doctorId,
      patient: patientId,
      contact
    });
    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all appointments
const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({});
        res.json({ success: true, data: appointments });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get appointments by user (doctor or patient)
const getAppointmentsByUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const appointments = await Appointment.find({
      $or: [{ doctor: userId }, { patient: userId }]
    })
    .populate('doctor', 'first_name last_name')
    .populate('patient', 'first_name last_name');
    res.json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single appointment by ID
const getAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ success: false, message: 'Appointment not found' });
        }
        res.json({ success: true, data: appointment });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update an existing appointment
const updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!appointment) {
            return res.status(404).json({ success: false, message: 'Appointment not found' });
        }
        res.json({ success: true, data: appointment });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete an appointment
const deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!appointment) {
            return res.status(404).json({ success: false, message: 'Appointment not found' });
        }
        res.status(204).json({ success: true, message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createAppointment,
    getAppointments,
    getAppointmentsByUser,
    getAppointment,
    updateAppointment,
    deleteAppointment
};
