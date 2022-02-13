import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';

import { Button, CardContainer, CardImage, CardPrice, CardTitle } from "./styles";

export const Card = ({product}:any) => {
    const[cart, setCart] = useState(0)

    useSelector( async(state:{cart:any}) => await state.cart.value ).then((resp)=>{
        setCart(resp)
        console.log(cart);
    })

    
    const dispatch = useDispatch();

    return (
        <CardContainer  key={product._id}>
            <CardImage src={product.url_img}/>
            <CardTitle > {product.description} </CardTitle>
            <CardPrice >{`R$ ${product.price}`} </CardPrice>
            <Button onClick={()=>dispatch(cartActions.Add(cart, product))}> Adicionar</Button>
        </CardContainer>
    );
}
