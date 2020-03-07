import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service'

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  public nickname: string;
  public error: string;
  constructor(
    private gameService: GameService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  public start() {
    if(!this.nickname) return;
    return this.gameService.startGame(this.nickname)
      .then(() => {
        localStorage.setItem('nickname', this.nickname);
        this.route.navigate(['/gameboard']);
      })
      .catch(() => {
        return this.error = 'An error has ocurred';
      });
  }
}
