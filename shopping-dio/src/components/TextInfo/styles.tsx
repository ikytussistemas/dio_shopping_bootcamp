import styled from 'styled-components';

type TextInfoProps={
    size?: 16 | number,
    weight?: '100' | 'bold' | 'bolder',
    color?: string,
}

export const Text = styled.div<TextInfoProps>`
    font-size: ${(props)=> props.size}px; | 16px
`

export const Header = styled.span`
    font-weight: bolder;
`

export const Info = styled.span`
    text-decoration: underline;
`