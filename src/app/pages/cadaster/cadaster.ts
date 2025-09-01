import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';
import { DefaultCadasterLayout } from '../../components/default-cadaster-layout/default-cadaster-layout';

@Component({
  selector: 'app-cadaster',
  standalone: true,
  imports: [DefaultCadasterLayout],
  templateUrl: './cadaster.html',
  styleUrl: './cadaster.scss',
})
export class Cadaster {
submitForm($event: SubmitEvent) {
throw new Error('Method not implemented.');
}
onSubmit($event: SubmitEvent) {
throw new Error('Method not implemented.');
}
}
