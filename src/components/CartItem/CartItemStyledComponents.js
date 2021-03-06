import styled from "styled-components";

export const CartItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fbfaff;
    border-bottom: 3px solid #e2e1e7;
    padding: 20px;
    margin-bottom: 20px;
    color: #345463;
    user-select: none;
`;

export const ProductContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        fill: #345463;
    }

`

export const ProductDescritionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
`;

export const ProductName = styled.h4`
    color: #345463;
    margin-bottom: 2px;
    margin-top: 0;
    font-weight: normal;
`;
export const ProductDescription = styled.p`
    opacity: 0.7;
    margin: 0;
`;

export const ProductQuantityContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
`;

export const IncrementDecrementIcon = styled.div`
    font-size: 36px;
    outline: none;
    border: none;
    color: #345463;
    background-color: transparent;
    opacity: 0.7;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
`;

export const ProductQuantity = styled.div`
    padding: 5px 20px;
    text-align:center;
    border: 1px solid #345463;
    border-radius: 4px;
    opacity: 0.7;
`;

export const ProductPrice = styled.h4`
    display: flex;
    align-items: center;
    font-weight: bold;
`;