import { Text } from "../text";
import * as S from "./style";

type Props = {
  description: string;
  date: string;
  value: string;
} & S.ItemProps;

export function TransactionItem({ date, description, value, type }: Props) {
  return (
    <S.Item>
      <S.Icon
        className={type == "IN" ? "ph ph-arrow-up" : "ph ph-arrow-down"}
        type={type}
      />
      <S.TextContainer>
        <Text size="H5" weight="REGULAR" color="BLACK">
          {description}
        </Text>
      </S.TextContainer>
      <S.TextContainer>
        <Text size="H5" weight="REGULAR" color="BLACK">
          {value}
        </Text>
      </S.TextContainer>
      <S.TextContainer>
        <Text size="H5" weight="REGULAR" color="BLACK">
          {date}
        </Text>
      </S.TextContainer>
      <S.TransactionDetailButton>
        <Text size="H5" weight="REGULAR" color="BLUE_DARK">
          Detalhar
        </Text>
      </S.TransactionDetailButton>
    </S.Item>
  );
}
