import { useSelector, useDispatch } from 'react-redux';
import { CustomModal } from '../CustomModal';
import cartActions from '../store/actions/cart';
import { useState } from 'react';
import { cartType } from '../store/reducers/cart';
import { ProductType } from '../../types/ProductType';
import { PageLayout } from '../PageLayout/index';
import { Button, Page, Table } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

type stateType = {
    value: 0,
    products: ProductType[],
    Cart: cartType[],
}

const Cart = () => {
    const [cart, setCart] = useState<stateType>({ value: 0, products: [], Cart: [] })
    const [modalCart, setModalCart] = useState(false);
    useSelector(async (state: { cart: any }) => await state.cart).then((response) => {
        setCart(response)
    });

    const dispatch = useDispatch();

    let totalPrice = 0;

    for (let i = 0; i < cart.Cart.length; i++) {
        totalPrice += (cart.Cart[i].price * cart.Cart[i].quantity)
    }

    if (cart.value > 0) {
        localStorage.setItem('dioshopping: cart', JSON.stringify(cart))
    }
    const openModalCart = () => {
        setModalCart(true);
    }
    const closeModal = () => {
        setModalCart(false);
    }

    return (
        <PageLayout>
            <Button
                width={40} height={35}
                Backgroud="#1bb148" color="#fff"
                onClick={() => openModalCart()}
            >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="badge rounded-pill bg-info text-dark">
                    {cart.value}
                </span>
            </Button>
            <CustomModal open={modalCart} close={() => closeModal()} visual={`widht: 200px`}>
                <Page>
                <Table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Produto</th>
                            <th scope="col">Qtd</th>
                            <th scope="col">Preço</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.Cart.map(item => {
                            return (
                                <tr key={item.id}>
                                    <th>
                                        <Button width={30} height={30} Backgroud="#972915" color="#fff"
                                            onClick={() => dispatch(cartActions.DeleteItem(cart, item))}>
                                            <FontAwesomeIcon icon={faClose} />
                                        </Button>
                                    </th>
                                    <th>
                                        <img className="img-fluid img-thumbnail" src={item.url_img} alt={item.description} width="50px" />
                                    </th>
                                    <th>
                                        <Button width={30} height={30} Backgroud="#ECC427" color="#fff">
                                            {item.quantity}
                                        </Button>
                                    </th>
                                    <th>
                                        R$ {item.price.toFixed(2)}
                                    </th>
                                    <th>
                                        <Button width={30} height={30} Backgroud="#111dc7" color="#fff"
                                            onClick={() => dispatch(cartActions.AddItem(cart, item))}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </Button>
                                    </th>
                                    <th>
                                        <Button width={30} height={30} Backgroud="#972915" color="#fff"
                                            onClick={() => dispatch(cartActions.RemoveItem(cart, item))} >
                                            <FontAwesomeIcon icon={faMinus} />
                                        </Button>
                                    </th>
                                    <th>
                                        R$ {(item.price * item.quantity).toFixed(2)}
                                    </th>
                                </tr>
                            )
                        })}
                        <tr>
                            <th colspan={2} scope="col">Total</th>
                            <th colspan={3}>{cart.value} itens</th>
                            <th colspan={2}>R$ {totalPrice.toFixed(2)}</th>
                        </tr>
                    </tbody>
                </Table>
                </Page>
                <Button width={40} height={35} Backgroud="#828683" color="#fff"
                    onClick={() => closeModal()}>
                    <FontAwesomeIcon icon={faClose} />
                </Button>
            </CustomModal>
        </PageLayout>
    )
}

export default Cart;
