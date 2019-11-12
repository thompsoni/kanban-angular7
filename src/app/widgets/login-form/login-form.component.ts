import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../../models/jwt';
import { Subscription } from 'rxjs/Subscription';
import { GrowlService } from '../../services/growl.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  public form: FormGroup;
  /* tslint:disable: variable-name */
  private _pending = false;
  /* tslint:enable: variable-name */

  @Output()
  public submitted = new EventEmitter<Credentials>();

  @Input()
  set pending(isPending: boolean) {
    this._pending = isPending;
    console.log('request is pending', isPending);
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  get pending() {
    return this._pending;
  }

  @Input()
  set errorMessage( message: string | null ) {
    if ( message !== null ) {
      this.growlService.showError('Invalid Credentials', 'Login Error');
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private growlService: GrowlService
  ) {
    this.form = this.formBuilder.group({
      password: ['', [ Validators.required, Validators.minLength(6) ] ],
      username: ['', [ Validators.required, Validators.nullValidator ]],
    });
  }

  get username() { return this.form.get('username'); }

  get password() { return this.form.get('password'); }

  public login() {
    this.submitted.emit(this.form.value);
  }

}
