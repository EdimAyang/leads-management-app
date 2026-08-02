import {
  BadgeCheck,
  PhoneCall,
  Ban,
  Hotel,
  UtensilsCrossed,
  Croissant,
} from "lucide-react";
import DashboardCard from "@/components/dashboradCard/index";
import styled from "styled-components";
import { useDashboard } from "@/hooks/useDashboard";

const LeadBreakdown = () => {
  const { data } = useDashboard();

  return (
    <section>
      <Title>Lead Breakdown</Title>

      <Grid>
        <DashboardCard
          title="Verified"
          value={data?.summary.VERIFIED ?? 0}
          icon={BadgeCheck}
        />

        <DashboardCard
          title="Follow Up"
          value={data?.summary.FOLLOW_UP ?? 0}
          icon={PhoneCall}
        />

        <DashboardCard
          title="Inactive"
          value={data?.summary.INACTIVE ?? 0}
          icon={Ban}
        />

        <DashboardCard
          title="Hotels"
          value={data?.categories.HOTEL ?? 0}
          icon={Hotel}
        />

        <DashboardCard
          title="Restaurants"
          value={data?.categories.RESTAURANT ?? 0}
          icon={UtensilsCrossed}
        />

        <DashboardCard
          title="Bakeries"
          value={data?.categories.BAKERY ?? 0}
          icon={Croissant}
        />
      </Grid>
    </section>
  );
};

export default LeadBreakdown;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-size: 1.2rem;

  font-weight: 600;
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 20px;
`;
