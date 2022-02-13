import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;
    &:before,
    &:after {
        content:"";
        display: table;
    }
    &:after {
        clear: both;
    }
`

export const Row = styled.div`   
    width: 100%;
    height: 100%;
    float: left;
    overflow-y: auto;
    box-sizing: border-box;
    padding-bottom: 100px;
    &:before,
    &:after {
        content:"";
        display: table;
    }
    &:after {
        clear: both;
    }
`

function getWidthGrid(value: number) {
    if(!value) return;

    let width = value / 12 * 100;
    return `width: ${width}%`
}

type TypeScreen = {
    mobile: number,
    table: number,
    desktop: number,
}

export const Column = styled.div<TypeScreen>`
    display: flex;
    justify-content: center;
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    
    @media only screen and (max-width: 500px) {
        ${({mobile}) => mobile && getWidthGrid(mobile)}
    }

    @media only screen and (min-width:501px and max-width: 768px) {
        ${({table}) => table && getWidthGrid(table)}
    }

    @media only screen and (min-width: 769px) {
        ${({desktop}) => desktop && getWidthGrid(desktop)}
    }
`