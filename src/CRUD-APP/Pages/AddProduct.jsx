import { useState } from 'react'
import './AddProduct.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProducts() {
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    let navigate = useNavigate()

    const handleSubmit =  (e) => {
  e.preventDefault();

//   axios({
//     method:'post',
//     url:'http://localhost:3001/Products',
//     data:{
//         title,
//         price,
//         description
//     }
    
//   })

fetch('http://localhost:3001/Products' , {
    method: 'POST',
    headers:{
        "Content-type" : "Application/json" ,
    },
    body: JSON.stringify({
        title,
        price,
        description
    })

})
.then((res) => res.json())
.then((data) => {
    console.log(data);
    navigate('/products')
})

    }


    return (
        <>
                <div class="ar_form">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="TITLE" onChange={(e) => setTitle(e.target.value) } placeholder="TITLE" />
                        <input type="text" name="DECRIPTION" onChange={(e) => setDescription(e.target.value) } placeholder="DECRIPTION" />
                        <input type="text" name="PRICE" onChange={(e) =>  setPrice(e.target.value) } placeholder="PRICE" />
                        <input type="submit"  value="ADD" />
                    </form>  

                </div>
        </>
    )
}
export default AddProducts;