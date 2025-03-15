import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { GaleryComponent } from '../../components/galery/galery.component';
import { ProductCarComponent } from "../../components/product-car/product-car.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-detailpage',
  imports: [
    NavbarComponent,
    FooterComponent,
    GaleryComponent,
    ProductCarComponent
],
  templateUrl: './detailpage.component.html',
  styleUrl: './detailpage.component.css'
})
export class DetailpageComponent {

}
