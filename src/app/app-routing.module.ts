import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { UserdashbordComponent } from './pages/userdashbord/userdashbord.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { RegisterComponent } from './pages/register/register.component';
import { ConfirmregisterComponent } from './pages/confirmregister/confirmregister.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { TokenGuardService } from './services/guard/token-guard/token-guard.service';
import { AdminGuardService } from './services/guard/admin-guard/admin-guard.service';
import { AccessdeniedComponent } from './pages/accessdenied/accessdenied.component';
import { UserslistComponent } from './pages/userslist/userslist.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeadminComponent } from './pages/welcomeadmin/welcomeadmin.component';
import { WelcomeuserComponent } from './pages/welcomeuser/welcomeuser.component';
import { SidebaruserComponent } from './pages/sidebaruser/sidebaruser.component';
import { UsersComponent } from './users/users.component';
import { TesttableComponent } from './testtable/testtable.component';
import { ListeComponent } from './pages/liste/liste.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  
  {path:'confirmregister',component:ConfirmregisterComponent},

  {
    path:'confirm',
    component:ConfirmregisterComponent
  
  },

  {
    path:'accessdenied',
    component:AccessdeniedComponent
  
  },
 
  {
    path:'side',
    component:SidebarComponent
  
  },

  {path:'userdashbord',component:UserdashbordComponent,
   canActivate:[TokenGuardService],
   },
   {path:'profile',component:ProfileComponent,
   canActivate:[TokenGuardService],
   },
   {
    path: 'customers',
    component: CustomersComponent
  },

  { path: 'admin',
  component: SidebarComponent,
  canActivate:[TokenGuardService,AdminGuardService],

  children: [
  
    {
      path: '',
      component: WelcomeadminComponent
    },
   
    {
      path: 'customers',
      component: CustomersComponent
    },
      
   
    {
      path: 'users',
      component: UserslistComponent
    },
    {
      path: 'alluser',
      component: UsersComponent
    },

    {
      path: 'adduser',
      component: NewuserComponent
    },
    {
      path: 'edituser/:id',
      component: EdituserComponent
    }
  ]},
   
  { path: 'user',
    component: SidebaruserComponent,
    canActivate:[TokenGuardService],
  
    children: [
    
      {
        path: '',
        component: WelcomeuserComponent
      },
     
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'changepassword',
        component: ChangepasswordComponent
      },
        
    ]
  }
  
]
    
     
   
   
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
