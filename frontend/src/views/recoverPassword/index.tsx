import * as S from "./style";
import pigImage from "../../assets/pig.png";
import logoImage from "../../assets/logo.png";
import { Button, Input, Text } from "../../components";
import { useNavigate } from "react-router";

export default function RecoverPassword() {
  const navigate = useNavigate();

  const goBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/", { replace: true });
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
        <S.FormContainer>
          <Text size="H1" weight="BOLD" color="GREEN_DARK">
            Recuperar senha
          </Text>
          <S.InfoTextContainer>
            <Text size="P" weight="REGULAR" color="BLACK">
              Enviaremos um email para você com as instruções de recuperação de
              senha.
            </Text>
          </S.InfoTextContainer>
          <S.InputContainer>
            <Input
              placeholder="Insira seu email."
              onChange={() => {}}
              hideLeftIcon
            />
          </S.InputContainer>
          <S.ButtonContainer>
            <Button text="Enviar" onClick={() => {}} />
          </S.ButtonContainer>
        </S.FormContainer>
      </S.ContentContainer>
    </S.Container>
  );
}
