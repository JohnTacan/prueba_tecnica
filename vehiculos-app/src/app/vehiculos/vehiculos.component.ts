import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from '../vehiculos.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule, FormsModule], // Importar FormsModule aquí
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculos: any[] = [];
  newVehiculo: any = {};

  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit(): void {
    this.loadVehiculos();
  }

  loadVehiculos(): void {
    this.vehiculosService.getVehiculos().subscribe(data => {
      this.vehiculos = data;
    });
  }

  createVehiculo(): void {
    this.vehiculosService.createVehiculo(this.newVehiculo).subscribe(response => {
      console.log(response);
      this.loadVehiculos();
      this.newVehiculo = {}; // Clear form
    });
  }
}
