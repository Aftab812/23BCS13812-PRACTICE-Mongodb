const Student = require('../models/studentModel');

// Create
exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

// Read (All)
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.json(student);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};
