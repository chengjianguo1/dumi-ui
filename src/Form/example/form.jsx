import React from 'react';
import { Form } from 'dumi-ui';
const { Field, Input } = Form;

const nameRules = { required: true, message: '请输入姓名！' };
const passworRules = { required: true, message: '请输入密码！' };

export default class FormDemo extends React.Component {
  formRef = React.createRef();
  componentDidMount() {
    console.log('form', this.formRef.current);
    this.formRef.current.setFieldsValue({ username: '', password: '' });
  }

  onFinish = (val) => {
    console.log('onFinish', val);
  };

  // 表单校验失败执行
  onFinishFailed = (val) => {
    console.log('onFinishFailed', val);
  };

  render() {
    return (
      <div>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Field name="username" label="用户名" rules={[nameRules]}>
            <Input placeholder="Username" />
          </Field>
          <Field name="password" label="密码">
            <Input placeholder="Password" />
          </Field>
          <button className="form-btn-success">Submit</button>
        </Form>
      </div>
    );
  }
}
