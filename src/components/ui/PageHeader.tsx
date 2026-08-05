import styled from "styled-components";
import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

type Props = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  showBack?: boolean;
  backLabel?: string;
  onBack?: () => void;
  rightSlot?: React.ReactNode;
};

export type ButtonSize = "sm" | "md" | "lg";

export default function PageHeader({
  title,
  subtitle,
  showBack = true,
  rightSlot,
}: Props) {
  const navigate = useNavigate();

  return (
    <Container>
      <Left>
        {showBack && (
          <Button
            variant="ghost"
            size="sm"
            leftIcon={<ArrowLeft size={18} />}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        )}

        <div>
          <Title>{title}</Title>

          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </div>
      </Left>

      {rightSlot}
    </Container>
  );
}

export const Container = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: flex-start;

  gap: 24px;

  margin-bottom: 8px;

  @media (max-width: 768px) {
    flex-direction: column;

    align-items: stretch;
  }
`;

export const Left = styled.div`
  display: flex;

  flex-direction: column;

  gap: 6px;
`;

export const Title = styled.h1`
  margin: 0;

  font-size: 30px;

  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  margin: 0;

  font-size: 15px;

  color: ${({ theme }) => theme.colors.secondary};

  line-height: 1.6;
`;

export const Actions = styled.div`
  display: flex;

  align-items: center;

  gap: 12px;

  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;

    > * {
      flex: 1;
    }
  }
`;
