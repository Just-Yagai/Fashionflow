import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-productos',
    standalone: true,
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css',
    imports: [HeaderComponent]
})
export class ProductosComponent {

}
