import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
