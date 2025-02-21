import { Component } from '@angular/core';
import { MyNavBarComponent } from './components/my-nav-bar/my-nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'restaurant-gustov';
}
