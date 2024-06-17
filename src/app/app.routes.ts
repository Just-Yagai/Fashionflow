import { Routes } from '@angular/router';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactosComponent } from './components/contactos/contactos.component';

export const routes: Routes = [
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'contactos', component: ContactosComponent },
    { path: '', redirectTo: '#', pathMatch: 'full' },
    { path: '**', redirectTo: '/nosotros', pathMatch: 'full' }
];
