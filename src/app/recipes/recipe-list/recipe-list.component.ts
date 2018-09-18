import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c1.staticflickr.com/8/7049/6862205301_92f887a9b6_b.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c1.staticflickr.com/8/7049/6862205301_92f887a9b6_b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
