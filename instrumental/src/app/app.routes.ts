import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CategoryComponent } from './components/category/category.component';

export const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'admin-panel', component: AdminPanelComponent, canActivate:[authGuard]},
  { path: 'home', component: HomeComponent, canActivate:[authGuard]},
  { path: 'categories', component: CategoryComponent },
  { path: '**', component: LoginComponent},
];
