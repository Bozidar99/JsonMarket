import axios from 'axios';



class ProductsService{
    
    static getAllProductsService = () => axios.get('/products?limit=70')
    static getSingleProductService = (id) => axios.get(`/products/${id}`)
    static getAllProductByCategoryService = (category) => axios.get(`/products/category/${category}`)
    static getProductsBySearch = (search) => axios.get(`/products/search?q=${search}`)
}

export default ProductsService