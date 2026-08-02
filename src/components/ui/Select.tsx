import styled from "styled-components";

type WrapperProps = {
  disabled?: boolean;
};




import {
  forwardRef,
  ReactNode,
  SelectHTMLAttributes,
} from "react";

import { ChevronDown } from "lucide-react";



type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, disabled, ...props }, ref) => {
    return (
      <SelectWrapper disabled={disabled}>
        <StyledSelect
          ref={ref}
          disabled={disabled}
          {...props}
        >
          {children}
        </StyledSelect>

        <IconWrapper>
          <ChevronDown size={18} />
        </IconWrapper>
      </SelectWrapper>
    );
  },
);

Select.displayName = "Select";

export default Select;

export const SelectWrapper = styled.div<WrapperProps>`
  position: relative;

  width: 100%;

  height: 52px;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 12px;

  transition: all .2s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};

    box-shadow: 0 0 0 4px rgba(250,84,156,.12);
  }

  ${({ disabled }) =>
    disabled &&
    `
      opacity:.6;
      cursor:not-allowed;
    `}
`;

export const StyledSelect = styled.select`
  width: 100%;

  height: 100%;

  padding: 0 44px 0 16px;

  border: none;

  outline: none;

  background: transparent;

  appearance: none;

  font-size: 15px;

  font-family: inherit;

  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;

  option {
    color: ${({ theme }) => theme.colors.text};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;

  right: 16px;

  display: flex;

  align-items: center;

  justify-content: center;

  pointer-events: none;

  color: ${({ theme }) => theme.colors.secondary};
`;