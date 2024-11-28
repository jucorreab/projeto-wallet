import * as S from "./style";
import pigImage from "../../assets/pig.png";
import logoImage from "../../assets/logo.png";
import { Button, Input, Text } from "../../components";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/cadastro");
  };

  const goToRecoverPassword = () => {
    navigate("/recuperarSenha");
  };

  return (
    <S.Container>
      <img src={pigImage} />
      <S.ContentContainer>
        <S.Welcome>
          <img src={logoImage} />
          <Text size="H1" weight="BOLD" color="GREEN_DARK">
            WalletWise
          </Text>
          <Text size="H3" weight="BOLD" color="GREEN_DARK">
            Dinheiro Sob Controle
          </Text>
        </S.Welcome>
        <S.Form>
          <Input
            placeholder="Insira seu email."
            onChange={() => {}}
            type="user_email"
          />
          <Input
            placeholder="Insira sua senha."
            onChange={() => {}}
            type="user_password"
          />
          <S.ForgotPasswordButton onClick={goToRecoverPassword}>
            Esqueceu sua senha?
          </S.ForgotPasswordButton>
        </S.Form>
        <S.ButtonContainer>
          <Button text="Entrar" onClick={() => {}} />
        </S.ButtonContainer>
        <S.RegisterTextContainer>
          <Text size="P" weight="BOLD" color="BLACK">
            Não possui uma conta?
          </Text>
        </S.RegisterTextContainer>
        <S.ButtonContainer>
          <Button text="Cadastrar" onClick={goToRegister} type="OUTLINE" />
        </S.ButtonContainer>
      </S.ContentContainer>
    </S.Container>
  );
}
