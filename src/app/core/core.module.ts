import { NgModule } from '@angular/core';
import { AuthService, UserService } from './services';

@NgModule({
  providers: [
    AuthService,
    UserService
  ]
})
export class CoreModule { }
