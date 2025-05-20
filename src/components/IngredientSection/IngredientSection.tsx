import React from 'react';
import IngredientButton from '../IngredientButton/IngredientButton';
import type { Ingredient } from '../../Ingredient';
import './ingredientSection.css';

interface IngredientSectionProps {
    count: number;
    ingredient: Ingredient;
    onAdd: () => void;
    onDelete: () => void;
}

const IngredientSection: React.FC<IngredientSectionProps> = ({ingredient, count, onAdd, onDelete}) => {
    return (
        <div className="ingredientSection">
            <IngredientButton
                image={ingredient.image}
                name={ingredient.name}
                onAdd={onAdd}
            />
            <p >x{count}</p>
            <button className="deleteIngredientBtn" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default IngredientSection;