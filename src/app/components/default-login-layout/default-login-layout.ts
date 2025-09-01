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
@Component({
  selector: 'app-default-login-layout',
  imports: [
    FormsModule,
    ButtonModule,
    FloatLabelModule,
    RouterLink,
    PasswordModule,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './default-login-layout.html',
  styleUrl: './default-login-layout.scss',
})
export class DefaultLoginLayout {
  login = {
    email: '',
    password: '',
  };

  constructor() {}

  readonly submit = output<any>();

  submitForm() {
    this.submit.emit(this.login);
  }
}
