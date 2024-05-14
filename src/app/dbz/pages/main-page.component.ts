import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZServiceService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
 constructor(private dbzService: DBZServiceService){}

 get characters():Character[]{
  return this.dbzService.characters;
 }

 onDeleteCharacter(id: string): void {
  this.dbzService.deleteCharacterById(id);
 }

 addCharacter(character : Character): void{
  this.dbzService.onNewCharacter(character)
 }
}
