import React from "react";

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    /**
     * Callback that ... даллее примечение, которое можно увидеть через Сtrl +Q в storybooke
     */
    onChange: ()=> void,  //мое
    /**
     * Optional color of header text
     */
    color? : string //добавили работая над сторибуком
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue}
                        color = {props.color}
                        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

// замениили <AccordionTitle title={props.titleValue}/>
//         { !props.collapsed && <AccordionBody/>} на все выражение ниже :
//
// if (props.collapsed === true) {
//     return <AccordionTitle title={props.titleValue}/>
// } else {
//     return <div>
//         <AccordionTitle title={props.titleValue}/>
//         <AccordionBody/>
//     </div>
// }

type AccordionTitlePropsType = {
    title: string,
    collapsed: boolean,
    onChange: (collapsed: boolean) => void,
    color? : string //добавили работая над сторибуком
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    // return <h3>Menu</h3> // вариант №1 до испоользования второго title и props
    return <h3
        style={{color: props.color ? props.color : 'black'}}//добавили работая над сторибуком, теперь можно менять цвет в закладке Сontrols в сторибук
        onClick={(e) => props.onChange()}>---{props.title}---</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}