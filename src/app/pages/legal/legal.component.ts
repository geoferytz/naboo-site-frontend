import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({standalone:true,imports:[CommonModule,RouterLink],styleUrl: './legal.component.scss', templateUrl: './legal.component.html'})
export class LegalComponent {privacy=inject(ActivatedRoute).snapshot.data['type']==='privacy'}
