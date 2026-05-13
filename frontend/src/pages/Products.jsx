import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const res = await getProducts();

        setProducts(res.data);
    };

    return (
        <div>

            <h1>Productos</h1>

            {
                products.map(product => (

                    <div key={product._id}>

                        <h3>{product.name}</h3>

                        <p>${product.price}</p>

                        <p>Stock: {product.stock}</p>

                    </div>

                ))
            }

        </div>
    );
}

export default Products;