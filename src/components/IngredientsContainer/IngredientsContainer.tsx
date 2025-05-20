import React from 'react';
import { INGREDIENTS} from '../../Ingredient';
import IngredientSection from '../IngredientSection/IngredientSection';

interface IngredientCount {
    name: string;
    count: number;
}

interface IngredientsContainerProps {
    ingredients: IngredientCount[];
    onAdd: (name: string) => void;
    onDelete: (name: string) => void;
}

const IngredientsContainer: React.FC<IngredientsContainerProps> = ({ ingredients, onAdd, onDelete }) => {
    return (
        <div className="ingredientsContainer">
            <h3>Ingredients</h3>
            {INGREDIENTS.map((ingredient, index) => {
                const ingredientCount = ingredients.find(i => i.name === ingredient.name);
                return (
                    <IngredientSection
                        key={index}
                        ingredient={ingredient}
                        count={ingredientCount ? ingredientCount.count : 0}
                        onAdd={() => onAdd(ingredient.name)}
                        onDelete={() => onDelete(ingredient.name)}
                    />
                );
            })}
        </div>
    );
};

export default IngredientsContainer;