import { Priority } from "@/types/leads.types";
import { PRIORITY_META } from "@/lib/constants/priority";
import styled from "styled-components";
import { Check } from "lucide-react";

type Props = {
  priority: Priority;
  selected: boolean;
  onClick: () => void;
};

export const PriorityCard = ({ priority, selected, onClick }: Props) => {
  const meta = PRIORITY_META[priority];

  return (
    <Card selected={selected} onClick={onClick} type="button">
      <Left>
        <Dot color={meta.color} />

        <Content>
          <Title>{meta.label}</Title>

          {selected && <Current>Current</Current>}
        </Content>
      </Left>

      {selected && <Check size={18} />}
    </Card>
  );
};

const Card = styled.button<{ selected: boolean }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 16px;

  border-radius: 14px;

  cursor: pointer;

  transition: all 0.2s ease;

  border: 2px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.primary : theme.colors.border};

  background: ${({ theme }) => theme.colors.surface};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Dot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;

  border-radius: 50%;

  background: ${({ color }) => color};

  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.text};
`;

const Current = styled.span`
  margin-top: 2px;

  font-size: 12px;

  color: ${({ theme }) => theme.colors.secondary};
`;
