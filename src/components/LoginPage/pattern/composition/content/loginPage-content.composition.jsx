import {
  BoxLogin,
  BoxLoginContainerInputs,
  BoxLoginDescription,
  BoxLoginImage,
  BoxLoginInput,
  BoxLoginTitle,
  ContainerContent,
  ForgotPassword,
  LoginButton,
} from "./styles";
import LogoShopSmart from "../../../../../assets/images/logoShopSmart.png";

export default function LoginPageContent() {
  return (
    <ContainerContent>
      <BoxLogin>
        <BoxLoginImage src={LogoShopSmart} />
        <BoxLoginTitle>Login</BoxLoginTitle>
        <BoxLoginContainerInputs>
          <BoxLoginDescription>Nome do usuário:</BoxLoginDescription>
          <BoxLoginInput />
          <BoxLoginDescription>Senha:</BoxLoginDescription>
          <BoxLoginInput />
        </BoxLoginContainerInputs>
        <ForgotPassword>Esqueci a senha</ForgotPassword>
        <LoginButton>Login</LoginButton>
      </BoxLogin>
    </ContainerContent>
  );
}
