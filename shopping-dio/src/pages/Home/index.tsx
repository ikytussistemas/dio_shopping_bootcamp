import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';

import { Card, Column, Container, PageLayout, Row } from "../../components";
import ProductService from "../../services/product.service";
import { ProductType } from '../../types/ProductType';

const Home = () => {
    const [products , setProducts] = useState<ProductType[]>([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProducts();
    }, [isLoading])

    const getProducts = async() =>{        
        await ProductService.findAll().then((response) =>{
            setProducts(response);  
            setIsLoading(false);
        });
    }

    return (
        <PageLayout>
            {isLoading && <ReactLoading type={"spin"} width={80} height={80} color="#451245" />}
            
            {!isLoading &&<Container>
                <Row>
                    {products.map((product) => {
                        return (
                            <Column mobile={12} table={6} desktop={3} key={product._id}>
                                <Card product={product} />
                            </Column>
                        )
                    })}
                </Row>
            </Container>}
        </PageLayout>
    );
}

export default Home;