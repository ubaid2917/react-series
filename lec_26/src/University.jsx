import Student from "./Student"
const University = ({ universities }) => {
  console.log("universities", universities);
  return (
    <div>
      <h1>Universities</h1>
      {universities.map((university) => (
        <div
          key={university.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            color: "black",
            backgroundColor: "cyan",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <h2>{university.name}</h2>
          <li>{university.website}</li>
          <li>{university.campus}</li>

          <Student  university={university}/>
        </div>
      ))}
    </div>
  );
};

export default University;
