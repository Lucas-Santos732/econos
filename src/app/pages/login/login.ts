import { Component } from '@angular/core';
import { DefaultLoginLayout } from "../../components/default-login-layout/default-login-layout";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayout],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
