import React, {Component} from "react";
import FieldContext from "./Context";

export default class Field extends Component {
  static contextType = FieldContext;

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    // 注册
    this.unregister = this.context.registerFieldEntities(this);
  }

  componentWillUnmount() {
    if (this.unregister) {
      this.unregister();
    }
  }

  onStoreChange = (errMessage) => {
    console.log(errMessage);
    this.setState({
        errMessage
    })
    this.forceUpdate();
  };

  getControlled = (errMessage) => {
    const {getFieldValue, setFieldsValue, setRuleValidate, validateField} = this.context;
    const {name, rules} = this.props;
    console.log(this.props, 'this.props');
    setRuleValidate(name, rules);
    return {
      value: getFieldValue(name), //"omg", // get
      onChange: (e) => {
        const newValue = e.target.value;
        // set
        setFieldsValue({
          [name]: newValue,
        });
        
        // validate
        const validateMessage = validateField(name, newValue);
        console.log(validateMessage);
      },
      errMessage
    };
  };
  render() {
    const {children, label} = this.props;
    const { errMessage } = this.state;
    console.log(errMessage);
    const returnChildNode = React.cloneElement(children, this.getControlled(errMessage));
    return <div style={{ marginBottom: '20px' }}>
        <label style={{ width: '60px', display: 'inline-block'}}>{label}</label>
        {returnChildNode}
    </div>;
  }
}
