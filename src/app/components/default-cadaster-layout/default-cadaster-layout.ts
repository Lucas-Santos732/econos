import { routes } from './../../app.routes';
import {
  Component,
  input,
  output,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-default-cadaster-layout',
  imports: [RouterLink, ButtonModule],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './default-cadaster-layout.html',
  styleUrl: './default-cadaster-layout.scss',
})
export class DefaultCadasterLayout {}
