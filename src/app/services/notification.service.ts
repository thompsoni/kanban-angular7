import { Injectable } from '@angular/core';
import { GrowlService } from './growl.service';

@Injectable()
export class NotificationService {
  constructor(private growlService: GrowlService) { }

  public success = (body: string, title = 'Operation successful'): void => {
    this.growlService.showSuccess( body, title );
  }

  public error = (body: string, title = 'An error occured'): void => {
    this.growlService.showError(body, title);
  }

  public warning = (body: string, title = 'Something went wrong'): void => {
    this.growlService.showWarning(body, title);
  }
}
