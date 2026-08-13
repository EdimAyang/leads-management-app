import styled from "styled-components";
import { ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;
  content: string;
};

export default function Tooltip({ children, content }: TooltipProps) {
  return <Wrapper data-tooltip={content}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  max-width: 100%;

  &:hover::after {
    content: attr(data-tooltip);

    position: absolute;
    z-index: 1000;

    bottom: calc(100% + 8px);
    left: 50%;

    transform: translateX(-50%);

    padding: 7px 10px;

    border-radius: 7px;

    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.surface};

    font-size: 12px;
    font-weight: 500;

    white-space: nowrap;

    pointer-events: none;

    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`;
