import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BreakpointObserver, Breakpoints, LayoutModule} from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
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
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';

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
    CommonModule,
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
  isLoggedIn!:boolean;
  constructor(
    private cookieService: CookieService,
    private responsive: BreakpointObserver,
    private authService:AuthService,
    private router: Router) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Lógica a ejecutar después de que la navegación ha terminado
          this.isLoggedIn = this.authService.isAuth();
          console.log('Se ha redirigido a otra página:', event.url);
        }
      });
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
    }
  ]
  filteredOptions!: Observable<Video[]>;


  logout() {
    try {
      this.cookieService.delete('accessToken');
      this.router.navigate(['/login']);
    }
    catch (error) {
    }
  }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuth();
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

  redirectToAdmin() {
    this.router.navigate(['/admin-panel']);
  }
}
