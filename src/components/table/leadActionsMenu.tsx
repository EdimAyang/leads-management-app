import styled from "styled-components";
import { Eye, Pencil, MoreVertical } from "lucide-react";

import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { Lead } from "@/types/leads.types";

type Props = {
  lead: Lead;
  onView: () => void;
  onEdit: () => void;
  onDelete?: () => void;
  onUpdateStatus?: () => void;
};

const LeadActionsMenu = ({
  // lead,
  onView,
  onEdit,
  // onDelete,
  // onUpdateStatus,
}: Props) => {
  // const navigate = useNavigate();

  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <Container ref={ref}>
      <IconButton onClick={() => setOpen((prev) => !prev)}>
        <MoreVertical size={18} />
      </IconButton>

      {open && (
        <Menu>
          <MenuItem onClick={onView}>
            <Eye size={18} />
            View
          </MenuItem>

          <MenuItem onClick={onEdit}>
            <Pencil size={18} />
            Edit
          </MenuItem>
          {/* 
          <MenuItem onClick={onUpdateStatus}>
            <RefreshCw size={18} />
            Update Status
          </MenuItem>

          <MenuItem danger onClick={onDelete}>
            <Trash2 size={18} />
            Delete
          </MenuItem> */}
        </Menu>
      )}
    </Container>
  );
};

export default LeadActionsMenu;

export const Container = styled.div`
  position: relative;
`;

export const IconButton = styled.button`
  width: 36px;
  height: 36px;

  border: none;
  border-radius: 10px;

  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const Menu = styled.div`
  position: absolute;

  top: calc(100% + 8px);
  right: 0;

  width: 200px;

  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 12px;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

  overflow: hidden;

  z-index: 100;
`;

export const MenuItem = styled.button<{ danger?: boolean }>`
  width: 100%;

  padding: 14px 16px;

  display: flex;
  align-items: center;
  gap: 12px;

  border: none;

  background: transparent;

  color: ${({ danger, theme }) =>
    danger ? theme.colors.danger : theme.colors.text};

  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`;
