import React, { useRef, useState } from 'react';
import axios from 'axios';
import './index.less';

export default (props) => {
  const { accept, multiple = false, beforeUpload, onChange, onSuccess } = props;
  const inputRef = useRef(null);
  const [url, setUrl] = useState();
  const handleChange = (e) => {
    if (e.target.files && e.target.files.length <= 0) return;
    onChange && onChange(e.target.files);
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    beforeUpload && beforeUpload();
    // todo 后续使用serverless部署接口
    axios
      .post('http://localhost:51111/user/uploadAvatar/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        onSuccess && onSuccess();
        setUrl(res.data.data);
      });
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const onRemove = () => {
    setUrl(null);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        style={{ display: 'none' }}
        value=""
        multiple={multiple}
        accept={accept}
      ></input>
      <button className="dumi-ui-buttom" onClick={handleClick}>
        upload
      </button>
      <div className="dumi-ui-upload">
        {url && (
          <img
            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
            src={url}
          ></img>
        )}
        {!url && (
          <span onClick={handleClick} className="upload-plus">
            +
          </span>
        )}
        {url && (
          <span className="upload-actions">
            {/* <span>下载</span> */}
            <span onClick={onRemove}>删除</span>
          </span>
        )}
      </div>
    </div>
  );
};
