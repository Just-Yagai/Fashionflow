import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class HomeComponent {

}
