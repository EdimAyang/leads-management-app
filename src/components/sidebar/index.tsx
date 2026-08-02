import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import { useLayoutStore } from "@/store/sidebar.store";
import { sidebarItems } from "./data";

type Props = {
  title: string;
  path: string;
  icon: LucideIcon;
  collapsed: boolean;
};

function SidebarItem({ title, path, icon: Icon, collapsed }: Props) {
  const closeMobileSidebar = useLayoutStore((state) => state.closeSidebar);
  return (
    <StyledLink
      to={path}
      end={path === "/"}
      collapsed={collapsed}
      onClick={closeMobileSidebar}
    >
      <Icon size={20} />

      <span>{title}</span>
    </StyledLink>
  );
}

export const Sidebar = () => {
  const mobileOpen = useLayoutStore((state) => state.mobileOpen);

  const closeMobileSidebar = useLayoutStore((state) => state.closeSidebar);
  const collapsed = useLayoutStore((state) => state.collapsed);

  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar);

  return (
    <>
      <Overlay open={mobileOpen} onClick={closeMobileSidebar} />

      <SidebarContainer collapsed={collapsed} mobileOpen={mobileOpen}>
        <Logo collapsed={collapsed}>
          <LogoText collapsed={collapsed}>Virgas</LogoText>

          <CollapseButton onClick={toggleSidebar}>
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </CollapseButton>
        </Logo>

        <Navigation>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.path} {...item} collapsed={collapsed} />
          ))}
        </Navigation>

        {!collapsed && (
          <Footer>
            Virgas Leads
            <br />
            Version 1.0.0
          </Footer>
        )}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

type SidebarProps = {
  collapsed: boolean;
  mobileOpen?: boolean;
};

export const Overlay = styled.div<{ open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;

    position: fixed;

    inset: 0;

    background: rgba(0, 0, 0, 0.45);

    opacity: ${({ open }) => (open ? 1 : 0)};

    pointer-events: ${({ open }) => (open ? "all" : "none")};

    transition: 0.25s;

    z-index: 999;
  }
`;

export const SidebarContainer = styled.aside<SidebarProps>`
  position: fixed;

  top: 0;
  left: 0;

  width: ${({ collapsed, theme }) =>
    collapsed ? theme.layout.sidebar.collapsed : theme.layout.sidebar.expanded};

  height: 100vh;

  background: ${({ theme }) => theme.colors.surface};

  border-right: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  flex-direction: column;

  transition: all 0.25s ease;

  z-index: 1000;

   @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div<SidebarProps>`
  height: 70px;

  display: flex;

  align-items: center;

  justify-content: ${({ collapsed }) =>
    collapsed ? "center" : "space-between"};

  padding: 0 20px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const LogoText = styled.h2<SidebarProps>`
  font-size: 20px;

  white-space: nowrap;

  ${({ collapsed }) =>
    collapsed &&
    css`
      display: none;
    `}
`;

export const CollapseButton = styled.button`
  border: none;

  background: none;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;
`;

export const Navigation = styled.nav`
  flex: 1;

  padding: 16px 12px;

  display: flex;

  flex-direction: column;

  gap: 6px;
`;

export const StyledLink = styled(NavLink)<SidebarProps>`
  height: 48px;

  display: flex;

  align-items: center;

  gap: 14px;

  padding: 0 16px;

  border-radius: 10px;

  color: ${({ theme }) => theme.colors.textLight};

  transition: 0.2s;

  text-decoration: none;

  svg {
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;

    ${({ collapsed }) =>
      collapsed &&
      css`
        display: none;
      `}
  }

  &:hover {
    background: #eef4ff;

    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary};

    color: white;
  }
`;

export const Footer = styled.div`
  padding: 16px;

  border-top: 1px solid ${({ theme }) => theme.colors.border};

  font-size: 13px;

  color: ${({ theme }) => theme.colors.textLight};

  text-align: center;
`;
