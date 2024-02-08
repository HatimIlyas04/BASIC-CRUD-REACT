function Product({product:{name,title,image,}}) {
    return(
        <div>
            <h1>{name}</h1>
            <p>{title}</p>
            <img src={image} alt="" />
        </div>
    )
}
export default Product;

