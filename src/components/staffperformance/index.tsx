import styled from "styled-components";




interface Props{
    staffPerformance: {
      staffName: string;
      totalLeads: number;
    }[];
}



const StaffPerformance = ({staffPerformance}:Props) => {

  const max = Math.max(...staffPerformance.map((s) => s.totalLeads), 1);

  return (
    <Container>
      <Header>
        <Title>Staff Performance</Title>

        <Subtitle>Lead assignments by staff</Subtitle>
      </Header>

      <List>
        {staffPerformance.map((staff) => (
          <Row key={staff.staffName}>
            <Top>
              <Left>
                <Avatar>{staff.staffName.charAt(0)}</Avatar>

                <span>{staff.staffName}</span>
              </Left>

              <strong>{staff.totalLeads}</strong>
            </Top>

            <Progress>
              <Fill width={(staff.totalLeads / max) * 100} />
            </Progress>
          </Row>
        ))}
      </List>
    </Container>
  );
};

export default StaffPerformance


export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.secondary};

  margin-top: 6px;
`;

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.surface};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 18px;

  padding: 24px;
`;

export const Title = styled.h3`
  font-size: 20px;

  font-weight: 700;
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const List = styled.div`
  display: flex;

  flex-direction: column;

  gap: 20px;
`;
export const Row = styled.div`
  display: flex;

  flex-direction: column;

  gap: 10px;
`;

export const Top = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;
`;

export const Left = styled.div`
  display: flex;

  align-items: center;

  gap: 12px;
`;

export const Avatar = styled.div`
  width: 42px;

  height: 42px;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  display: flex;

  align-items: center;

  justify-content: center;

  font-weight: 700;
`;

export const Progress = styled.div`
  height: 8px;

  background: ${({ theme }) => theme.colors.background};

  border-radius: 999px;

  overflow: hidden;
`;

type FillProps = {
  width: number;
};

export const Fill = styled.div<FillProps>`
  width: ${({ width }) => width}%;

  height: 100%;

  background: ${({ theme }) => theme.colors.primary};

  border-radius: inherit;

  transition: width 0.35s ease;
`;
