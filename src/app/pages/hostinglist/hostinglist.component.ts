import { Component, OnInit } from '@angular/core';
import { HostingService } from '../../services/hosting.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Hosting } from '../../models/HostingModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hostinglist',
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './hostinglist.component.html',
  styleUrl: './hostinglist.component.css'
})
export class HostinglistComponent implements OnInit{
  hostings: Hosting[] = [];

  constructor(private hostingService: HostingService) {}

  ngOnInit(): void {
    this.hostingService.getHostings().subscribe(data => {
      this.hostings = data.map((hosting, index) => ({
        ...hosting,
        id: hosting.id || `temp-${index}` // Usar el id de la API o generar uno temporal
      }));
    });
  }
}
