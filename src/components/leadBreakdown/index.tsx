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
import { useSearchParams } from "react-router-dom";

const LeadBreakdown = () => {
  const [params, setParams] = useSearchParams();
  return (
    <section>
      <Title>Lead Breakdown</Title>

      <Grid>
        <DashboardCard title="Verified" value={0} icon={BadgeCheck} />

        <DashboardCard title="Follow Up" value={0} icon={PhoneCall} />

        <DashboardCard title="Inactive" value={0} icon={Ban} />

        <DashboardCard title="Hotels" value={0} icon={Hotel} />

        <DashboardCard title="Restaurants" value={0} icon={UtensilsCrossed} />

        <DashboardCard title="Bakeries" value={0} icon={Croissant} />
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
