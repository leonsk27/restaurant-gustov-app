import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterModule } from '@angular/router';
@Component({
  selector: 'app-my-nav-bar',
  standalone: true,
  imports: [ CommonModule, RouterModule, MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonModule, RouterOutlet],
  templateUrl: './my-nav-bar.component.html',
  styleUrl: './my-nav-bar.component.scss'
})
export class MyNavBarComponent {
  navItems = [
    { route: '/home', icon: 'home', label: 'Inicio' },
    { route: '/foods', icon: 'restaurant_menu', label: 'Comidas' },
    { route: '/sales', icon: 'shopping_cart', label: 'Ventas' },
    { route: '/reports', icon: 'assessment', label: 'Reportes' }
  ];
  events: string[] = [];
  opened: boolean = false;
  @Output() sidenavToggle = new EventEmitter<boolean>();
  onSidenavOpened() {
    this.sidenavToggle.emit(true);
  }
  onSidenavClosed() {
    this.sidenavToggle.emit(false);
  }
}
