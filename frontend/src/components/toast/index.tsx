import { Text } from "../text";
import * as S from "./style";

type Props = {
  message: string;
};

export function Toast({ message }: Props) {
  return (
    <S.Toast>
      <Text size="P" weight="BOLD" color="WHITE">
        {message}
      </Text>
    </S.Toast>
  );
}
