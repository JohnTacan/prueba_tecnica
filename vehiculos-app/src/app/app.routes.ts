import { Routes } from '@angular/router';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

export const routes: Routes = [
  { path: 'ordenes', component: OrdenesComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: '', redirectTo: '/ordenes', pathMatch: 'full' } // Redirigir a /ordenes por defecto
];
