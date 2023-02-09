import React, {useState} from "react";
import styles from './Select.module.css'

type ItemType = {
    value?: any,
    title: string
}

type SelectPropsType = {
    value: any,
    onChange: (value: any) => void,
    items: ItemType [],
    // onClick: (value: any) => void
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(true) // сетаем табличку со списком городов (то скрываем, то отображаем)

    const selectedItem = props.items.find(i => i.value === props.value); // исп-ем filter или find. нужно отобразить текущее value, для этого нужно пробежаться по всем items , найти тот items, где совпадает с велью и отобразить нужный тайтл нужного айтемса

    const toggleItems = () => setActive (!active) // открываем и скрываем список из трех городов ниже h3

    return (
        // если нашли через filter нужный items, то отбражаем его title в h3
        // styles.select + '' + styles.active значит, что список появляется когда он активный. Мы реализовали ниже скрытие списка не через CSS, а через JS условие
        <>
            {/*<select>*/}
            {/*    <option value="">Minsk</option>*/}
            {/*    <option value="">Moscow</option>*/}
            {/*    <option value="">Kiev</option>*/}
            {/*</select>*/}

            <div className={styles.select}>
                <span  className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active && // рисует дивку только если active. т.е. скрываем список не через css (разметку display: block), а через jsx
                    <div className={styles.items}>
                        {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}