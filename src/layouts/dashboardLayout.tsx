import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useLayoutStore } from "@/store/sidebar.store";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header/DashboardHeader";
import BottomNavigation from "@/components/BottomNav";

export default function DashboardLayout() {
  const collapsed = useLayoutStore((state) => state.collapsed);

  return (
    <LayoutWrapper>
      <Sidebar />

      <Content collapsed={collapsed}>
        <Header />

        <Main>
          <Outlet />
        </Main>

        <BottomNavigation />
      </Content>
    </LayoutWrapper>
  );
}

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.background};
`;

type ContentProps = {
  collapsed: boolean;
};

export const Content = styled.div<ContentProps>`
  flex: 1;

  margin-left: ${({ collapsed }) => (collapsed ? "80px" : "260px")};

  transition: margin-left 0.25s ease;

  display: flex;
  flex-direction: column;
  min-width: 0;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  min-width: 0;
   @media (max-width: 768px) {
    padding-bottom: 120px;
  }
`;
