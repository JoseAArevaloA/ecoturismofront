import { Component } from '@angular/core';


@Component({
  selector: 'app-product-car',
  imports: [],
  templateUrl: './product-car.component.html',
  styleUrl: './product-car.component.css'
})
export class ProductCarComponent {
  // Lista de items disponibles
  items = [
    { name: 'Cocinera', price: 50000 },
    { name: 'Clase apicultura', price: 70000 },
    { name: 'Clase lombricultura', price: 40000 },
    { name: 'licores', price: 40000 }
  ];

  // Lista de items seleccionados
  selectedItems: { name: string, price: number }[] = [];

  // Total de la compra
  total = 0;

  // Método para manejar la selección de items
  onItemSelect(item: { name: string, price: number }, event: any) {
    if (event.target.checked) {
      this.selectedItems.push(item); // Añadir item al carrito
      this.total += item.price; // Sumar al total
    } else {
      this.selectedItems = this.selectedItems.filter(selectedItem => selectedItem.name !== item.name); // Eliminar item del carrito
      this.total -= item.price; // Restar del total
    }
  }
}

