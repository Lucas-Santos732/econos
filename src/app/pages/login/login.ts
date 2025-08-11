import { Component, OnInit } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/auth/service/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayout],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  login = {
    email: '',
    password: '',
  };

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit() {}

  async onSubmit(formData: any) {
    try {
      const result = await this.auth.login(formData);
      console.log(`Login efetaudo: ${result}`);
      this.router.navigate(['index']);
    } catch (error) {
      console.error(error);
    }
  }
}
