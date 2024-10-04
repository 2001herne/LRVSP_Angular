import { Routes } from '@angular/router';
import {HomeComponent} from "./_components/home/home.component";
import {LoginComponent} from "./_components/login/login.component";
import {SupportComponent} from "./_components/support/support.component";
import {TreeDataManagerComponent} from "./_components/tree-data-manager/tree-data-manager.component";
import {FileManagementComponent} from "./_components/file-management/file-management.component";
import {authGuard} from "./_guard/auth.guard";
import {FileUploadComponent} from "./_components/file-upload/file-upload.component";
import {FeatureComponent} from "./feature/feature.component";
import {SettingComponent} from "./setting/setting.component";

export const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'support', component: SupportComponent},
  {path: 'feature', component: FeatureComponent},
  {path: 'setting', component: SettingComponent},
  {path: 'app', component: TreeDataManagerComponent},
  {path: 'app/:preselect', component: TreeDataManagerComponent},
  {
    path: 'fileManagement',
    component: FileManagementComponent,
    canActivate: [authGuard],
    children: [{
      path:'',
      redirectTo: 'upload',
      pathMatch: 'full'
    },{
      path: "upload",
      component: FileUploadComponent
    }],
  }
];
