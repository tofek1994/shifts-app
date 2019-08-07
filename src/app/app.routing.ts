import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ConstraintsAdditionComponent } from './constraints-addition/constraints-addition.component';
const routes: Routes = [
{path : '', component: LoginComponent, pathMatch: 'full'},
{path : 'ConstraintsAddition', component: ConstraintsAdditionComponent, pathMatch: 'full'},
 // {path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
