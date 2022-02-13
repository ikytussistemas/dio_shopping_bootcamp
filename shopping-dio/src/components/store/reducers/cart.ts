import { ProductType } from "../../../types/ProductType";
import productService from "../../../services/product.service";

let productList: ProductType[] = await productService.findAll();

export type cartType = {
  id: string;
  description: string;
  price: number;
  url_img: string;
  quantity: number;
};

let cartList:cartType[] = []

const INITIAL_STATE = {
  value: 0,
  products: productList,
  Cart: cartList,
};

export default function cart(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.value === 0) {
        let item:cartType = {
          id: action.product._id,
          description: action.product.description,
          price: action.product.price,
          url_img: action.product.url_img,
          quantity: 1,
        };
        state.Cart.push(item);
      } else {
        let check = false;
        state.Cart.map((item, key) => {
          if (item.id === action.product._id) {
            state.Cart[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let item = {
            id: action.product._id,
            description: action.product.description,
            price: action.product.price,
            url_img: action.product.url_img,
            quantity: 1,
          };
          state.Cart.push(item);
        }
      }
      return {
        ...state,
        value: state.value + 1,
      };
    case "ADD_ITEM":
      action.product.quantity++;
      return {
        ...state,
        value: action.cart.value + 1,
      };
    case "REMOVE_ITEM":
      if (action.product.quantity > 1) {
        action.product.quantity--;
        return {
          ...state,
          value: action.cart.value - 1,
        };
      } else {
        return state;
      }
    case "DELETE_ITEM":
      return {
        ...state,
        value: action.cart.value - action.product.quantity,
        Cart: state.Cart.filter((item) => {
          return item.id !== action.product.id;
        }),
      };
    case "CHANGE_CART":
      return (state = action.localCart);
    default:
      return state;
  }
  return state;
}
