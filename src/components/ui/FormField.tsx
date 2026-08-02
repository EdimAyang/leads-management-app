import styled from "styled-components";
import { ReactNode } from "react";
import { AlertCircle } from "lucide-react";



type FormFieldProps = {
  label: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  children: ReactNode;
};

export default function FormField({
  label,
  required = false,
  helperText,
  error,
  children,
}: FormFieldProps) {
  return (
    <Container>
      <LabelRow>
        <Label>{label}</Label>

        {required && <Required>*</Required>}
      </LabelRow>

      {children}

      {error ? (
        <ErrorText>
          <AlertCircle size={14} />
          {error}
        </ErrorText>
      ) : (
        helperText && <HelperText>{helperText}</HelperText>
      )}
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 14px;
`;

export const HelperText = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ErrorText = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.danger};

  display: flex;
  align-items: center;
  gap: 6px;
`;