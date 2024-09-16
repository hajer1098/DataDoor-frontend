import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { UserdashbordComponent } from './pages/userdashbord/userdashbord.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { FormsModule } from '@angular/forms';
import { ConfirmregisterComponent } from './pages/confirmregister/confirmregister.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { AccessdeniedComponent } from './pages/accessdenied/accessdenied.component';
import { UserslistComponent } from './pages/userslist/userslist.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { WelcomeadminComponent } from './pages/welcomeadmin/welcomeadmin.component';
import { WelcomeuserComponent } from './pages/welcomeuser/welcomeuser.component';
import { SidebaruserComponent } from './pages/sidebaruser/sidebaruser.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { TesttableComponent } from './testtable/testtable.component';
import { ListeComponent } from './pages/liste/liste.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    UsersComponent,
    AdmindashbordComponent,
    LoginComponent,
    RegisterComponent,
    UserdashbordComponent,
    ConfirmregisterComponent,
    CustomersComponent,
    AccessdeniedComponent,
    UserslistComponent,
    NewuserComponent,
    WelcomeadminComponent,
    WelcomeuserComponent,
    SidebaruserComponent,
    ProfileComponent,
    EdituserComponent,
    TesttableComponent,
    ListeComponent,
    ChangepasswordComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    {provide :HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
