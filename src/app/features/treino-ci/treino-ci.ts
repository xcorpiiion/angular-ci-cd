import {Component} from '@angular/core';

@Component({
  selector: 'app-treino-ci',
  imports: [],
  templateUrl: './treino-ci.html',
  styleUrl: './treino-ci.scss',
  standalone: true,
})
export class TreinoCi {
  hp = 100;
  status = 'Pronto para a batalha!';

  tomarDano() {
    this.hp -= 20;
    if (this.hp <= 0) {
      this.hp = 0;
      this.status = 'Game Over! Você foi de base.';
    } else {
      this.status = 'Ai! Tomou dano.';
    }
  }

  usarPocao() {
    this.hp = 100;
    this.status = 'HP Restaurado! 100%';
  }
}
