import React, {useState} from 'react';
import {Ingredient} from '../types.ts';

interface Props {
    ingredient: Ingredient;
    OnClick: () => void;
    removeIngredient: () => void;
    count:number;
}

const IngredientBtn: React.FC<Props> = ({ingredient, OnClick, removeIngredient,}) => {
    const [count, setCount] = useState(0);


    const handleAdd = () => {
        setCount(prevCount => prevCount + 1);
        OnClick();
    };

    const handleRemove = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
            removeIngredient();
        }
    };
    return (
        <div className={'main-btn'}>
            <button onClick={handleAdd}>
                <img src={ingredient.image} alt={ingredient.name} style={{width: '100px'}}/>
                <p>{ingredient.name} {count}</p>
            </button>
            <button onClick={handleRemove} className={'del_Btn'}>Delete</button>
        </div>
    );
};

export default IngredientBtn;