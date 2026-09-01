import React from 'react';

export default function Students(){
    const students = [
        {id: 1,
            name: "Aman",
            course: "React",
        },
        {id: 2,
            name: "Amit",
            course: "Javascript",},
            {id: 3,
            name: "Sanju",
            course: "Python",},
    ];

  return (
    <div>
      <h2>STUDENTS LIST</h2>
      {students.map((student) =>(
        <>
        <h3>
            {student.name}</h3>
            <p>{student.course}</p>
            </>
      ))
      }
    </div>
  );
}