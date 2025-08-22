function Product({obj}) {
  return(
  <>  
  <h2>Product Component</h2>
   
      
      {
        obj && (
          <div>
            <h4>Name: {obj.name}</h4>
            <h4>Age: {obj.age}</h4>
            <h4>City: {obj.city}</h4>   
          </div>
        )
      }

     <hr />
  </>
  )
}
export default Product;
