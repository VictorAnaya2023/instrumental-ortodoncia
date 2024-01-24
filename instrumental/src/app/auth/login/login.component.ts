import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;

  constructor(private authService: AuthService, private router: Router){}

  login(): void {
    // Realiza la lógica de autenticación
    this.authService.login();
    // console.log('webos3');
    // Redirige al usuario a la ruta deseada (por ejemplo, '/home')
    this.router.navigate(['/admin-panel']);
    this.router.navigate(['/home']);
  }
}
