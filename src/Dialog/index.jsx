import React from 'react';
import Dialog1 from './dialog';
import { show } from './show';

// todo show alert confirm
Dialog1.show = (config) => {
    return show(config)
}

const Dialog = (props) => {
    Dialog.show(props);
    const show = (config) => {
        Dialog.show(config);
    }
    return <></>
}

Dialog.show = (config) => {
    const dialog = Dialog1.show({
        ...config
    })
    return dialog;
}

export default Dialog;
