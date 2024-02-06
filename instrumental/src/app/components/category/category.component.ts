import { Component } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatGridListModule, MatCardModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
  ];

  categories = [
    {
        "id": 1,
        "name": "Laboratorio",
        "description": "Pinzas de Laboratorio",
        "image": "/assets/img/paulo_blanco.png",
        "created_at": "2024-02-06T15:48:52.000000Z",
        "updated_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 2,
        "name": "Especiales",
        "description": "Pinzas Especiales",
        "image": "/assets/img/paulo_blanco.png",
        "created_at": "2024-02-06T16:21:01.000000Z",
        "updated_at": "2024-02-06T16:21:01.000000Z"
    },
    {
        "id": 3,
        "name": "De Lujo",
        "description": "Pinzas de Lujo",
        "image": "/assets/img/paulo_blanco.png",
        "created_at": "2024-02-06T16:22:11.000000Z",
        "updated_at": "2024-02-06T16:26:56.000000Z"
    },
    {
        "id": 3,
        "name": "De Lujo",
        "description": "Pinzas de Lujo",
        "image": "/assets/img/paulo_blanco.png",
        "created_at": "2024-02-06T16:22:11.000000Z",
        "updated_at": "2024-02-06T16:26:56.000000Z"
    },
    {
        "id": 3,
        "name": "De Lujo",
        "description": "Pinzas de Lujo",
        "image": "/assets/img/paulo_blanco.png",
        "created_at": "2024-02-06T16:22:11.000000Z",
        "updated_at": "2024-02-06T16:26:56.000000Z"
    },
    {
        "id": 3,
        "name": "De Lujo",
        "description": "Pinzas de Lujo",
        "image": "/assets/img/paulo_blanco.png",
        "created_at": "2024-02-06T16:22:11.000000Z",
        "updated_at": "2024-02-06T16:26:56.000000Z"
    },
    {
        "id": 3,
        "name": "De Lujo",
        "description": "Pinzas de Lujo",
        "image": "/assets/img/paulo_blanco.png",
        "created_at": "2024-02-06T16:22:11.000000Z",
        "updated_at": "2024-02-06T16:26:56.000000Z"
    },
    {
        "id": 3,
        "name": "De Lujo",
        "description": "Pinzas de Lujo",
        "image": "/assets/img/paulo_blanco.png",
        "created_at": "2024-02-06T16:22:11.000000Z",
        "updated_at": "2024-02-06T16:26:56.000000Z"
    },
]
}
