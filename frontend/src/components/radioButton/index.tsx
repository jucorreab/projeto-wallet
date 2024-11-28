import { useState } from "react";
import * as S from "./style";

export function RadioButton() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <S.RadioGroup>
      {["Receita", "Despesa"].map((option) => (
        <S.RadioContainer
          key={option}
          selected={selectedValue === option}
          onClick={() => handleChange(option)}
        >
          <S.HiddenRadio
            name="radio"
            value={option}
            checked={selectedValue === option}
            onChange={() => handleChange(option)}
          />
          <S.CustomRadio selected={selectedValue === option} />
          <S.Label>{option}</S.Label>
        </S.RadioContainer>
      ))}
    </S.RadioGroup>
  );
}
