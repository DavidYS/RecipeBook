import {Component} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Ingredient', 5),
    new Ingredient('Apple', 3),
    new Ingredient('Tomato', 5),
    new Ingredient('Lorem', 1),
  ];

onIngredientAdded(e: Ingredient) {
  this.ingredients.push(e);
}
}
