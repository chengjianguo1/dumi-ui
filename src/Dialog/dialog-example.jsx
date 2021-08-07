import React from 'react';
import { Dialog } from 'dumi-ui';
import './index.less';

export default () => {
    const show = () => {
        const dialog = Dialog.show({
            title:"dialog title",
            content: <div>content</div>,
            hasMask: false,
            visible: true,
            onClose: () => {
              console.log('onClose')
            },
            onSuccess:() => {
              console.log('onsuccess')
            },
            footerAlign:"right",
        })
        setTimeout(() => {
            dialog.hide();
        }, 2000);
    }

    return (
        <div>
            <span className="dialog-btn-example" onClick={show}>show Dialog</span>
        </div>
    )
}