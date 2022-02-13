import { cartType } from '../reducers/cart';
import { ProductType } from './../../../types/ProductType';

const Add = (cart:any, product:cartType) => {
    return {
      type: "ADD_TO_CART",
      cart,
      product,
    };
  };
  
  const AddItem = (cart:any, product:cartType) => {
    return {
      type: "ADD_ITEM",
      cart,
      product,
    };
  };
  
  const RemoveItem = (cart:any, product:cartType) => {
    return {
      type: "REMOVE_ITEM",
      cart,
      product,
    };
  };
  
  const DeleteItem = (cart:any, product:cartType) => {
    return {
      type: "DELETE_ITEM",
      cart,
      product,
    };
  };
  
  const ChangeCart = (localCart:any) => {
    return {
      type: "CHANGE_CART",
      localCart,
    };
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    Add,
    AddItem,
    RemoveItem,
    DeleteItem,
    ChangeCart,
  };
  