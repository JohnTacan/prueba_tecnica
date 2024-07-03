import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdenesService } from '../ordenes.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [RouterLink, RouterOutlet ,CommonModule, FormsModule], // Importar FormsModule aquí
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  ordenes: any[] = [];
  newOrden: any = {};
  editOrdenData: any = {};

  constructor(private ordenesService: OrdenesService) {}

  ngOnInit(): void {
    this.loadOrdenes();
  }

  loadOrdenes(): void {
    this.ordenesService.getOrdenes().subscribe(data => {
      this.ordenes = data;
    });
  }

  createOrden(): void {
    this.ordenesService.createOrden(this.newOrden).subscribe(response => {
      console.log(response);
      this.loadOrdenes();
      this.newOrden = {}; // Clear form
    });
  }

  startEditOrden(orden: any): void {
    this.editOrdenData = { ...orden }; // Create a copy of the order data
  }

  saveEditOrden(): void {
    this.ordenesService.editOrden(this.editOrdenData).subscribe(response => {
      console.log(response);
      this.loadOrdenes();
      this.editOrdenData = {}; // Clear edit form
    });
  }

  deleteItemOrden(id: number): void {
    this.ordenesService.deleteItemOrden(id).subscribe(response => {
      console.log(response);
      this.loadOrdenes();
    });
  }
}
