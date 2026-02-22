import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TreinoCi} from './treino-ci';

// O "describe" é o nome da nossa Dungeon de testes
describe('TreinoCi (Arena de Testes)', () => {
  let component: TreinoCi;
  let fixture: ComponentFixture<TreinoCi>;

  // O "beforeEach" é o ritual de invocação: roda antes de CADA teste
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreinoCi] // Como é Angular 20 (Standalone), importamos direto aqui
    }).compileComponents();

    fixture = TestBed.createComponent(TreinoCi);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Dá o primeiro "render" na tela
  });

  // O "it" é o teste em si (uma missão específica)
  it('deve dar spawn com 100 de HP', () => {
    expect(component.hp).toBe(100);
    expect(component.status).toBe('Pronto para a batalha!');
  });

  it('deve perder 20 de HP ao tomar um hit', () => {
    component.tomarDano();
    expect(component.hp).toBe(80);
    expect(component.status).toBe('Ai! Tomou dano.');
  });

  it('não pode ficar com HP negativo e deve dar Game Over', () => {
    // Simulando tomar 6 hits seguidos (120 de dano)
    for (let i = 0; i < 6; i++) {
      component.tomarDano();
    }

    // A vida tem que travar no 0, não pode ir pra -20
    expect(component.hp).toBe(0);
    expect(component.status).toBe('Game Over! Você foi de base.');
  });

  it('deve recuperar todo o HP ao usar a poção', () => {
    component.tomarDano(); // HP cai pra 80
    component.tomarDano(); // HP cai pra 60

    component.usarPocao(); // Usa o item de cura

    expect(component.hp).toBe(100);
    expect(component.status).toBe('HP Restaurado! 100%');
  });
});
