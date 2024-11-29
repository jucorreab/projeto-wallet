import * as S from "./style";
import {
  Button,
  CardMoney,
  Header,
  Text,
  Toast,
  TransactionItem,
} from "../../components";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Transaction } from "../../@types/transaction";
import api from "../../api";
import { AxiosError } from "axios";
import { AuthStorage } from "../../storage/authStorage";

export default function Home() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<Transaction[]>();
  const [error, setError] = useState("");

  const goAddTransaction = () => {
    navigate("/adicionarTransação");
  };

  const getAuthHeader = () => {
    const token = AuthStorage.getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const fetchTransactions = async () => {
    try {
      const { data } = await api.get("/transactions", {
        headers: getAuthHeader(),
      });
      setTransactions(data.transactions);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          setError(error.response?.data.error);
        } else {
          setError("Ocorreu um erro. Tente novamente mais tarde");
        }
      } else {
        setError("Ocorreu um erro. Tente novamente mais tarde");
      }
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <Header />
      <S.Container>
        <S.CardsContainer>
          <CardMoney label="Saldo em dinheiro" value={1400} type="success" />
          <CardMoney label="Total em receitas" value={2300} type="success" />
          <CardMoney label="Total em despesas" value={900} type="danger" />
        </S.CardsContainer>
        {!!error && <Toast message={error} />}
        <S.TransactionsHeader>
          <Text size="H2" weight="REGULAR" color="GREEN_DARK">
            Suas transações
          </Text>
          <S.ButtonContainer>
            <Button text="Adicionar lançamento" onClick={goAddTransaction} />
          </S.ButtonContainer>
        </S.TransactionsHeader>
        <S.TransactionsContainer>
          {transactions?.map((item) => (
            <TransactionItem
              date={item.date}
              description={item.description}
              type={item.transactionType}
              value={item.value}
              id={item._id}
            />
          ))}
        </S.TransactionsContainer>
      </S.Container>
    </div>
  );
}
