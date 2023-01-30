import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from './Accordion';
import type {AccordionPropsType} from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const GetCategoryObj = (categoryName: string) => ({ // вінесли в ф-цию ,чтобі облегчить код
    table: {
        category: categoryName
    }
})

export default {
    title: 'Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: { // сситаксис с сторибук
        color: {
            control: 'color',
            ...GetCategoryObj('Colors')
        },

        onChange: {
            ...GetCategoryObj('Events')
        },

        backgroundColor: {
            control: 'color'
        }
    }
};

const callBack = action('accordion mode change event fired');

const Template = (args: AccordionPropsType) => <Accordion {...args} />; // проба новой версии Стори бук - подгоняем по ходу... Рисуем Аккодрион с какими то аргументами которые к нам могут прийти

const callBackProps = { // забрали повторяющиеся пропсы
    onChange: callBack
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callBackProps,
    titleValue: 'Menu',
    collapsed: true
}

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    ...callBackProps,
    titleValue: 'User',
    collapsed: false
}

// export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callBack}/>;
// export const UsersUncollapsedMode = () => <Accordion titleValue={'User'} collapsed={false} onChange={callBack}/>;
export const ModeChanging = () => {
    const [value, setValue] = useState(true);
    return <Accordion titleValue={'User'} collapsed={value} onChange={() => setValue(!value)}/>
};