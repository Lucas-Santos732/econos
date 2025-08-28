import { Component, input, output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-default-login-layout',
  imports: [FormsModule, ButtonModule, FloatLabelModule],
  standalone: true,
  templateUrl: './default-login-layout.html',
  styleUrl: './default-login-layout.scss',
})
export class DefaultLoginLayout {
  user = {
    email: '',
    password: '',
  };

  constructor() {}
  
  readonly submit = output<any>();

  submitForm() {
    this.submit.emit(this.user);
  }
}
