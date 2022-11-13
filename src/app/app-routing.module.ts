import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { MakeNewListComponent } from './make-new-list/make-new-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch:'full'},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: MainScreenComponent},
  {path: 'make-new-list', component: MakeNewListComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'share', component:ShareComponent},
  {path: 'list', component:ListComponent},
  {path: 'edit', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
