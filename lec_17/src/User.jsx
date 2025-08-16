function User(data)  { 
    console.log('data', data)
    return (
        <>  

         <hr />
         
        <h1>name: {data.obj.name}</h1>
        <h1>age: {data.obj.age}</h1>
        <h1>email: {data.obj.email}</h1>  

        <hr />
       
       
        </>
    )
} 
export default User