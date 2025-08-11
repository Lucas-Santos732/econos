import { NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [NgIf],
  standalone: true,
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnChanges {
  @Input() menuAberto: boolean = false;
  @Output() menuMudou = new EventEmitter<boolean>(false);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['menuAberto'] && this.menuAberto) {
      this.menuAberto = true;
      this.menuMudou.emit(true); // envia sinal de volta para o pai
    }
  }

  fecharMenu() {
    this.menuAberto = false;
    this.menuMudou.emit(false); // envia sinal de volta para o pai
  }

  isDarkTheme = false;
  iconThemeHidden = false;

  ngOnInit() {
    // Opcional: carregar preferência salva
    const theme = localStorage.getItem('theme');
    this.isDarkTheme = theme === 'dark';
    this.applyTheme();
  }

  toggleTheme(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.isDarkTheme = checked;
    localStorage.setItem('theme', checked ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme() {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(
      this.isDarkTheme ? 'dark-theme' : 'light-theme'
    );
  }
}
