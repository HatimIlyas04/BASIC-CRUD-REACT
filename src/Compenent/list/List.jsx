function List() {
    const array = [{id:1 , name:"ilyas"},{id:2 , name:"saad"},{id:3 , name:"halima"}]
    const li = array.map((el) =>{
         return <li key={el.id}>{el}</li>
    })
    console.log(li)
    
    return(
        <>
             <ul>{li}</ul>
        </>
        
    )
}
export default List;