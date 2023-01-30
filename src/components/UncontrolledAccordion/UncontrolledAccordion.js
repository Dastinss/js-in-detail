import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UnAccordion rendering')

    // const collapsed = true;
    let [collapsed, setCollapsed]=useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={ () => {setCollapsed(!collapsed) } }/>
        {/*<button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>*/}
        { !collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    // return <h3>Menu</h3> // вариант №1 до испоользования второго title и props
    return <h3 onClick={ () => { props.onClick() } }>---{props.title}---</h3>
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
