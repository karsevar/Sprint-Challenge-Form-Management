import React from 'react';
import RecipeCard from './RecipeCard';
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe('RecipeCard', () => {
  it('Should render a list of recipes provided by props', () => {
      const recipeArray = [
          {name: 'Brisket', course: 'Main', technique:'sous-Vide', ingredients: ['meat', 'salt']},
          {name: 'Chicken', course: 'Main', technique:'sous-Vide', ingredients: ['meat', 'salt']},
          {name: 'Ham', course: 'Main', technique:'sous-Vide', ingredients: ['meat', 'salt']}
      ];

      const comp = render(<RecipeCard recipes={recipeArray} />)
      const recipe = comp.getAllByTestId('recipe');
      expect(recipe).toHaveLength(3);
  });

  it('Should render the correct props information', () => {
    const recipe = [
      {name: 'Brisket', course: 'Main', technique:'sous-Vide', ingredients: ['meat', 'salt']}
    ];
    
    const comp = render(<RecipeCard recipes={recipe} />)
    comp.getByText(/Brisket/);
    comp.getByText(/Main/);
    comp.getByText(/sous-Vide/);
  });
}); 