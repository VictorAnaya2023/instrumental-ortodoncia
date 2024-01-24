import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[authGuard]},
  { path: '**', component: NotFoundComponent},
];
