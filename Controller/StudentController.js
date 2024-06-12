import prisma from "../DBconn/db.config.js";

export const getAllStudent = async(req,res) => {
  const students = await prisma.student.findMany({});

  return res.json({
    status: 200,
    data: students,
  })
}

export const getAStudent = async(req,res) => {
  const studentId = req.params.id;

  const student = await prisma.student.findFirst({
    where:{
      id:Number(studentId)
    },
  });

  return res.json({
    status: 200,
    data: student,
  })
}

export const deleteAStudent = async(req,res) => {
  const studentId = req.params.id;

  const student = await prisma.student.delete({
    where:{
      id:Number(studentId)
    },
  });

  return res.json({
    status: 200,
    msg: "Student Deleted Successfully",
  })
}


export const createStudent = async(req,res) => {
  const { firstName,lastName,dob,email,departmentId} = req.body;
  const newStudent = await prisma.student.create({
    data:{
      firstName:firstName,
      lastName:lastName,
      dob:new Date(dob),
      email:email,
      departmentId:departmentId,
    }
  });

  return res.json({
    status: 200,
    data: newStudent,
    msg: "Student Created",
  })
}

export const updateStudent = async(req,res)=>{
  const studentId = req.params.id;
  const { firstName,lastName,dob,email,departmentId} = req.body;

  await prisma.student.update({
    where:{
      id:Number(studentId),
    },
    data:{
      firstName:firstName,
      lastName:lastName,
      dob:new Date(dob),
      email:email,
      departmentId:departmentId,
    }
  });

  return res.json({
    status: 200,
    msg: "Student Updated",
  })
}