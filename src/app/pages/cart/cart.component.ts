import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/cart.service';
@Component({ standalone: true, imports: [CommonModule, RouterLink], styleUrl: './cart.component.scss', templateUrl: './cart.component.html' })
export class CartComponent {
  cart = inject(CartService);
  frequency(value: string) { return value.toLowerCase().replace('_', ' '); }
}
