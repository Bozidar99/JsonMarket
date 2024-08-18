import axios from 'axios';



class ProductsService{
    
    static getAllProductsService = () => axios.get('/products')
    static getSingleProductService = (id) => axios.get(`/products/${id}`)
}

export default ProductsService