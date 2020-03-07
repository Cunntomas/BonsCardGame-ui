import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private http: HttpClient
  ) { }

  public startGame(nickname: string):Promise<any> {
    return this.http.post(
      environment.API_URL + 'api/game/newgame',
      { player: nickname }
    )
    .toPromise()
  }

  public getGameState(): Promise<any> {
    let nickname = localStorage.getItem('nickname');
    return this.http.get(
      environment.API_URL + `api/state/gamestate/${nickname}`,
    )
    .toPromise()
  }

  public endTurn(playedCard?: string): Promise<any> {
    let card = playedCard || undefined;
    let nickname = localStorage.getItem('nickname');
    return this.http.post(
      environment.API_URL + `api/game/next-turn`,
      { player: nickname, playedCard: card }
    )
    .toPromise()
  }
}
