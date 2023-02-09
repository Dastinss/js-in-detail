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

export const WithValue = () =>{
    const [value, setValue] = useState('2')

        return <>
        {/*<Select onChange={action('Velue changed')} удалили после того, как добавили useState*/}
        <Select onChange={setValue}
                value = {value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}
                ]}/>
    </>
}

export const WithotValue = () => {
const [value, setValue] = useState(null)

    return <>
        {/*<Select onChange={action('Velue changed')} удалили после того, как добавили useState*/}
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'}
                ]}/>
    </>
}