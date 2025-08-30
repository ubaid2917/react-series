import styled from 'styled-components'
function Styled () { 

    const Heading = styled.h2`
     color: purple;
     text-align: center;
     font-family: 'Arial', sans-serif;
     font-size: 24px;
     margin: 20px 0;
    ` 

    const Button = styled.button`
        background-color: orange;
        color: white;
        border: none;
        padding: 10px 20px; 
        border-radius: 5px;
        cursor: pointer;
    `
    return (
        <>  
        <Heading>Hello this is Styled Components</Heading>
        <Button>Click Me</Button>
        </>
    )
}
export default Styled