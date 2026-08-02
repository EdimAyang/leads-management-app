import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { mobileNavItems } from "./data";

type Props = {
  label: string;
  path: string;
  icon: any;
  primary?: boolean;
};




export default function BottomNavigation() {
  return (
    <Container>
      {mobileNavItems.map((item) => (
        <BottomNavItem
          key={item.path}
          {...item}
        />
      ))}
    </Container>
  );
}

export  function BottomNavItem({
  label,
  path,
  icon: Icon,
  primary,
}: Props) {
  const navigate = useNavigate();

  const location = useLocation();

  const active = location.pathname === path;

  if (primary) {
    return (
      <Fab onClick={() => navigate(path)}>
        <Icon size={26} />
      </Fab>
    );
  }

  return (
    <NavItem active={active} onClick={() => navigate(path)}>
      <Icon size={20} />

      <span>{label}</span>
    </NavItem>
  );
}

export const Container = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;

    position: fixed;

    bottom: 0;
    left: 0;
    right: 0;

    height: 72px;

    background: ${({ theme }) => theme.colors.surface};

    border-top: 1px solid ${({ theme }) => theme.colors.border};

    justify-content: space-around;

    align-items: center;

    z-index: 1000;
  }
`;

export const NavItem = styled.button<{ active?: boolean }>`
  border: none;

  background: transparent;

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 4px;

  cursor: pointer;

  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.secondary};

  font-size: 12px;

  transition: 0.2s;
`;

export const Fab = styled.button`
  width: 58px;

  height: 58px;

  border-radius: 50%;

  border: none;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  margin-top: -28px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
`;
