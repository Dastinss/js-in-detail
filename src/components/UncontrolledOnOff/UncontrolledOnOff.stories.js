import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from './UncontrolledOnOff';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const callBack = action ('on or off click');

export const OnMode = () => <UncontrolledOnOff defaultOn={true}/>;
export const OffMode = () => <UncontrolledOnOff defaultOn={false}/>;
export const DefaultInputValue = () => <input defaultValue={'yo'}/> //Если поставить поле value={'yo'}, то єто поле невозможно будет изменить, если же defaultValue={'yo'}, то віводится поле, но менять его можно