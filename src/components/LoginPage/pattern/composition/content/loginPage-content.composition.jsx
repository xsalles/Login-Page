import {
  BoxLogin,
  BoxLoginContainerInputs,
  BoxLoginDescription,
  BoxLoginImage,
  BoxLoginInput,
  BoxLoginTitle,
  ContainerContent,
  CreateAccount,
  CreateAccountText,
  ForgotPassword,
  Line,
  LoginButton,
  QuestionSignUp,
  TextQuestion,
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
      <QuestionSignUp>
        <Line />
        <TextQuestion>Novo na ShopSmart?</TextQuestion>
        <Line />
      </QuestionSignUp>
      <CreateAccount>
        <CreateAccountText>
          Crie sua conta na ShopSmart
        </CreateAccountText>
      </CreateAccount>
    </ContainerContent>
  );
}
