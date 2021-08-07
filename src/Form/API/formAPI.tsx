import React, { ReactNode } from 'react';

export interface IHelloProps {
   /**
   * @description       form表单成功之后的回调方法
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           
   */
    onFinish?: () => {};
     /**
     * @description       form表单验证失败之后的回调方法
     * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
     * @default           
     */
    onFinishFailed?: () => {};
    /**
     * @description       form表单的实例，有操作表单的方法
     * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
     * @default           
     */
     ref?: () => {};
      /**
     * @description       表单实例获取表单所有的数据
     * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
     * @default           
     */
    getFieldsValue?: () => {};
    /**
     * @description       表单实例获取表单某一项的数据
     * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
     * @default           
     */
    getFieldValue?: () => {};
    /**
     * @description       设置表单的默认值
     * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
     * @default           
     */
    setFieldsValue?: () => {};
    /**
     * @description       表单实例提交表单的方法，触发表单校验规则
     * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
     * @default           
     */
    submit?: () => {}
    /**
     * @description       表单实例的重置方法
     * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
     * @default           
     */
    reset?: () => {}
}

const Form: React.FC<IHelloProps> = () => <>Hello World!</>;

export default Form;