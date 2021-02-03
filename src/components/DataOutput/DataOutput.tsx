import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { ProductChart } from './ProductChart';
import { ProductTable } from './ProductTable';
import { UserFact } from './UserFact';

const PageContainer = styled.div`
  padding: 1rem;
  background-color: #fff;
`;

export const DataOutput = () => {
  const { name, email, gender, country, age, city } = useSelector(
    (state: any) => state.form
  );

  return (
    <PageContainer>
      <Row>
        <Col span={12}>
          <UserFact label={'Name'} value={name} />
        </Col>
        <Col span={12}>
          <UserFact label={'E-Mail'} value={email} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <UserFact label={'Gender'} value={gender} />
        </Col>
        <Col span={12}>
          <UserFact label={'Country'} value={country} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <UserFact label={'Age'} value={age} />
        </Col>
        <Col span={12}>
          <UserFact label={'City'} value={city} />
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <ProductTable />
        </Col>
        <Col span={12}>
          <ProductChart />
        </Col>
      </Row>
    </PageContainer>
  );
};
