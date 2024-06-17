import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, RouterModule, RouterLink, RouterLinkActive, LoginComponent, HomeComponent]
})
export class AppComponent {
  title = 'Fashionflow';
  constructor(public router: Router){}
}
