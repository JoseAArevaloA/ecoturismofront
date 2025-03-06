import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SlideComponent } from './components/slide/slide.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsHabitacionesComponent } from './components/cards-habitaciones/cards-habitaciones.component';
import { SlidesHotelesComponent } from './components/slides-hoteles/slides-hoteles.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    SlideComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    CardsHabitacionesComponent,
    SlidesHotelesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecoturismofront-app';
}
