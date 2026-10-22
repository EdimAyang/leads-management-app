import styled, { css, keyframes } from "styled-components";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "destructive"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type StyledButtonProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
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
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Spinner />
      ) : (
        <Content>
          {leftIcon && <Icon>{leftIcon}</Icon>}

          <span>{children}</span>

          {rightIcon && <Icon>{rightIcon}</Icon>}
        </Content>
      )}
    </StyledButton>
  );
}

const sizes = {
  sm: css`
    height: 36px;
    padding: 0 12px;
    font-size: 14px;
    border-radius: 10px;
  `,

  md: css`
    height: 48px;
    padding: 0 20px;
    font-size: 15px;
    border-radius: 12px;
  `,

  lg: css`
    height: 56px;
    padding: 0 24px;
    font-size: 16px;
    border-radius: 14px;
  `,
};

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      opacity: 0.95;
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
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

  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: none;

    min-width: unset;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.background};
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }

    &:focus-visible {
      box-shadow: none;
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  min-width: ${({ variant }) => (variant === "ghost" ? "auto" : "120px")};

  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};

  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s ease;

  ${({ size }) => sizes[size]}

  ${({ variant }) => variants[variant]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  }
`;

const Content = styled.span`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 8px;
`;

const Icon = styled.span`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`;

const spin = keyframes`
  to{
    transform:rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 18px;

  height: 18px;

  border-radius: 50%;

  border: 2px solid rgba(255, 255, 255, 0.35);

  border-top-color: currentColor;

  animation: ${spin} 0.8s linear infinite;
`;
