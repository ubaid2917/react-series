import { useState } from 'react'  

function Gender(){
    const [gender, setGender] = useState();  
    const [country, setCountry] = useState();

    function handelRadio(event){
        setGender(event.target.value);
    }  

    function handleCountry(event){
        setCountry(event.target.value);
    }
    return (
        <>
            <h3>Gender: {gender}</h3>
            <input onChange={handelRadio} type="radio" name="gender" id="male" value="male" /> &nbsp;
            <label htmlFor="male">Male</label> <br />   <br />
          &nbsp;  <input onChange={handelRadio} type="radio" name="gender" id="female" value="female" /> &nbsp;
            <label htmlFor="female">Female</label> <br /> 

            <h3>Country: {country}</h3>
            <select name="country" id="country" onChange={handleCountry}>
                <option  selected disabled>Select the country</option>
                <option  value="bangladesh">Bangladesh</option>
                <option  value="india">India</option>
                <option  value="pakistan">Pakistan</option>
            </select>
        </>
    )
}
export default Gender
// function Skills() {
//     const [skills, setSkills] = useState([]);

//     const handelCheckbox = (event) => {
//         console.log(event.target.value)
//         console.log(event.target.checked)

//         if (event.target.checked) {
//             setSkills([...skills, event.target.value])

//         } else {
//             setSkills(skills.filter(skill => skill !== event.target.value))
//         }
//     }
//     return (
//         <>
//             <h3>Skills</h3>

//             <input onChange={handelCheckbox} type="checkbox" name="skills" id="php" value="php" /> &nbsp;
//             <label htmlFor="php">PHP</label>  <br />
//             <br />
//             &nbsp; &nbsp;  <input onChange={handelCheckbox} type="checkbox" name="skills" id="laravel" value="laravel" /> &nbsp;
//             <label htmlFor="laravel">Laravel</label> <br /> <br />

//             &nbsp; &nbsp;  <input onChange={handelCheckbox} type="checkbox" name="skills" id="node" value="node" /> &nbsp;
//             <label htmlFor="node">Node js</label> <br /><br />

//             &nbsp; &nbsp;  <input onChange={handelCheckbox} type="checkbox" name="skills" id="js" value="js" /> &nbsp;
//             <label htmlFor="js">Js</label> <br /> <br />

//             {
//                 skills.includes('js') && (

//                     <>
//                         &nbsp; &nbsp;  <input onChange={handelCheckbox} type="checkbox" name="skills" id="react" value="react" /> &nbsp;
//                         <label htmlFor="react">React</label> <br /> <br />

//                         &nbsp; &nbsp;  <input onChange={handelCheckbox} type="checkbox" name="skills" id="angular" value="angular" /> &nbsp;
//                         <label htmlFor="angular">Angular</label> <br /> <br />
//                     </>
//                 )
//             }
//             <br />

//             &nbsp; &nbsp;  <input onChange={handelCheckbox} type="checkbox" name="skills" id="css" value="css" /> &nbsp;
//             <label htmlFor="css">Css</label>
//             {
//                 skills.includes('css') && (
//                     <>
//                         <h3>Bootstrap</h3>
//                         <h3>Tailwind</h3>
//                         <h3>MUI</h3>
//                     </>

//                 )
//             }






//             <h1>{skills.join(', ')}</h1>


//         </>
//     )
// }

// export default Skills 