import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TreinoCi} from './features/treino-ci/treino-ci';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TreinoCi],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('treino-cicd');
}
