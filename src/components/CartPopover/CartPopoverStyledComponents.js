import styled from "styled-components";

export const CartPopoverContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #b3d4dd;
    border-radius: 4px;
    position: absolute;
    top: 80px;
    width: 330px;
    z-index: 100;
`

export const CartPopoverArrow = styled.div`
    position: absolute;
    top: 0px;
    right: 28px;
    ::before {
        transform: translateX(-17px) translateY(-8px) scaleX(.5) rotate(-45deg);
        content: '';
        box-sizing: border-box;
        display: block;
        height: 30px;
        width: 30px;    
        background-color: #b3d4dd;
        border: 1px solid #b3d4dd;
        position: absolute;
    }
`