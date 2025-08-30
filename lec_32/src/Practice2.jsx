function Practice2(){

  const users = ['Ubaid', 'Ali', 'Ahmed', 'Hassan', 'Hamza', 'Haris'];


    const divStyle = {
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    padding: "20px",
    width: "300px",
    margin: "10px",
    borderRadius: "11px",
  }
  const imgStyle = {
    width: "250px",
    borderRadius: "11px",
  };  

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }


 return (
    <> 
      <h2>Practice Compoment 2</h2>  

       <div style={{display: "flex", flexWrap: "wrap"}}> 
        {
          users.map((user, index) => 
          
            <div style={divStyle}> 
        <img
          style={imgStyle}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <h2>{user}</h2>
        <h4>Software Developer</h4>
        <button style={buttonStyle}>Hire Me</button>
      </div>
          )
        }

       </div>
    </>
 )
}
export default Practice2;