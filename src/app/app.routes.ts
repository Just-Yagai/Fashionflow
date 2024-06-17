import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddComponent } from './components/add/add.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'add', component: AddComponent },
    { path: 'productos', component: ProductosComponent },   
    { path: 'contactos', component: ContactosComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full'},
];
