import type { LucideIcon } from "lucide-react";
import styled from "styled-components";

type Props = {
  title: string;
  value: number;
  icon: LucideIcon;
  color?: string;
  subtitle?:string;
  loading?:string;
};



export default function DashboardCard({ title, value, icon: Icon }: Props) {
  return (
    <Card>
      <Top>
        <Title>{title}</Title>

        <IconWrapper>
          <Icon size={22} />
        </IconWrapper>
      </Top>

      <Value>{value.toLocaleString()}</Value>
    </Card>
  );
}

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 14px;

  padding: 24px;

  transition: all 0.25s ease;

  display: flex;

  flex-direction: column;

  gap: 18px;

  &:hover {
    transform: translateY(-4px);

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
`;

export const Top = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 50px;

  height: 50px;

  border-radius: 12px;

  background: ${({ theme }) => theme.colors.primary}15;

  display: flex;

  justify-content: center;

  align-items: center;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.textLight};

  font-size: 15px;

  font-weight: 500;
`;

export const Value = styled.h2`
  font-size: 34px;

  font-weight: 700;
`;
