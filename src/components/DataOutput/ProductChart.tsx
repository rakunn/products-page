import React from 'react';
import { Bar } from '@ant-design/charts';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { ParsedCSV } from '../../store/reducers/form';

interface ChartData {
  product: string;
  value: number;
}

const convertToChartData = (input: ParsedCSV): ChartData[] => {
  return input.map((row) => ({
    product: row.data[0],
    value: parseFloat(row.data[1]) || 0,
  }));
};

export const ProductChart = () => {
  const data = useSelector((state: AppState) => state.form.data);

  if (data.length === 0) {
    return null;
  }

  const convertedData = convertToChartData(data);

  const config = {
    data: convertedData,
    autoFit: true,
    yField: 'product',
    xField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  let chart: any;

  return (
    <Bar {...config} onReady={(chartInstance) => (chart = chartInstance)} />
  );
};
