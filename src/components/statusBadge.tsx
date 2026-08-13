import { Priority, Status } from "@/types/leads.types";
import styled, { css } from "styled-components";
import {
  Hotel,
  UtensilsCrossed,
  Croissant,
} from "lucide-react";
import { PRIORITY_META } from "@/lib/constants/priority";

type StatusProps = {
  status: Status;
};

type PriorityProps = {
  priority: Priority;
};

export default function StatusBadge({ status }: StatusProps) {
  return <Badge status={status}>{status.replaceAll("_", " ")}</Badge>;
}


export const StyledPriorityBadge = styled.span<{
  color: string;
  background: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 6px 12px;

  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;

  color: ${({ color }) => color};
  background: ${({ background }) => background};
`;

export function PriorityBadge({ priority }: PriorityProps) {
  if (!priority) return null;

  const meta = PRIORITY_META[priority];

  return (
    <PriorityTooltip>
      <StyledPriorityBadge color={meta.color} background={meta.background}>
        {meta.label}
      </StyledPriorityBadge>

      <TooltipContent>
        <strong>{meta.label} Priority</strong>
        <span>{meta.description}</span>
      </TooltipContent>
    </PriorityTooltip>
  );
}

export const PriorityTooltip = styled.div`
  position: relative;
  display: inline-flex;

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
  }
`;

export const TooltipContent = styled.div`
  position: absolute;

  bottom: calc(100% + 8px);
  left: 50%;

  transform: translate(-50%, 4px);

  width: max-content;
  max-width: 220px;

  padding: 10px 12px;

  display: flex;
  flex-direction: column;
  gap: 3px;

  border-radius: 8px;

  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.surface};

  font-size: 12px;

  box-shadow: ${({ theme }) => theme.shadows.md};

  opacity: 0;
  visibility: hidden;

  transition:
    opacity 0.15s ease,
    transform 0.15s ease,
    visibility 0.15s ease;

  z-index: 1000;

  strong {
    font-size: 12px;
    font-weight: 600;
  }

  span {
    font-size: 11px;
    opacity: 0.85;
  }

  /* Tooltip arrow */
  &::after {
    content: "";

    position: absolute;

    top: 100%;
    left: 50%;

    transform: translateX(-50%);

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${({ theme }) => theme.colors.text};
  }
`;

const variants = {
  NEW: css`
    background: #eff6ff;
    color: #2563eb;
  `,
  VERIFIED: css`
    background: #ecfdf5;
    color: #16a34a;
  `,
  UNVERIFIED: css`
    background: #f3f4f6;
    color: #6b7280;
  `,
  IN_TALKS: css`
    background: #fff7ed;
    color: #ea580c;
  `,
  FOLLOW_UP: css`
    background: #fefce8;
    color: #ca8a04;
  `,
  CLOSED_DEAL: css`
    background: #faf5ff;
    color: #9333ea;
  `,
  NOT_INTERESTED: css`
    background: #fef2f2;
    color: #dc2626;
  `,
  INACTIVE: css`
    background: #f3f4f6;
    color: #374151;
  `,
};

export const Badge = styled.span<{ status: keyof typeof variants }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 6px 12px;

  border-radius: 999px;

  font-size: 12px;

  font-weight: 600;

  text-transform: capitalize;

  ${({ status }) => variants[status]}
`;

type categoryProps = {
  category: "HOTEL" | "RESTAURANT" | "BAKERY";
};

export function CategoryBadge({ category }: categoryProps) {
  const config = {
    HOTEL: {
      icon: Hotel,
      label: "Hotel",
    },
    RESTAURANT: {
      icon: UtensilsCrossed,
      label: "Restaurant",
    },
    BAKERY: {
      icon: Croissant,
      label: "Bakery",
    },
  };

  const { icon: Icon, label } = config[category];

  return (
    <StyledCategoryBadge>
      <Icon size={14} />
      {label}
    </StyledCategoryBadge>
  );
}

export const StyledCategoryBadge = styled.div`
  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 6px 12px;

  border-radius: 999px;

  background: ${({ theme }) => theme.colors.primary}15;

  color: ${({ theme }) => theme.colors.primary};

  font-weight: 600;

  font-size: 13px;
`;
