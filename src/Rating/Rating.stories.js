import React, {useState} from 'react';

import {Rating} from './Rating';
// import type {RatingValueType} from "./Rating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating stories',
    component: Rating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export const EmptyRating = () => <Rating value={0} onClick={x => x}/>;
export const Rating1 = () => <Rating value={1} onClick={x => x}/>;
export const Rating2 = () => <Rating value={2} onClick={x => x}/>;
export const Rating3 = () => <Rating value={3} onClick={x => x}/>;
export const Rating4 = () => <Rating value={4} onClick={x => x}/>;
export const Rating5 = () => <Rating value={5} onClick={x => x}/>;
export const RatingChanging = () => {
    const [rating,setRating] = useState(3)
    return <Rating value={rating} onClick={setRating}/>};