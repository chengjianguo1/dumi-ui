import React from 'react';
import _Form from './src/Form';
import Field from './src/Field';
import useForm from './src/useForm';
import Input from './input';
import './index.less';

const Form = React.forwardRef(_Form);

Form.useForm = useForm;

// export { Field, Input };
Form.Field = Field;
Form.Input = Input;
export default Form;
