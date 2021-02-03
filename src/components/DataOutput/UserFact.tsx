import styled from 'styled-components/macro';
import { Typography } from 'antd';

const { Text } = Typography;

const Container = styled.div`
  margin: 1rem 1rem 0 1rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`;

interface UserFactProps {
  label: string;
  value: string;
}

export const UserFact: React.FC<UserFactProps> = ({ label, value }) => {
  return (
    <Container>
      <Text strong>{label}</Text>
      <Text>{value}</Text>
    </Container>
  );
};
