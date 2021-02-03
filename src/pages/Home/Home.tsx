import { Button, Layout } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import React, { useState } from 'react';
import { DataInput } from '../../components/DataInput/DataInput';
import { DataOutput } from '../../components/DataOutput/DataOutput';

const { Header, Content, Footer } = Layout;

export enum AvailablePages {
  INPUT_PAGE = 'INPUT_PAGE',
  OUTPUT_PAGE = 'OUTPUT_PAGE',
}

export const Home = () => {
  const [selectedPage, setSelectedPage] = useState<AvailablePages>(
    AvailablePages.INPUT_PAGE
  );

  const handleNavigateToInputPage = () => {
    setSelectedPage(AvailablePages.INPUT_PAGE);
  };

  const handleNavigateToOutputPage = () => {
    setSelectedPage(AvailablePages.OUTPUT_PAGE);
  };

  return (
    <Layout>
      <Header>
        <ButtonGroup style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleNavigateToInputPage}>Input</Button>
          <Button onClick={handleNavigateToOutputPage}>Output</Button>
        </ButtonGroup>
      </Header>
      <Content>
        {selectedPage === AvailablePages.INPUT_PAGE && (
          <DataInput setSelectedPage={setSelectedPage} />
        )}
        {selectedPage === AvailablePages.OUTPUT_PAGE && <DataOutput />}
      </Content>
    </Layout>
  );
};
