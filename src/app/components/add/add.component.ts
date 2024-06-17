import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-add',
  standalone: true,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  imports: [HeaderComponent, FooterComponent],
})
export class AddComponent {
  productos: {
    nombre: string;
    descripcion: string;
    precio: number;
  }[] = [];

  ngOnInit(): void {
    this.productos = this.getDatos();
  }

  getDatos() {
    return [
      { nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 100 },
      { nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 200 },
      { nombre: 'Producto 3', descripcion: 'Descripción del producto 3', precio: 300 },
      { nombre: 'Producto 4', descripcion: 'Descripción del producto 4', precio: 400 },
      { nombre: 'Producto 5', descripcion: 'Descripción del producto 5', precio: 500 },
      { nombre: 'Producto 6', descripcion: 'Descripción del producto 6', precio: 600 },
      { nombre: 'Producto 7', descripcion: 'Descripción del producto 7', precio: 700 },
      { nombre: 'Producto 8', descripcion: 'Descripción del producto 8', precio: 800 },
      { nombre: 'Producto 9', descripcion: 'Descripción del producto 9', precio: 900 },
      { nombre: 'Producto 10', descripcion: 'Descripción del producto 10', precio: 1000 },
    ];
  }
}
