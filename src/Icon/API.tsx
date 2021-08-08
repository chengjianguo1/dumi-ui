import React, { ReactNode } from 'react';

export type ISize =
  | 'xs'
  | 'lg'
  | 'sm'
  | '1x'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x';
I;
export type ITheme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface IHelloProps {
  /**
   * @description       风格
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default            请查看项目中API.tsx中的说明
   */
  theme?: ITheme;
  /**
   * @description       size大小
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           'sm'
   */
  size?: ISize;
  /**
   * @description       icon样式
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default            请查看项目中API.tsx中的说明
   */
  icon?: string;
}

const Form: React.FC<IHelloProps> = () => <>Hello World!</>;

export default Form;
