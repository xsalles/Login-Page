import styled from "styled-components";

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoxLogin = styled.div`
  width: 462px;
  height: 558px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 35px;
  margin-top: 100px;
  gap: 28px;
`;

export const BoxLoginImage = styled.img`
  width: 64px;
  height: 50px;
  margin-top: 49px;
`;

export const BoxLoginTitle = styled.h1`
  width: 90px;
  height: 42px;
  font-size: 36px;
`;

export const BoxLoginContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  height: 204px;
  width: 383px;
  gap: 6px;
`;

export const BoxLoginDescription = styled.p`
  width: 200px;
  height: 28px;
  font-size: 24px;
  font-weight: 500;
  margin-left: 8px;
`;

export const BoxLoginInput = styled.input`
  height: 64px;
  border: 1px solid black;
  border-radius: 70px;
  caret-color: black;
`;
export const ForgotPassword = styled.a`
  display: flex;
  color: #37b6ff;
  width: 175px;
  height: 28px;
  font-size: 24px;
  font-weight: 500;
  text-decoration: underline;
`;

export const LoginButton = styled.button `
  width: 216px;
  height: 46px;
  border: 1px solid #37B6FF;
  background-color: #37B6FF;
  color: white;
  font-size: 24px;
  font-weight: 500;
  border-radius: 90px;
`
