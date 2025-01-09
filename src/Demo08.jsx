// const StudentItem = ({ student }) => {
//     return (
//       <li>
//         {student.name} - {student.age}岁
//       </li>
//     );
//   };
const StudentItem = (props) => {
    console.log(props)
  return (
    <li>
      {props.student.name} - {props.student.age}岁
    </li>
  );
};

const StudentList = () => {
  const students = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 16 },
    { id: 3, name: "Charlie", age: 19 },
  ];
  const adultStudent = students.filter((student) => student.age > 18);

  return (
    <div>
      <h1>学生列表</h1>

      <ul>
        {adultStudent.map((student) => (
          // key 仅供 React 内部使用，id 是单独作为 props 传递
          <StudentItem key={student.id} student={student}/>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
