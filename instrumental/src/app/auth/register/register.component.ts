import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { incorrectPassComponent } from '../login/login.component';
import { ThisReceiver } from '@angular/compiler';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
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
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hide = true;
  durationInSeconds = 5;

  name!: string;
  last_name!: string;
  email!: string;
  password!: string;
  c_password!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private cookieService: CookieService
  ) {

  }

  login(): void {

  }

  openSnackBar() {
    this._snackBar.openFromComponent(incorrectPassComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  register(): void {
    try {
      this.authService.register(this.name, this.last_name, this.email, this.password, this.c_password).subscribe({
        next: (res: any) => {
          this.cookieService.set('accessToken', res.data.token, undefined, '/', undefined, true, 'Strict');
        },
        error: (resErr) => {
          this.openSnackBar();
        },
        complete: () => {
          this.router.navigate(['/home']);
        }
      })
    }
    catch (error) {
    }
  }

}
