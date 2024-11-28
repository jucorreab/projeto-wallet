import * as S from "./style";
import {
  Button,
  CardMoney,
  Header,
  Text,
  TransactionItem,
} from "../../components";

export default function Home() {
  return (
    <div>
      <Header />
      <S.Container>
        <S.CardsContainer>
          <CardMoney label="Saldo em dinheiro" value={1400} type="success" />
          <CardMoney label="Total em receitas" value={2300} type="success" />
          <CardMoney label="Total em despesas" value={900} type="danger" />
        </S.CardsContainer>
        <S.TransactionsHeader>
          <Text size="H2" weight="REGULAR" color="GREEN_DARK">
            Suas transações
          </Text>
          <S.ButtonContainer>
            <Button text="Adicionar lançamento" onClick={() => {}} />
          </S.ButtonContainer>
        </S.TransactionsHeader>
        <S.TransactionsContainer>
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="IN"
            value="200"
          />
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="OUT"
            value="200"
          />
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="IN"
            value="200"
          />{" "}
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="IN"
            value="200"
          />
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="IN"
            value="200"
          />
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="IN"
            value="200"
          />
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="OUT"
            value="200"
          />
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="IN"
            value="200"
          />{" "}
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="IN"
            value="200"
          />
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="IN"
            value="200"
          />
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="IN"
            value="200"
          />
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="OUT"
            value="200"
          />
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="IN"
            value="200"
          />{" "}
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="IN"
            value="200"
          />
          <TransactionItem
            date="10/10/10"
            description="Teste"
            type="IN"
            value="200"
          />
        </S.TransactionsContainer>
      </S.Container>
    </div>
  );
}
