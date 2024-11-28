import * as S from "./style";
import pigImage from "../../assets/pig.png";
import logoImage from "../../assets/logo.png";
import { Button, Input, Text } from "../../components";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();

  const goBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <S.Container>
      <img src={pigImage} />
      <S.ContentContainer>
        <S.GoBackButton
          className="ph-fill ph-arrow-circle-left"
          onClick={goBack}
        />
        <S.Logo>
          <img src={logoImage} width={73} height={79} />
          <Text size="H3" weight="BOLD" color="GREEN_DARK">
            WalletWise
          </Text>
        </S.Logo>
        <Text size="H1" weight="BOLD" color="GREEN_DARK">
          Criar conta
        </Text>
        <S.Form>
          <S.InputContainer>
            <Input
              placeholder="Insira seu nome."
              onChange={() => {}}
              label="Nome"
            />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              placeholder="Insira seu email."
              onChange={() => {}}
              label="Email"
            />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              placeholder="Insira sua senha."
              onChange={() => {}}
              type="user_password"
              label="Senha"
              hideLeftIcon
            />
          </S.InputContainer>
          <S.InputContainer>
            <Input
              placeholder="Confirme sua senha."
              onChange={() => {}}
              type="user_password"
              label="Confirmação da senha"
              hideLeftIcon
            />
          </S.InputContainer>
        </S.Form>
        <S.ButtonContainer>
          <Button text="Cadastrar" onClick={() => {}} />
        </S.ButtonContainer>
      </S.ContentContainer>
    </S.Container>
  );
}
