import styled from "styled-components";
import { ReactNode } from "react";

type CardProps = {
  padding?: string;
};

type Props = {
  children: ReactNode;

  title?: string;

  description?: string;

  icon?: ReactNode;

  actions?: ReactNode;

  footer?: ReactNode;

  padding?: string;
};

export default function Card({
  children,
  title,
  description,
  icon,
  actions,
  footer,
  padding,
}: Props) {
  return (
    <Container padding={padding}>
      {(title || actions) && (
        <Header>
          <HeaderLeft>
            {icon && <IconWrapper>{icon}</IconWrapper>}

            <HeaderText>
              {title && <Title>{title}</Title>}

              {description && <Description>{description}</Description>}
            </HeaderText>
          </HeaderLeft>

          {actions}
        </Header>
      )}

      <Body>{children}</Body>

      {footer && <Footer>{footer}</Footer>}
    </Container>
  );
}

export const Container = styled.div<CardProps>`
  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 20px;

  padding: ${({ padding }) => padding ?? "24px"};

  box-shadow: ${({ theme }) =>
    theme.shadows?.sm ?? "0 2px 8px rgba(15, 23, 42, 0.05)"};

  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;

  width: 100%;
`;

export const Header = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 16px;

  margin-bottom: 20px;
`;

export const HeaderLeft = styled.div`
  display: flex;

  align-items: center;

  gap: 12px;
`;

export const IconWrapper = styled.div`
  width: 42px;

  height: 42px;

  border-radius: 12px;

  background: ${({ theme }) => theme.colors.background};

  display: flex;

  align-items: center;

  justify-content: center;

  color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderText = styled.div`
  display: flex;

  flex-direction: column;

  gap: 4px;
`;

export const Title = styled.h3`
  font-size: 18px;

  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};

  margin: 0;
`;

export const Description = styled.p`
  margin: 0;

  font-size: 14px;

  color: ${({ theme }) => theme.colors.secondary};
`;

export const Body = styled.div`
  display: flex;

  flex-direction: column;

  gap: 20px;
`;

export const Footer = styled.div`
  display: flex;

  justify-content: flex-end;

  gap: 12px;

  margin-top: 24px;

  padding-top: 20px;

  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    > * {
      width: 100%;
    }
  }
`;
