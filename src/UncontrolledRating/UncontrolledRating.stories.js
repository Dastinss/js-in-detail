import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnconrolledRating} from './UncontrolledRating';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledRating',
    component: UnconrolledRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const callBack = action('rating changed inside component')

export const EmptyRating = () => <UnconrolledRating defaultValue={0} onChange ={callBack}/>;
export const Rating1 = () => <UnconrolledRating defaultValue={1} onChange ={callBack}/>;
export const Rating2 = () => <UnconrolledRating defaultValue={2} onChange ={callBack}/>;
export const Rating3 = () => <UnconrolledRating defaultValue={3} onChange ={callBack}/>;
export const Rating4 = () => <UnconrolledRating defaultValue={4} onChange ={callBack}/>;
export const Rating5 = () => <UnconrolledRating defaultValue={5} onChange ={callBack}/>;