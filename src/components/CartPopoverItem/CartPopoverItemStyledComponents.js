import styled from "styled-components";

export const CartPopoverItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #b3d4dd;
    border-radius: 4px;
    padding: 20px 20px 20px 0px;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    :not(:last-child) {
        border-bottom: 1px solid #3c5c6a; 
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

    }
    &.empty {
        justify-content: center;
    }
`

export const CrossIcon = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #d5e6ef;
    font-size: 24px;
    padding: 0 10px;
    margin: 0 5px;
    cursor: pointer;
`

export const ProductDescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProductTitle = styled.div`
    color: #436371;
`;
export const ProductPrice = styled.div`
    color: #3c5c6a;
    font-weight: bold;
`;
export const ProductQuantity = styled.div`
    font-size: 12px;
    color: #3c5c6a;
`;