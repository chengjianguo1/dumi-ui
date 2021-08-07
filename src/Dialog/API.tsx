import React, { ReactNode } from 'react';

interface IDialogConfig {
  title: string;
  content: ReactNode;
  onClose: () => {};
  onSuccess: () => {};
}

export interface IHelloProps {
   /**
   * 可以这样写属性描述
   * @description       const dialog = Dialog.show({config: IDialogConfig}); dialog.hide();
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           
   */
  show?: (config: IDialogConfig) => {};
  /**
   * 可以这样写属性描述
   * @description       弹框展示/隐藏
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
   visible?: boolean; // 支持识别 TypeScript 可选类型为非必选属性
   /**
   * @description       header名称
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
   title?: string;
  /**
   * @description       弹框内容
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
   content?: ReactNode;
  /**
   * @description       蒙版
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           true
   */
   hasMask?: boolean;
    /**
   * @description       底部按钮布局 "left"|"center"|"right"
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           center
   */
   footerAlign?: string;
  /**
   * @description       底部按钮取消事件
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * //@default           () => {}
   */
   onClose?: () => {};
   /**
   * @description       底部按钮确定事件
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * //@default           () => {}
   */
  onSuccess?: () => {};
}

const Dialog: React.FC<IHelloProps> = () => <>Hello World!</>;

export default Dialog;