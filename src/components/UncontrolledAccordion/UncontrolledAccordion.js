import React, { useReducer, useState } from "react";

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}

type ActionType = {
    type: string // action это объект у которого обязателно должно быть св=во тип (надпись "удалить", "уволить", "выучить")
}

const reducer = (state: boolean, action) => { // ф=ция в которую поступает state (переключалка) и action (инструкция, у которой должен біть тип\заголовок, что должен сделать редюсер) и которая по каким то правилам меняет стейт и его в конечном итоге выплевывает изменнній стейт

    return state;
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UnAccordion rendering')

    // const collapsed = true;
    // let [collapsed, setCollapsed]=useState(false) // закоментили в уроке 16 ,когда ввели useReducer
    let [collapsed, dispatch]=useReducer(reducer, false) //говорим -пользуйся reducer_ом, а вторыи параметрои передаем начальное значение (false). получаем значение ... и ф-ция ,которая позволит отправлять в мир реакта инструкцию в редьюсер єти єкщены

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
