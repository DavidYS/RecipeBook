import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Name', 'Desciption', 'https://i.redd.it/92i1iwdgvq601.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
