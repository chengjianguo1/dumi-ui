import React from 'react';
import { Upload } from 'dumi-ui';

export default () => {
  return (
    <Upload
      action=""
      accept=".png,jpeg,jpg"
      multiple={false}
      onSuccess={() => {
        console.log('上传成功');
      }}
      beforeUpload={() => {
        console.log('上传成功');
      }}
      onChange={(e) => {
        console.log(e, 'onChange');
      }}
    />
  );
};
