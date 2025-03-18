import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-car',
  templateUrl: './product-car.component.html',
  styleUrls: ['./product-car.component.css']
})
export class ProductCarComponent implements OnInit {
  additionalServices: { concept: string, amount: number}[] = [];
  selectedServices: { concept: string, amount: number}[] = [];
  total = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAdditionalServices();
  }

  fetchAdditionalServices(): void {
    this.http.get<{ concept: string, amount: number }[]>('https://zwf7liwksa.execute-api.us-east-1.amazonaws.com/prod/hosting')
      .subscribe(
        (data) => {
          this.additionalServices = data;
        },
        (error) => {
          console.error('Error fetching services:', error);
        }
      );
  }

  onServiceSelect(service: { concept: string, amount: number }, event: any): void {
    if (event.target.checked) {
      this.selectedServices.push(service);
      this.total += service.amount;
    } else {
      this.selectedServices = this.selectedServices.filter(
        selectedService => selectedService.concept !== service.concept
      );
      this.total -= service.amount;
    }
  }
}



