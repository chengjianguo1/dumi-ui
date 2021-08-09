import React, { ReactNode } from 'react';

export interface IHelloProps {
  /**
   * 可以这样写属性描述
   * @description       上传文件的地址
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           ""
   */
  action?: string;
  /**
   * 可以这样写属性描述
   * @description       支持上传文件的类型
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  accept?: string;
  /**
   * 可以这样写属性描述
   * @description       是否支持多选(还不支持，待完善)
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  multiple?: boolean;
  /**
   * 可以这样写属性描述
   * @description       文件上传成功之后的回调
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  onSuccess?: () => {};
  /**
   * 可以这样写属性描述
   * @description       文件上传前的预处理
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  beforeUpload?: () => {};
  /**
   * 可以这样写属性描述
   * @description       选中文件改变的回调
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  onChange?: () => {};
}

const UploadImgAPI: React.FC<IHelloProps> = () => <>Hello World!</>;

export default UploadImgAPI;
