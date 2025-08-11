import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-default-login-layout',
  imports: [FormsModule],
  templateUrl: './default-login-layout.html',
  styleUrl: './default-login-layout.scss',
})
export class DefaultLoginLayout {
  // Inputs existentes
  title = input<string>('');
  subTitle = input<string>('');
  isCadaster = input<boolean>(false);

  // Objeto para coletar os dados do formulário
  loginForm = {
    email: '',
    password: '',
    name: '', // Opcional, dependendo do formulário
  };

  // 1. Crie o output para o componente pai
  readonly submit = output<any>();

  // 2. Função que emite os dados do formulário
  submitForm() {
    this.submit.emit(this.loginForm);
  }
}
