import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-default-index-layout',
  imports: [NgIf],
  templateUrl: './default-index-layout.html',
  styleUrl: './default-index-layout.scss',
})
export class DefaultIndexLayout {
  menuAberto = false;

  abrirMenu() {
    this.menuAberto = true;
  }

  fecharMenu() {
    this.menuAberto = false;
  }
}
