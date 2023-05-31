import React, { useRef } from 'react';

class FormStore {
  constructor() {
    this.store = {}; // 状态
    this.fieldEntities = []; // 组件实例
    this.callbacks = {}; // 回调函数
    this.rulesValidate = {}; // 校验规则
    this.errMessage = []; // 错误提示
  }

  setCallbacks = (newCallbacks) => {
    this.callbacks = {
      ...this.callbacks,
      ...newCallbacks,
    };
  };

  // 注册组件实例，当field组件销毁的时候把组件实例移除，并且store更新
  registerFieldEntities = (entity) => {
    this.fieldEntities.push(entity);

    return () => {
      this.fieldEntities = this.fieldEntities.filter((_entity) => {
        return _entity != entity;
      });
      delete this.store[entity.props.name];
    };
  };

  getFieldsValue = () => {
    return this.store;
  };

  getFieldValue = (name) => {
    return this.store[name];
  };

  setFieldsValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };

    // 更新组件
    this.fieldEntities.forEach((_entity) => {
      Object.keys(newStore).forEach((name) => {
        if (_entity.props.name === name) {
          _entity.onStoreChange(); // Field组件更新方法
        }
      });
    });
  };

  setRuleValidate = (name, rules) => {
    // 保存每个组件的验证规则
    this.rulesValidate[name] = rules;
    console.log(this.rulesValidate);
  };

  validateField = (name, value) => {
    const err = {};
    this.rulesValidate[name] &&
      this.rulesValidate[name].forEach((validate) => {
        err[name] = [];
        if (validate.required && !value) {
          this.errMessage.push(validate.message);
          err[name].push(validate.message);
        }
      });

    Object.keys(err).forEach((field) => {
      this.fieldEntities.forEach((_entity) => {
        if (_entity.props.name === field) {
          // _entity.props.errMessage = err[field];
          _entity.onStoreChange(err[field]); // Field组件更新方法
        }
      });
    });

    // return err;
  };

  validate = () => {
    Object.keys(this.store).forEach((field) => {
      this.validateField(field, this.store[field]);
    });
    return this.errMessage;
  };

  submit = () => {
    this.rulesValidate;
    const { onFinish, onFinishFailed } = this.callbacks;
    let err = this.validate();

    if (err.length > 0) {
      onFinishFailed(this.getFieldsValue(), err);
    } else {
      onFinish(this.getFieldsValue());
    }
  };

  // 重置表单
  reset = () => {
    let resetStore = {};
    this.errMessage = [];
    Object.keys(this.store).forEach((key) => {
      resetStore[key] = '';
    });
    this.setFieldsValue(resetStore);
    this.fieldEntities.forEach((_entity) => {
      if (_entity.props.name === field) {
        _entity.onStoreChange(); // Field组件更新方法
      }
    });
  };

  getForm = () => {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      registerFieldEntities: this.registerFieldEntities,
      submit: this.submit,
      reset: this.reset,
      setCallbacks: this.setCallbacks,
      setRuleValidate: this.setRuleValidate,
    };
  };
}

export default function useForm(form) {
  const formRef = useRef();

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore;
    }
  }
  return [formRef.current];
}
