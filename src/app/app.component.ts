import { Component } from '@angular/core';
import { RestOperationService } from './rest/rest-operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private restService: RestOperationService) {}
  title = 'front-ui-app';

  public onButtonPress() {
    this.restService.send();
  }
}
