import { CommonModule, PercentPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details';
import { UserPreferencesComponent } from './user-preferences/user-preferences';
import { UserSecurityComponent } from './user-security/user-security';
import { UserSecurityGuard } from './user-security/user-security.guard';

const routes: Routes = [
    {
        path: 'user',
        children:
            [
                { path: 'details', component: UserDetailsComponent },
                { path: 'preferences', component: UserPreferencesComponent },
                { path: 'security', component: UserSecurityComponent, canActivate: [UserSecurityGuard] },
                { path: '', redirectTo: 'details', pathMatch: 'full', },
            ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)],
    declarations: [UserDetailsComponent]
})
export class UserModule { }
