import { Col, Input, Row } from 'antd';
import { ChangeEvent, Dispatch } from 'react';
import { readString } from 'react-papaparse';
import styled from 'styled-components/macro';
import { ParsedCSV } from '../../store/reducers/form';

const StyledTextArea = styled(Input.TextArea)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

interface CSVManualInputProps {
  setData: Dispatch<ParsedCSV>;
}

export const CSVManualInput: React.FC<CSVManualInputProps> = ({ setData }) => {
  const parseValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const parsedResult = readString(e.target.value);
    setData(parsedResult.data as ParsedCSV);
  };
  return (
    <Row gutter={8}>
      <Col span={24}>
        <StyledTextArea rows={8} onBlur={parseValue} />
      </Col>
    </Row>
  );
};
