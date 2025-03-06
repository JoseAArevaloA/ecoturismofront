import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { GaleryComponent } from '../../components/galery/galery.component';

@Component({
  selector: 'app-detailpage',
  imports: [
    NavbarComponent,
    FooterComponent,
    GaleryComponent,
  ],
  templateUrl: './detailpage.component.html',
  styleUrl: './detailpage.component.css'
})
export class DetailpageComponent {

}
