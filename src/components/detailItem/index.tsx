import styled from "styled-components";
import { ReactNode } from "react";



type DetailItemProps = {
  label: string;
  value?: ReactNode;
  icon?:ReactNode;
};

export default function DetailItem({
  label,
  value,
}: DetailItemProps) {
  return (
    <Container>
      <Label>{label}</Label>

      <Value>
        {value ?? "—"}
      </Value>
    </Container>
  );
}



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  min-width: 0;
`;

export const Label = styled.span`
  font-size: 13px;

  font-weight: 600;

  color: ${({ theme }) => theme.colors.secondary};

  text-transform: uppercase;

  letter-spacing: .04em;
`;

export const Value = styled.div`
  font-size: 15px;

  font-weight: 500;

  color: ${({ theme }) => theme.colors.text};

  word-break: break-word;

  line-height: 1.6;
`;

export const LabelRow = styled.div`
  display: flex;

  align-items: center;

  gap: 6px;
`;