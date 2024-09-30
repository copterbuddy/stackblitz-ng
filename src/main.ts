import { ApplicationConfig, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>First Page From Cop</h1>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

bootstrapApplication(App, appConfig);
