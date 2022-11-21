import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.characters = this.http.get('https://breakingbadapi.com/api/characters?limit=10&offset=10');
  }
 
  openDetails(characters) {
    let split = characters.url.split('/');
    let char_id = split[split.length-2];
    this.router.navigateByUrl(`/tabs/characters/${char_id}`);
  }

}
