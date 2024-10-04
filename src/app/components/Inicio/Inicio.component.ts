import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./Inicio.component.html',
  styleUrl: './Inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
