import { Col, Form, Input, Button, Select, Row, Typography } from 'antd';
import { Dispatch, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AvailablePages } from '../../pages/Home/Home';
import { AppState } from '../../store';
import { submitFormActionCreator } from '../../store/actions/form';
import { ParsedCSV } from '../../store/reducers/form';
import { CSVFileInput } from './CSVFileInput';
import { CSVManualInput } from './CSVManualInput';
import { cities, countries } from './staticData';

const PLACEHOLDER = 'Please select ...';

interface DataInputProps {
  setSelectedPage: Dispatch<AvailablePages>;
}

export const DataInput: React.FC<DataInputProps> = ({ setSelectedPage }) => {
  const dispatch = useDispatch();

  const { name, email, gender, country, age, city } = useSelector(
    (state: AppState) => state.form
  );

  const [data, setData] = useState<ParsedCSV>([]);

  const onFinish = (values: AppState['form']) => {
    dispatch(submitFormActionCreator({ ...values, data }));
    setSelectedPage(AvailablePages.OUTPUT_PAGE);
  };

  const onFinishFailed = () => {
    console.log('asd');
    // TODO possible enhancement
  };

  return (
    <div style={{ padding: '1rem' }}>
      <Typography.Title level={5}>User</Typography.Title>
      <Form
        name="basic"
        initialValues={{ name, email, gender, country, age, city }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Input.Group size="large">
          <Row gutter={8}>
            <Col span={16}>
              <Form.Item name="name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                name={'gender'}
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Select placeholder={PLACEHOLDER}>
                  <Select.Option value="Male">Male</Select.Option>
                  <Select.Option value="Female">Female</Select.Option>
                  <Select.Option value="Unspecified">Unspecified</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name={'age'}>
                <Select placeholder={PLACEHOLDER}>
                  {new Array(120).fill(undefined).map((_, i) => (
                    <Select.Option key={i} value={i}>
                      {i}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Input.Group>

        <Input.Group size="large">
          <Row gutter={8}>
            <Col span={16}>
              <Form.Item name="email">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name={'country'}>
                <Select placeholder={PLACEHOLDER}>
                  {countries.map((country) => (
                    <Select.Option key={country} value={country}>
                      {country}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name={'city'}>
                <Select placeholder={PLACEHOLDER}>
                  {cities.map((city) => (
                    <Select.Option key={city} value={city}>
                      {city}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Input.Group>

        <Typography.Title level={5}>Input CSV Data</Typography.Title>

        <CSVFileInput setData={setData} />
        <CSVManualInput setData={setData} />

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={data.length === 0}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
