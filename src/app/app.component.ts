import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AllowedOperationsResponse } from './rest/allowed-operations-response';
import { RestOperationService } from './rest/rest-operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private restService: RestOperationService) {
    this.availOperations = this.restService.getAllowedOperations();
  }
  title = 'front-ui-app';

  public selectedOperation = "";
  public availOperations: Observable<AllowedOperationsResponse>;
  public numericValue = null;

  public onButtonPress() {
    console.log(`Got params: [${this.selectedOperation}] [${this.numericValue}]`);
    this.restService.send(this.selectedOperation, this.numericValue ?? 0).subscribe();
    this.selectedOperation = "";
    this.numericValue = null;
  }

  public isButtonEnabled():boolean {
    return !(this.selectedOperation != null && this.selectedOperation !== "" && this.numericValue != null)
  }
}
