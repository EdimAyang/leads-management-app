import styled from "styled-components";

type WrapperProps = {
  disabled?: boolean;
};

import { forwardRef, TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  maxLength?: number;
  showCount?: boolean;
};

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ disabled, maxLength, showCount = false, value, ...props }, ref) => {
    const count = value?.toString().length ?? 0;

    return (
      <Wrapper disabled={disabled}>
        <StyledTextArea
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          {...props}
        />

        {showCount && maxLength && (
          <Footer>
            {count}/{maxLength}
          </Footer>
        )}
      </Wrapper>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 12px;

  background: ${({ theme }) => theme.colors.surface};

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

export const StyledTextArea = styled.textarea`
  width: 100%;

  min-height: 140px;

  padding: 16px;

  border: none;

  outline: none;

  resize: vertical;

  background: transparent;

  font-family: inherit;

  font-size: 15px;

  line-height: 1.6;

  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Footer = styled.div`
  display: flex;

  justify-content: flex-end;

  padding: 0 16px 12px;

  font-size: 12px;

  color: ${({ theme }) => theme.colors.secondary};
`;
