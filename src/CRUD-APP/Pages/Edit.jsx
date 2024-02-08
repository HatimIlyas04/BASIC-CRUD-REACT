import { useNavigate, useParams } from 'react-router-dom';
import './Edit.css'
import { useState } from 'react';
function Edit() {
    const [title , setTitle] = useState()
    const [price , setPrice] = useState()
    const [description , setDescription] = useState()
    let { productID } = useParams()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/Products/${productID}`, {
            method: 'PUT',
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify({
                title,
                price,
                description
            })
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            navigate('/products')
        })
    }

    return (

        <div className="ar_form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="TITLE" onChange={(e) => setTitle(e.target.value)} placeholder="TITLE" />
                <input type="text" name="DESCRIPTION" onChange={(e) => setDescription(e.target.value)} placeholder="DESCRIPTION" />
                <input type="text" name="PRICE" onChange={(e) => setPrice(e.target.value)} placeholder="PRICE" />
                <input type="submit" value="EDIT" />
            </form>

        </div>

    )
}
export default Edit;