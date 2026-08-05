import styled from "styled-components";
import { Eye, Pencil, MoreVertical, RefreshCw } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

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
  onUpdateStatus,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const toggleMenu = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();

      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.right + window.scrollX - 180,
      });
    }

    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        containerRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();

          toggleMenu();
        }}
        ref={buttonRef}
      >
        <MoreVertical size={18} />
      </IconButton>

      {open &&
        createPortal(
          <Menu
            ref={menuRef}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
            }}
          >
            <MenuItem
              onClick={(e) => {
                e.stopPropagation();
                onView?.();
                setOpen(false);
              }}
            >
              <Eye size={18} />
              View
            </MenuItem>

            <MenuItem
              onClick={(e) => {
                e.stopPropagation();
                onEdit?.();
                setOpen(false);
              }}
            >
              <Pencil size={18} />
              Edit
            </MenuItem>

            <MenuItem onClick={onUpdateStatus}>
              <RefreshCw size={18} />
              Update Status
            </MenuItem>

            {/* <MenuItem danger onClick={onDelete}>
            <Trash2 size={18} />
            Delete
          </MenuItem> */}
          </Menu>,
          document.body!,
        )}
    </Container>
  );
};

export default LeadActionsMenu;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: ${({ theme }) => theme.colors.text};
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
