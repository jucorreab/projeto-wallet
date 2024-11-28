import React, { useState } from "react";
import * as S from "./style";

import { Text } from "../text";

type InputProps = {
  onChange: (value: string) => void;
  placeholder: string;
  type?: "default" | "user_password" | "user_email";
  hideLeftIcon?: boolean;
  label?: string;
};

export function Input({
  onChange,
  type = "default",
  hideLeftIcon,
  placeholder,
  label,
}: InputProps) {
  const [active, setIsActive] = useState(false);
  const [isShowingPassword, setIsShowingPassword] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  const handleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsShowingPassword(!isShowingPassword);
  };

  const getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const renderUserEmailInput = () => {
    return (
      <>
        {label && (
          <S.Label>
            <Text size="P" weight="REGULAR" color="BLACK">
              {label}
            </Text>
          </S.Label>
        )}

        <S.InputContainer
          active={active}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {!hideLeftIcon && <S.Icon className="ph ph-user" />}
          <S.Input type="text" placeholder={placeholder} onChange={getValue} />
        </S.InputContainer>
      </>
    );
  };

  const renderUserPasswordInput = () => {
    return (
      <>
        {label && (
          <S.Label>
            <Text size="P" weight="REGULAR" color="BLACK">
              {label}
            </Text>
          </S.Label>
        )}

        <S.InputContainer
          active={active}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {!hideLeftIcon && <S.Icon className="ph ph-lock-key" />}
          <S.Input
            type={isShowingPassword ? "text" : ""}
            placeholder={placeholder}
            onChange={getValue}
          />
          <S.ShowPassowrdButton
            className={
              isShowingPassword ? "ph-fill ph-eye" : "ph-fill ph-eye-slash"
            }
            onClick={handleShowPassword}
          />
        </S.InputContainer>
      </>
    );
  };

  const renderDefaultInput = () => {
    return (
      <>
        {label && (
          <S.Label>
            <Text size="P" weight="REGULAR" color="BLACK">
              {label}
            </Text>
          </S.Label>
        )}

        <S.InputContainer
          active={active}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <S.Input type="text" placeholder={placeholder} onChange={getValue} />
        </S.InputContainer>
      </>
    );
  };

  return type == "default"
    ? renderDefaultInput()
    : type == "user_email"
    ? renderUserEmailInput()
    : renderUserPasswordInput();
}
