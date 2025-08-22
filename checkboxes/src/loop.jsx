function LoopInJsx(){   

    const userData = [
        { id: 1, name: 'John', email: 'john@gmail.com', age: 30 },
        { id: 2, name: 'Jane', email: 'Jane@gmail.com', age: 28 },
        { id: 3, name: 'Bob', email: 'Bob@gmail.com', age: 32 },
        { id: 3, name: 'Lilly', email: 'Lilly@gmail.com', age: 20 },
    ]
    return (
        <>
            <table border="1">
                <thead>
                     <tr>
                         <th>Id</th>
                         <th>Name</th>
                         <th>Email</th>
                         <th>Age</th>
                     </tr>
                </thead>
                {
                    userData.map((user) => (
                       <tr>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.age}</td>
                        </tr>
                    )
                        
                    )
                }
            </table>
        </>
    )
}

export default LoopInJsx