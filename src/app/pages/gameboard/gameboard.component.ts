import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service'

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  public state: any;
  public cards: Array<any>;
  public selectedCard: string;
  public clicked: Number;
  public error: String;
  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.getGameState();
  }

  private getGameState() {
    return this.gameService.getGameState()
      .then((state) => {
        this.state = state.state;
        this.cards = this.state.player.cards;
      })
      .catch(() => {
        this.error = 'An error has ocurred. Please, refresh the page.'
      })
  }

  public endTurn() {
    console.log(this.selectedCard);
    return this.gameService.endTurn(this.selectedCard)
      .then((state) => {
        this.selectedCard = '';
        this.state = state.state;
        this.cards = this.state.player.cards;
      })
      .catch((error) => {
        this.selectedCard = '';
        this.error = 'An error has ocurred. Please, refresh the page.'
      });
  }

}
