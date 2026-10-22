import styled, { keyframes } from "styled-components";
import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
};


export default function Modal({
  open,
  title,
  children,
  footer,
  onClose,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{title}</Title>

          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </Header>

        <Body>{children}</Body>

        {footer && <Footer>{footer}</Footer>}
      </Container>
    </Overlay>
  );
}

const fade = keyframes`
from{
    opacity:0;
}

to{
    opacity:1;
}
`;

const slide = keyframes`
from{
    opacity:0;
    transform:translateY(24px) scale(.98);
}

to{
    opacity:1;
    transform:translateY(0) scale(1);
}
`;

export const Overlay = styled.div`
  position: fixed;

  inset: 0;

  background: rgba(15, 23, 42, 0.45);

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 24px;

  z-index: 5000;

  animation: ${fade} 0.2s ease;
`;

export const Container = styled.div`
  width: 100%;

  max-width: 720px;

  max-height: 90vh;

  overflow: hidden;

  display: flex;

  flex-direction: column;

  background: ${({ theme }) => theme.colors.surface};

  border-radius: 20px;

  animation: ${slide} 0.25s ease;

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);

  @media (max-width: 768px) {
    max-width: 100%;

    height: 100%;

    max-height: 90vh;

    border-radius: 20px 20px 0 0;

    align-self: flex-end;
  }
`;

export const Header = styled.div`
  padding: 24px;

  display: flex;

  justify-content: space-between;

  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.h2`
  margin: 0;

  font-size: 22px;

  font-weight: 700;
`;

export const CloseButton = styled.button`
  width: 40px;

  height: 40px;

  border: none;

  border-radius: 10px;

  background: transparent;

  cursor: pointer;

  display: flex;

  align-items: center;

  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const Body = styled.div`
  flex: 1;

  overflow-y: auto;

  padding: 24px;
`;

export const Footer = styled.div`
  display: flex;

  justify-content: flex-end;

  gap: 12px;

  padding: 24px;

  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    > * {
      width: 100%;
    }
  }
`;

type ModalFooterProps = {
  children: React.ReactNode;
};

export function ModalFooter({ children }: ModalFooterProps) {
  return <Footer>{children}</Footer>;
}
