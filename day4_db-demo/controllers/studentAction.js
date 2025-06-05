const StudentDetail = require("../models/studentDetail");

//STUDENT LOGIN
module.exports.studentLogin =async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const student = await StudentDetail.findOne({ email });

    if (!student) {
      return res.status(404).json({ error: 'Invalid email or password' });
    }

    // Match password (simple version, no hashing yet)
    if (student.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Remove password from response
    const { password: pwd, ...studentWithoutPassword } = student.toObject();

    res.status(200).json({
      message: 'Login successful',
      student: studentWithoutPassword
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//INSERT DATA
module.exports.studentInsertData=async (req, res) => {
  try {
    const studentData = req.body;

    // Optional: Basic field check
    if (!studentData.email || !studentData.password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const newStudent = new StudentDetail(studentData);
    const savedStudent = await newStudent.save();

    // Remove password before sending response
    const { password, ...studentWithoutPassword } = savedStudent.toObject();

    res.status(201).json({
      message: 'Student created successfully',
      student: studentWithoutPassword
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//READ ALL DATA
module.exports.studentDataRead=async(req,res)=>{
    try{
        const student=await StudentDetail.find();
        res.status(200).json(student);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

//update by email

module.exports.studentUpdateDetails=async (req, res) => {
  try {
    const email = req.params.email;
    const updates = req.body;

    const updatedStudent = await StudentDetail.findOneAndUpdate(
      { email: email },
      updates,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json({
      message: 'Student updated successfully',
      student: updatedStudent
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};