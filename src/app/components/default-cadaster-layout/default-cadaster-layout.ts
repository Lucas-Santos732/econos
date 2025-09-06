import { routes } from './../../app.routes';
import {
  Component,
  input,
  output,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RouterLink } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { PrimeIcons } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-default-cadaster-layout',
  imports: [
    FormsModule,
    ButtonModule,
    FloatLabelModule,
    RouterLink,
    PasswordModule,
    DividerModule,
    InputTextModule,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './default-cadaster-layout.html',
  styleUrl: './default-cadaster-layout.scss',
})
export class DefaultCadasterLayout {
  cadaster = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    SenhaConfirmar: '',
  };

  constructor() {}
}
