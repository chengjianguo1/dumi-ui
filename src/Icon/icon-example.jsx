import React from 'react';
import { Icon } from 'dumi-ui';
import IconsCofig from './config';
import './index.less';

export default () => {
  return (
    <>
      <div className="icon-list">
        {IconsCofig.map((icon) => {
          return (
            <div className="icon-item">
              <Icon icon={icon} size="2x" theme="primary" />
              {icon}
            </div>
          );
        })}
      </div>
    </>
  );
};
