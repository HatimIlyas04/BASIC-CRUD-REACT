import { useParams } from "react-router-dom"
import './ProductDetails.css'
import { useEffect, useState } from "react"

function ProductDetails() {
    const [product, setProduct] = useState([])
    let { productID } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/Products/${productID}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
    }, [])

    return (
        <div>
            {product &&
                <div className="card-container">
                    <article className="card">
                        <img
                            className="card__background"
                            src={product.image}
                            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                            width="1920"
                            height="2193"
                        />
                        <div className="card__content | flow">
                            <div className="card__content--container | flow">
                                <h2 className="card__title">{product.title}</h2>
                                <p className="card__description">
                                    {product.description}
                                </p>
                            </div>
                            <button className="card__button">{product.price}$</button>
                        </div>
                    </article>
                </div>
            }

        </div>


    )
}
export default ProductDetails