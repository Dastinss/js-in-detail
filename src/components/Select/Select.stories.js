import React, {ChangeEvent, useState} from 'react';
// import {action} from "@storybook/addon-actions";
import {Select} from "./Select";
import {Rating} from "../../Rating/Rating";
import {Accordion} from "../Accordion/Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select stories',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

export const WithValue = () =>
    <>
        <Select onChange={action('Velue changed')}
                value = {'2'}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}
                ]}/>
    </>


export const WithotValue = () =>
    <>
        <Select onChange={action('Velue changed')}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}
                ]}/>
    </>
