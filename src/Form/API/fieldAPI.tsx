import React, { ReactNode } from 'react';

interface IRules {
    require: boolean;
    message: string | RegExp
}

export interface IHelloProps {
   /**
   * @description       表单的字段
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default            
   */
    name?: string;
    /**
   * @description       表单lable标题
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default            
   */
    label?: string;
    /**
   * @description       表单的校验规则
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default            
   */
    rules?: Array<IRules>;
}

const Form: React.FC<IHelloProps> = () => <>Hello World!</>;

export default Form;