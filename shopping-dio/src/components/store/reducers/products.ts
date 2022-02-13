import productService from '../../../services/product.service';

const PRODUCT = await productService.findAll();

export default async function products(state = PRODUCT){
    return state;
}