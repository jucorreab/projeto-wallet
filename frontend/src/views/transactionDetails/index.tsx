import { useNavigate } from "react-router";
import { Button, Header, Input, RadioButton, Text } from "../../components";
import * as S from "./style";

export default function TransactionDetails() {
  const navigate = useNavigate();
  const goBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div>
      <Header />
      <S.Container>
        <S.Title>
          <S.GoBackButton
            className="ph-fill ph-arrow-circle-left"
            onClick={goBack}
          />
          <Text size="H2" weight="REGULAR" color="GREEN_DARK">
            Adicionar transação
          </Text>
        </S.Title>
        <Text size="P" weight="REGULAR" color="BLACK">
          Selecione o tipo de transação
        </Text>
        <RadioButton />
        <S.InputRequiredContainer>
          <S.InputDescriptionContainer>
            <Input
              onChange={() => {}}
              placeholder="Insira uma descrição para a sua transação."
              label="Descrição:"
            />
          </S.InputDescriptionContainer>
          <S.InputDefaultContainer>
            <Input
              onChange={() => {}}
              placeholder="Insira o valor."
              label="Valor:"
            />
          </S.InputDefaultContainer>
          <S.InputDefaultContainer>
            <Input
              onChange={() => {}}
              placeholder="Insira a data."
              label="Data:"
            />
          </S.InputDefaultContainer>
        </S.InputRequiredContainer>
        <S.InputDefaultContainer>
          <Input
            onChange={() => {}}
            placeholder=""
            label="Observação (opcional):"
          />
        </S.InputDefaultContainer>
        <S.ButtonContainer>
          <Button text="Adicionar" onClick={() => {}} />
        </S.ButtonContainer>
      </S.Container>
    </div>
  );
}
