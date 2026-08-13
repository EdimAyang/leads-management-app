import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useLayoutStore } from "@/store/layout.store";
import ThemeToggle from "../ui/ThemeToggle";
import InstallButton from "../installButton";

const titles: Record<string, string> = {
  "/": "Dashboard",
  "/leads": "Leads",
};

const Header = () => {
  const location = useLocation();

  const mobileOpen = useLayoutStore((state) => state.mobileOpen);

  console.log(mobileOpen);

  const title = titles[location.pathname] ?? "Virgas Leads";

  return (
    <HeaderContainer>
      <Left>
        {/* <MenuButton onClick={()=>toggleMobileSidebar()}>
          <Menu size={22} />
        </MenuButton> */}

        <Title>{title}</Title>
      </Left>

      <Right>
        <InstallButton />
        <ThemeToggle />
        <DateText>
          {new Date().toLocaleDateString(undefined, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </DateText>
      </Right>
    </HeaderContainer>
  );
};

export default Header;

export const HeaderContainer = styled.header`
  height: 70px;

  background: ${({ theme }) => theme.colors.surface};

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 0 24px;

  position: sticky;

  top: 0;

  z-index: 20;
`;

export const Left = styled.div`
  display: flex;

  align-items: center;

  gap: 16px;
`;

export const Right = styled.div`
  display: flex;

  align-items: center;

  gap: 12px;
`;

export const Title = styled.h2`
  font-size: 22px;

  font-weight: 600;
`;

export const MenuButton = styled.button`
  width: 42px;

  height: 42px;

  border: none;

  border-radius: 10px;

  background: transparent;

  display: none;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #eef4ff;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const DateText = styled.span`
  color: ${({ theme }) => theme.colors.textLight};

  font-size: 14px;

  @media (max-width: 768px) {
    display: none;
  }
`;
