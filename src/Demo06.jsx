// const NameList = ()=> {
//     const names = ["Alice", "Bob", "Charlie"]; // 数据源：名称数组

//     return (
//       <div>
//         <h1>名称列表</h1>
//         <ul>
//           {names.map((name, index) => (
//             <li key={index}>{name}</li> // 使用 map 方法生成列表项
//           ))}
//         </ul>
//       </div>
//     );
//   }

//   export default NameList;

const StudentList = () => {
  const students = [
    { id: 1, name: "Alice", age: 20 },
    { id: 2, name: "Bob", age: 16 },
    { id: 3, name: "Charlie", age: 19 },
    { id: 4, name: "Amy", age: 15 },
  ];

  return (
    <div>
      <h1>学生列表</h1>
      <ul>
        {students
          .filter((student) => student.age > 18)
          .map((adultStudent) => (
            <li key={adultStudent.id}>
              {adultStudent.name} - {adultStudent.age}岁
            </li>
          ))}
      </ul>
    </div>
  );
};

export default StudentList;
