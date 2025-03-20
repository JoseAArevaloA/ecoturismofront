import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { GaleryComponent } from '../../components/galery/galery.component';
import { ActivatedRoute } from '@angular/router';
import { HostingService } from '../../services/hosting.service';
import { Hosting } from '../../models/HostingModel';
import { FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';

// Definir la interfaz AdditionalService
interface AdditionalService {
  id: string;
  service: string;
  cost: number;
  status: string;
  selected: boolean;
}


@Component({
  selector: 'app-hosting-detail',
  imports: [
    NavbarComponent,
    FooterComponent,
    GaleryComponent,
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './hosting-detail.component.html',
  styleUrl: './hosting-detail.component.css',
  
})
export class HostingDetailComponent implements OnInit{
  hosting!: Hosting;

   // Variables para controlar la visibilidad de cada sección
   
   isLocationVisible: boolean = false;
   isAdditionalServicesVisible: boolean = false;
   isRulesVisible: boolean = false;
   isHostVisible: boolean = false;

   // Fechas de entrada y salida
  checkInDate!: Date;
  checkOutDate!: Date;

   // Lista de servicios adicionales
  additionalServices: AdditionalService[] = [];

  // Lista de servicios seleccionados
  selectedServices: AdditionalService[] = [];

  // Precio subtotal costos adicionales
  servicesSubtotal: number = 0;

  // Número de noches
  numberOfNights: number = 0;

  // Subtotal de la habitación
  roomSubtotal: number = 0;

  // Total general (habitación + servicios adicionales)
  get total(): number {
    return this.servicesSubtotal + this.roomSubtotal;
  }

  constructor(
    private route: ActivatedRoute,
    private hostingService: HostingService
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); 
    if (id === null) {
      console.error("ID no encontrado en la URL");
      return;
    }
    this.hostingService.getHosting(id).subscribe(data => {
      this.hosting = data;
      console.log('Datos del alojamiento:', this.hosting); // Verifica los datos
      console.log('Servicios adicionales:', this.hosting.additional); // Verifica los servicios adicionales 

     // Mapear los servicios adicionales desde los datos del alojamiento
    this.additionalServices = this.hosting.additional.map((service: any) => ({
      id: service.additional_id,
      service: service.service,
      cost: service.cost,
      status: service.status,
      selected: false,
    }));
  });

  }

  // Función para alternar la visibilidad
  toggleSection(section: string) {
    switch (section) {
      case 'location':
        this.isLocationVisible = !this.isLocationVisible;
        break;
      case 'additionalservices':
        this.isAdditionalServicesVisible = !this.isAdditionalServicesVisible;
        break;
      case 'rules':
        this.isRulesVisible = !this.isRulesVisible;
        break;
      case 'host':
        this.isHostVisible = !this.isHostVisible;
        break;
    }
  }

    // Función para manejar la selección de servicios
 toggleService(service: AdditionalService) {
   service.selected = !service.selected;

   if (service.selected) {
     this.selectedServices.push(service); // Añadir al carrito
     this.servicesSubtotal+= service.cost; // Sumar al precio total
   } else {
     this.selectedServices = this.selectedServices.filter(s => s.id !== service.id); // Eliminar del carrito
     this.servicesSubtotal-= service.cost; // Restar del precio total
   }
 }
 // Método para manejar cambios en la fecha de entrada
 onCheckInDateChange(date: Date) {
  this.checkInDate = date;
  this.calculateNumberOfNights(); // Recalcular el número de noches
}

// Método para manejar cambios en la fecha de salida
onCheckOutDateChange(date: Date) {
  this.checkOutDate = date;
  this.calculateNumberOfNights(); // Recalcular el número de noches
}

 // Función para calcular el número de noches
 calculateNumberOfNights() {
  if (this.checkInDate && this.checkOutDate && this.checkOutDate > this.checkInDate) {
    const timeDifference = this.checkOutDate.getTime() - this.checkInDate.getTime();
    this.numberOfNights = Math.ceil(timeDifference / (1000 * 3600 * 24));
    this.calculateRoomSubtotal();
  } else {
    this.numberOfNights = 0; // Reiniciar el número de noches si las fechas no son válidas
    this.calculateRoomSubtotal();
  }
}

  // Método para calcular el subtotal de la habitación
  calculateRoomSubtotal() {
    this.roomSubtotal = this.numberOfNights * this.hosting.room.price_per_night;
  }
} 