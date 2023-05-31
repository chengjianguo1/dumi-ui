import React, { useState } from 'react';
import classnames from 'classnames';
import './input.less';

const Input = (props) => {
  const { focus, errMessage, ...otherProps } = props;
  return (
    <>
      <div
        className={classnames({
          'input-focus': focus,
          input: true,
          'rule-error': errMessage?.length > 0,
        })}
      >
        <input {...otherProps}></input>
      </div>
      {errMessage?.length > 0 && (
        <div className="error-message">{errMessage[0]}</div>
      )}
    </>
  );
};

const CustomInput = (props) => {
  const { value, onFocus, onBlur, onChange, ...otherProps } = props;
  const [focus, setFocus] = useState(false);

  // todo Input
  return (
    <>
      <Input
        value={value}
        onFocus={() => {
          setFocus(true);
          onFocus && onFocus();
        }}
        onBlur={() => {
          setFocus(false);
          onBlur && onBlur();
        }}
        focus={focus}
        onChange={(e) => {
          onChange(e);
        }}
        {...otherProps}
      ></Input>
    </>
  );
};

export default CustomInput;
