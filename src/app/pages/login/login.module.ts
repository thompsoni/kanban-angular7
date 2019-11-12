import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from '../../widgets/login-form/login-form.component';
import { LoginRoutingModule } from './login.routing.module';
import { UIGrowlModule } from '../../widgets/growl/growl.module';


@NgModule({
    // within module
    declarations: [
        LoginComponent,
        LoginFormComponent,
    ],
    // outside module
    exports: [
        LoginComponent,
    ],
    // dependencies
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        UIGrowlModule,
    ],
})
export class LoginModule {}
