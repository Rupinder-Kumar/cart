import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CartAmount = styled.div`
  font-size: 16px;
`

export const CartItemCount = styled.div`
display: flex;
font-size: 13px;
cursor: pointer;
user-select: none;
`

export const CartIconContainer = styled.div`
  color: #405f6c;
  font-size: 16px;
  z-index: 1;
  cursor: pointer;
  svg g {
    fill: #405f6c;
  }
`;

export const TriangleDown = styled.div`
  padding-left: 3px;
  font-size: 24px;
  line-height: 12px;
`