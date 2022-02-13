import { Link } from 'react-router-dom';

import { Conteiner } from "./styles";

export const PageLayout = ({children }: any) => {
    return (
        <Conteiner>
           {children }
        </Conteiner>
    );
}
