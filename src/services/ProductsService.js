import axios from 'axios';

class ProductsService{
    static getAllProductsService = () => axios.get('/products')
}

export default ProductsService