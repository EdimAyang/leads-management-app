import {
  Handshake,
  MessageSquare,
  Users,
  UserPlus,
} from "lucide-react";
import DashboardCard from "@/components/dashboradCard/index";
import { useDashboard } from "@/hooks/useDashboard";
import styled from "styled-components";

export default function Dashboard() {
//   const { data, isLoading } = useDashboard();

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (!data) {
//     return <p>No dashboard data.</p>;
//   }

  return (
    <Container>
      <Section>
        <SectionTitle>Overview</SectionTitle>

        <Grid>
          <DashboardCard
            title="Total Leads"
            value={ 0}
            icon={Users}
          />

          <DashboardCard
            title="New Leads"
            value={0}
            icon={UserPlus}
          />

          <DashboardCard
            title="In Talks"
            value={0}
            icon={MessageSquare}
          />

          <DashboardCard
            title="Closed Deals"
            value={0}
            icon={Handshake}
          />
        </Grid>
      </Section>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  gap: 40px;
`;

export const Section = styled.section`
  display: flex;

  flex-direction: column;

  gap: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 22px;

  font-weight: 600;
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));

  gap: 24px;
`;
