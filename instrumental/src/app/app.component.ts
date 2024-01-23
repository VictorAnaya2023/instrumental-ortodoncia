import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BreakpointObserver, Breakpoints, LayoutModule} from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

interface Video {
  nombre: string;
  video: string;
  imagen: string;
  descripcion: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule, 
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private responsive: BreakpointObserver) {
    
  }
  title = 'instrumental';
  is_Mobile:boolean = false;
  isAdmin:boolean = false;
  myControl = new FormControl('');
  dummy_Data:Video[] = [
    {
      "nombre": "Video 1",
      "video": "https://www.youtube.com/watch?v=video1",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 1"
    },
    {
      "nombre": "Video 2",
      "video": "https://www.youtube.com/watch?v=video2",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 2"
    },
    {
      "nombre": "Video 3",
      "video": "https://www.youtube.com/watch?v=video3",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 3"
    },
    {
      "nombre": "Video 4",
      "video": "https://www.youtube.com/watch?v=video4",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 4"
    },
    {
      "nombre": "Video 5",
      "video": "https://www.youtube.com/watch?v=video5",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 5"
    },
    {
      "nombre": "Video 6",
      "video": "https://www.youtube.com/watch?v=video6",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 6"
    },
    {
      "nombre": "Video 7",
      "video": "https://www.youtube.com/watch?v=video7",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 7"
    },
    {
      "nombre": "Video 8",
      "video": "https://www.youtube.com/watch?v=video8",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 8"
    },
    {
      "nombre": "Video 9",
      "video": "https://www.youtube.com/watch?v=video9",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 9"
    },
    {
      "nombre": "Video 10",
      "video": "https://www.youtube.com/watch?v=video9",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 9"
    },
    {
      "nombre": "Video 11",
      "video": "https://www.youtube.com/watch?v=video9",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 9"
    },
    {
      "nombre": "Video 12",
      "video": "https://www.youtube.com/watch?v=video9",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 9"
    },
    {
      "nombre": "Video 13",
      "video": "https://www.youtube.com/watch?v=video9",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 9"
    },
    {
      "nombre": "Video 14",
      "video": "https://www.youtube.com/watch?v=video9",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 9"
    },
    {
      "nombre": "Video 15",
      "video": "https://www.youtube.com/watch?v=video9",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 9"
    },
    {
      "nombre": "Video 16",
      "video": "https://www.youtube.com/watch?v=video9",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 9"
    },
    {
      "nombre": "Video 17",
      "video": "https://www.youtube.com/watch?v=video9",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 9"
    },
    {
      "nombre": "Video 18",
      "video": "https://www.youtube.com/watch?v=video10",
      "imagen": "https://ddazul.com/productos/20191111111930-32fd022c748bcd7471b833d6186846b0.jpg",
      "descripcion": "Descripción del Video 10"
    }
  ]
  filteredOptions!: Observable<Video[]>;

  ngOnInit() {
    
    this.responsive.observe(Breakpoints.Handset).subscribe(res=>{
      if(res.matches){
        console.log('handset')
        this.is_Mobile = true;
      }
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): Video[] {
    const filterValue = value.toLowerCase();

    return this.dummy_Data.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  displayFn(video: Video): string {
    return video ? video.nombre : '';
  }
}
