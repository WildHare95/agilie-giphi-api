import { Component } from '@angular/core';
import {GiphyService} from "./services/giphy.service";
import { map } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agilie-giphy-api';
  // apiResponse

  constructor(public giphyService: GiphyService) {

  }
}
