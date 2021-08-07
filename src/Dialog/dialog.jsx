import React from 'react';
import './index.less';

export default class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            footerAlign: 'center',
            ...props
        }
    }

    onCloseDialog = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        const { title, content, hasMask, visible, onClose, onSuccess, footerAlign } = this.state;
        return <>
            {visible && (
                <div className="dumi-ui-dialog">
                    <div className="dialog-title">
                        <div>{title}</div>
                        <div onClick={this.onCloseDialog}>x</div>
                    </div>
                    <div className="dialog-content">
                        {content}
                    </div>
                    <div className="dialog-footer" style={{ textAlign: footerAlign }}>
                        <span className="dialog-btn-close" onClick={() => {
                            onClose();
                            this.onCloseDialog();
                        }}>取消</span>
                        <span className="dialog-btn-success" onClick={() => {
                            onSuccess();
                            this.onCloseDialog();
                        }}>确定</span>
                    </div>
                </div>
            )}
            {hasMask && visible && (
                <div className="dialog-mask"></div>
            )}
        </>
    }
}
