import React from 'react';

function RecipeCard(props) {
    return (
        <div className='recipe-container'>
            {props.recipes.map((recipe, index) => (
                <div className='recipe-card' data-testid='recipe' key={index}>
                    <h4>{recipe.name}</h4>
                    <p>{recipe.course}</p>
                    <p>{recipe.technique}</p>
                </div>
            ))}
        </div>
    )
}

export default RecipeCard;