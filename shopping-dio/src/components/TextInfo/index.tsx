
import { Text, Header, Info} from "./styles";

type TextProps = {
    header?: string,
    info?: string
}

export const TextInfo = ({header='', info=''}: TextProps) => {
    return (
        <Text><Header>{`${header}`}</Header><Info>{`${info}`}</Info></Text>
    );
}