import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    // value: number //универсальный вариант,
    // value: 0 | 1 | 2 | 3 | 4 | 5,
    value: RatingValueType,
    setRatingValue: (RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div>
            <Star selected={props.value > 0}
                  onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>)
}

// замениили return(
//     <div>//         <Star selected={props.value > 1}/> и т.д.
//     на все выражение ниже :

//     if (props.value === 1) {
//         return (
//         <div>
//             <Star selected={true}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>)} и т.д


type StarPropsType = {
    selected: boolean,
    value: RatingValueType,
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {    //Star ждет (должно жестко соответсвовать) props которые являются конкретного типа: в нашем случе с свойством селектед с значением тру или фалс
    // debugger;
    console.log('Star rendering')
    // return (props.selected === true) ? <span><b>star </b></span> : <span>star </span>
    // return <span><b>star </b></span> ? props.selected === true : "star "
    return <span onClick={() => {
        props.onClick(props.value)
    }}>{props.selected ? <b>star </b> : "star "}</span>
    //
    // if (props.selected === true) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>}
}