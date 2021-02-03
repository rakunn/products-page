import { createRef, Dispatch, useState } from 'react';
import { CSVReader } from 'react-papaparse';
import { Button, Col, Input, Row } from 'antd';
import { ParsedCSV } from '../../store/reducers/form';

const PLACEHOLDER = 'Upload file ...';

interface CSVFileInputProps {
  setData: Dispatch<ParsedCSV>;
}

export const CSVFileInput: React.FC<CSVFileInputProps> = ({ setData }) => {
  const buttonRef = createRef<any>();

  const [file, setFile] = useState<File | null>();

  const handleOpenDialog = (e: any) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  const handleOnFileLoad = (data: ParsedCSV, file: File) => {
    setFile(file);
    setData(data);
  };

  const handleOnError = () => {
    // TODO possible enhancement
  };

  const handleOnRemoveFile = () => {
    // TODO possible enhancement
  };

  return (
    <Row gutter={8}>
      <Col span={16}>
        <Input
          size={'large'}
          value={file ? file.name : ''}
          placeholder={PLACEHOLDER}
          readOnly={true}
        />
      </Col>
      <Col span={8}>
        <CSVReader
          ref={buttonRef}
          onFileLoad={handleOnFileLoad}
          onError={handleOnError}
          noClick
          noDrag
          onRemoveFile={handleOnRemoveFile}
          noProgressBar={true}
        >
          {() => (
            <Button
              type="primary"
              onClick={handleOpenDialog}
              size={'large'}
              block={true}
            >
              Browse file
            </Button>
          )}
        </CSVReader>
      </Col>
    </Row>
  );
};
