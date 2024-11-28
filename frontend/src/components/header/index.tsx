import * as S from "./style";
import { Text } from "../text";
import { useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <S.Header>
      <Text size="P" weight="BOLD" color="WHITE">
        Olá fulano
      </Text>
      <S.LogoutButton onClick={logout}>
        <Text size="P" weight="BOLD" color="WHITE">
          Sair
        </Text>
        <i className="ph-bold ph-sign-out"></i>
      </S.LogoutButton>
    </S.Header>
  );
}
