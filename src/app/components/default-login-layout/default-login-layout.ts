import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule, Validators, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RouterLink } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DividerModule } from 'primeng/divider';
import { MessageModule } from 'primeng/message';

interface Login {
  email: string;
  password: string;
}
@Component({
  selector: 'app-default-login-layout',
  imports: [
    FormsModule,
    ButtonModule,
    FloatLabelModule,
    RouterLink,
    PasswordModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    DividerModule,
    MessageModule,
  ],
  standalone: true,
  templateUrl: './default-login-layout.html',
  styleUrl: './default-login-layout.scss',
})
export class DefaultLoginLayout {
  login: Login = {
    email: '',
    password: '',
  };
  loginInvalido: boolean = false;
  @Output() meuEvento = new EventEmitter<any>();
  /**
   * 2. Defina o método onSubmit que é chamado quando o formulário é submetido.
   * Ele recebe uma referência ao formulário (NgForm) como argumento.
   * @param form A instância do NgForm, injetada pelo template.
   */
  onSubmit(form: NgForm): void {
    // É uma boa prática verificar a validade aqui também, como uma última barreira.
    if (form.invalid) {
      return;
    }

    // this.loginInvalido = true;
    this.meuEvento.emit(this.login);

    return;
    // console.log('Formulário enviado com sucesso!', form.value);

    // form.resetForm();
  }
}
