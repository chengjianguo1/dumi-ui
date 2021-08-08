import React from 'react';
import classNames from 'classnames';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import './index.less';

// export type SizeProp =
//   | "xs"
//   | "lg"
//   | "sm"
//   | "1x"
//   | "2x"
//   | "3x"
//   | "4x"
//   | "5x"
//   | "6x"
//   | "7x"
//   | "8x"
//   | "9x"
//   | "10x";

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props) => {
  // icon-primary
  const { className, theme, ...restProps } = props;
  const classes = classNames(className, {
    [`icon-${theme}`]: theme,
  });

  return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
