import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../core/api.service';
@Component({ selector: 'app-product-card', standalone: true, imports: [CommonModule, RouterLink], styleUrl: './product-card.component.scss', templateUrl: './product-card.component.html' })
export class ProductCardComponent { @Input({required: true}) product!: Product; startingPrice() { return this.product.packages.filter(p => !p.customPrice && p.price != null).sort((a,b) => Number(a.price) - Number(b.price))[0]; } }
