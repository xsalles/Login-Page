import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100vw;
  height: 106px;
  background-color: white;
  align-items: center;
  border-bottom: 1px solid black;
  gap: 45px;
`;

export const LeftHeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  gap: 45px;
`;

export const Logo = styled.img`
  width: 64px;
  height: 50px;
  margin-left: 40px;
`;

export const NameCompany = styled.h1`
  width: 162px;
  height: 38px;
  font-size: 32px;
`;

export const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  background-color: white;
  gap: 50px;
  margin-left: 800px;
`;

export const Search = styled.div`
  width: 503px;
  height: 63px;
  border: 1px solid black;
  border-radius: 20px;
  box-sizing: border-box;
  
  position: relative;
`;

export const SearchLook = styled.div`
    display: flex;
    width: 76px;
    height: 63px;
    border: 1px solid black;
    border-radius: 20px;
    position: relative;
    left: 427px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #37B6FF;
`

export const Look = styled.img `
    width: 25px;
    height: 25px;
`

export const Menu = styled.img `
   
   width: 52px;
   height: 52px;
`