import styled from "styled-components";

type InputWrapperProps = {
  disabled?: boolean;
};

import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ leftIcon, rightIcon, disabled, ...props }, ref) => {
    return (
      <InputWrapper disabled={disabled}>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}

        <StyledInput ref={ref} disabled={disabled} {...props} />

        {rightIcon && <IconContainer>{rightIcon}</IconContainer>}
      </InputWrapper>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;

export const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;

  height: 52px;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 16px;

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 12px;

  transition: all 0.2s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};

    box-shadow: 0 0 0 4px rgba(250, 84, 156, 0.12);
  }

  ${({ disabled }) =>
    disabled &&
    `
      opacity:.6;
      cursor:not-allowed;
    `}
`;

export const StyledInput = styled.input`
  flex: 1;

  width: 100%;

  border: none;

  outline: none;

  background: transparent;

  color: ${({ theme }) => theme.colors.text};

  font-size: 15px;

  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  align-items: center;

  justify-content: center;

  color: ${({ theme }) => theme.colors.secondary};

  flex-shrink: 0;
`;
