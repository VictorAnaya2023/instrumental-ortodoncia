import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDivider,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username!: string;
  password!: string;
  hide = true;

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService){}

  login(): void {
    try{
      this.authService.login(this.username, this.password).subscribe({
        next:(res:any)=>{
          this.cookieService.set('accessToken', res.data.token, undefined, '/', undefined, true, 'Strict');
        },
        error:(resErr)=>{console.log(resErr)},
        complete:()=>{
          this.router.navigate(['/admin-panel']);
        }
      })
    }
    catch(error){

    }
    // Realiza la lógica de autenticación
    // this.authService.login();
    // console.log('webos3');
    // Redirige al usuario a la ruta deseada (por ejemplo, '/home')
    // this.router.navigate(['/admin-panel']);
    // this.router.navigate(['/home']);
  }

  register(): void {
    this.router.navigate(['/register']);
  }
}
