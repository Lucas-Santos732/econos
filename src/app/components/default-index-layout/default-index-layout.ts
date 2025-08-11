import { Component, input, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Menu } from '../../shared/components/menu/menu';

@Component({
  selector: 'app-default-index-layout',
  imports: [Menu],
  templateUrl: './default-index-layout.html',
  styleUrl: './default-index-layout.scss',
})
export class DefaultIndexLayout {
  menuAberto = false;

  abrirMenu() {
    this.menuAberto = true;
  }
  onMenuMudou(novoEstado: boolean) {
    this.menuAberto = novoEstado; // sincroniza
  }
}
