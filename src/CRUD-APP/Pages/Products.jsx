import { Link } from 'react-router-dom';
import './Products.css'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        GetAllproduct()
    }, [])
    const GetAllproduct = () => {
        fetch('http://localhost:3001/Products')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setProducts(data)
            })
    }


    const DeleteProduct = (ProductID) => {
        Swal.fire({
            title: `Are Yo Sure To Delete This Product ?`,
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!! "
        }).then((data) => {
            {
                
                data.isConfirmed &&
                    fetch(`http://localhost:3001/Products/${ProductID}`, { method: 'DELETE' })
                        .then((res) => res.json())
                        .then(() => GetAllproduct())
            }
        })


    }
    return (

        <>
            <div className='newProducts'>
                <Link type="button" to={'/Products/Add'} className="btn btn-dark newProducts">Add new products</Link>
            </div><br /><br />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <th scope="row" >{product.id}</th>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}$</td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => { DeleteProduct(product.id) }}>Delete</button>
                                    <Link type="button" to={`/products/${product.id}`} className="btn btn-danger">View</Link>
                                    <Link type="button" to={`/Products/Edit/${product.id}`} className="btn btn-info">Edit</Link>
                                    </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

        </>
    );
}

export default Products;
