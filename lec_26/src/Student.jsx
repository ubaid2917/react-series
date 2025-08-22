function Student({university}){
    return (
        <>
         <h3>Students</h3>
          {university.students.map((student) => (
            <div key={student.id}>
              <ul>
                <li>{student.id}</li>
                <li>{student.name}</li>
                <li>{student.age}</li>
              </ul>
            </div>
          ))}
        </>
    )
}
export default Student