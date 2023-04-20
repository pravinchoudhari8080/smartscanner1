import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveComponent } from './approve/approve.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { RejectedComponent } from './rejected/rejected.component';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';
import { UsersComponent } from './users/users.component';
import { ValidateComponent } from './validate/validate.component';
import { AuthguardGuard } from './accounts/authguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: "login",
    // canActivate: [AuthoutGuard],
    component: LoginComponent,
    
  },
  {
    path: "upload",
    // canActivate: [AuthguardGuard],
    component: UploadComponent,
    
  },
  {
    path: "search",
    // canActivate: [AuthguardGuard],
    component: SearchComponent,
    
  },
  {
    path: "approve",
    // canActivate: [AuthguardGuard],
    component: ApproveComponent,
    
  },
  {
    path: "history",
    // canActivate: [AuthguardGuard],
    component: HistoryComponent,
    
  },
  {
    path: "rejected",
    // canActivate: [AuthguardGuard],
    component: RejectedComponent,
    
  },
  {
    path: "validate",
    // canActivate: [AuthguardGuard],
    component: ValidateComponent,
    
  },
  {
    path: "users",
    // canActivate: [AuthguardGuard],
    component: UsersComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
