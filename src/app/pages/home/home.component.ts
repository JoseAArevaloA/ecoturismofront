import { Component } from '@angular/core';
import { SlideComponent } from '../../components/slide/slide.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardsHabitacionesComponent } from '../../components/cards-habitaciones/cards-habitaciones.component';

@Component({
  selector: 'app-home',
  imports: [
    SlideComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    CardsHabitacionesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
