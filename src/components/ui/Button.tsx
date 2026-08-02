import styled, { css } from "styled-components";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "destructive";

type StyledButtonProps = {
  variant: ButtonVariant;
  fullWidth?: boolean;
};



type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export default function Button({
  children,
  variant = "primary",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </StyledButton>
  );
}

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      opacity: 0.92;
      transform: translateY(-1px);
    }
  `,

  secondary: css`
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.background};
    }
  `,

  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  `,

  destructive: css`
    background: ${({ theme }) => theme.colors.danger};
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.danger};

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  height: 48px;

  min-width: 120px;

  padding: 0 20px;

  border-radius: 12px;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s ease;

  ${({ variant }) => variants[variant]}

  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  &:focus-visible {
    outline: none;

    box-shadow: 0 0 0 4px rgba(250, 84, 156, 0.18);
  }

  svg {
    flex-shrink: 0;
  }
`;

export const Spinner = styled.div`
  width: 18px;

  height: 18px;

  border-radius: 50%;

  border: 2px solid rgba(255, 255, 255, 0.35);

  border-top-color: white;

  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
