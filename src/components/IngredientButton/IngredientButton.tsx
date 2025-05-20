import type { Ingredient } from '../../Ingredient';
import React from "react";
import './IngredientsButton.css';

interface IngredientButtonProps extends Ingredient {
    onAdd: () => void;
}

const IngredientButton: React.FC<IngredientButtonProps> = ({image, name, onAdd}) => {
    return (
        <div className="ingredientButton" onClick={onAdd}>
            <div className="imageContainer">
                <img src={image} alt={`${name}Image`} />
            </div>
            <p className="ingredientName">{name}</p>
        </div>
    );
};

export default IngredientButton;