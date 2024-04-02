import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoComponent } from './catalogo.component';

import { Component } from '@angular/core';
import { CartServicesService } from '../../services/cart-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-prueba';
	// Array de Objetos de productos
  products = [
    {
      name: 'Bike_1',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }, 
    {
      name: 'Bike_2',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name: 'Bike_3',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }, 
    {
      name: 'Bike_4',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name: 'Bike_5',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }, 
    {
      name: 'Bike',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name: 'Bike_6',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }, 
    {
      name: 'Bike_7',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name: 'Bike_8',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }, 
    {
      name: 'Bike_9',
      price: 120,
      description: 'Product Description',
      inventory: 10,
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
 ];
 constructor(private cartServicesService: CartServicesService) {}

 addToCart(product: any) {
   this.cartServicesService.addToCart(product);
   product.cantidad = 0;
   console.log(this.cartServicesService.getCart());
}
}
