import { Table } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { AppState } from '../../store';
import { ParsedCSV } from '../../store/reducers/form';

type TableData = {
  key: number;
  product: string;
  price: string;
};

const columns = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    // TODO - verify sorting and filtering
    sorter: (a: TableData, b: TableData) =>
      parseFloat(a.price) - parseFloat(b.price),
  },
];

const convertToTableData = (input: ParsedCSV): TableData[] => {
  return input.map((row, i) => ({
    key: i,
    product: row.data[0],
    price: row.data[1],
  }));
};

const Container = styled.div`
  margin-top: 1rem;
`;

export const ProductTable = () => {
  const data = useSelector((state: AppState) => state.form.data);

  return (
    <Container>
      <Table
        dataSource={convertToTableData(data)}
        showHeader={false}
        columns={columns}
      />
    </Container>
  );
};
