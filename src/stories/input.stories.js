import React, {useState} from 'react';

import {Button} from './Button';
import {action} from "@storybook/addon-actions";
import {ChangeEvent} from "react";

export default {
    title: 'input',
    // component: input,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    return <><input onChange={(event) => { //передали колбек onChange (это обработчик события, который вызывется при каждом input), в этот колбек приходит событие event, и каждый раз мы можем прочитывать его event.currentTarget.value - это актуальное событие которое только что поменялось
        const actualValue = event.currentTarget.value; // актуальному событию присвоили значение переменной
        setValue(actualValue)                           //отправили актуальное событие в стейт, чтобы как то управлять им. МОЖНО отправлять его на сервер и т.д.
    }}/>-{value}</>;
}
// ЩО ТО НЕ ПОШЛО... вроде ощибка изза того, что Димыч показывает пример на TS, а у меня JS (((
// export const GetTrackValueOfUncontrolledInputByButtonPress = () => {
//     const [value, setValue] = useState(null) // у нас есть value которое мы можем засетать при нажатии на кнопку
//     const inputRef = useRef(null);                               // 1. с помощью хука useRef создаем ссылку inputRef
//     // return <><input/><button onClick={()=> {setValue('yo')}}>save</button> - actual value: {value}</>; // при нажатии на кнопку появиться yo
//
//     const save = () => {
//         const el = inputRef.current as HTMLInputElement;
//         setValue(el.value);
//     }
//     return <><input ref={inputRef}/>
//         <button onClick={save}>save</button>- actual value: {value}</>; // 2.привязали ссылку inputRef к инпуту через ref
//
// }

export const ControlledInput = () => {
    const [parentValue, setparentValue] = useState(''); //1. стартуем с пустой строки/желудка   4. желудок УЖЕ с пивом!!!

    const onChange = (event: ChangeEvent<HTMLInputElement>) => { //2. вводим желание выпить пива
        setparentValue(event.currentTarget.value);               //3. родители разрешают выпить и тем самым parentValue уже "выпил пива"
    }
    // return <input value={parentValue} onChange={action('want to change')}/>
    return <input value={parentValue} onChange={onChange}/>        // єто все "под капотом" операции 1-3
}

export const ControlledCheckBox = () => {
    const [parentValue, setparentValue] = useState(true); //тот же принцип "пива" что и в input

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setparentValue(event.currentTarget.checked);
    }
    // return <input value={parentValue} onChange={action('want to change')}/>
    return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setparentValue] = useState(undefined); //если вместо undefined поставить 2, то сразу в окне появиться не none, а Moscow

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setparentValue(event.currentTarget.value);
    }
    // return <input value={parentValue} onChange={action('want to change')}/>
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.com'}/>;