import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartGameComponent} from './pages/start-game/start-game.component';
import {GameboardComponent} from './pages/gameboard/gameboard.component';


const routes: Routes = [{
  path: '',
  component: StartGameComponent
},{
  path: 'gameboard',
  component: GameboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
