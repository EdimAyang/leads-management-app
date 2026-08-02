import styled, { keyframes } from "styled-components";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function LoadingScreen({
  title = "Virgas CRM",
  subtitle = "Loading workspace...",
}: Props) {
  return (
    <Container>
      <Spinner />

      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}

const spin = keyframes`
from{
    transform:rotate(0deg);
}

to{
    transform:rotate(360deg);
}
`;

export const Container = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 20px;

  background: ${({ theme }) => theme.colors.background};

  z-index: 9999;
`;

export const Spinner = styled.div`
  width: 52px;
  height: 52px;

  border-radius: 50%;

  border: 4px solid ${({ theme }) => theme.colors.border};

  border-top-color: ${({ theme }) => theme.colors.primary};

  animation: ${spin} 0.8s linear infinite;
`;

export const Title = styled.h2`
  margin: 0;

  font-size: 22px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.secondary};

  font-size: 15px;
`;
