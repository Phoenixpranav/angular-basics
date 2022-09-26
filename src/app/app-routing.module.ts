import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './components/admin/admin.component';
import { AgentComponent } from './components/agent/agent.component';
import { FormComponent } from './components/form/form.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HostExampleComponent } from './components/host-example/host-example.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersontableComponent } from './components/persontable/persontable.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';


const routes: Routes = [
 { path:'', redirectTo:'login',pathMatch:'full'},
{path:'home', component:HomepageComponent},
{path:'aboutus',component:AboutusComponent},
{path:'login',component:LoginpageComponent},

{path:'product',component:ProductdetailsComponent},
{path:'host-example',component:HostExampleComponent},
{path:'form',component:FormComponent},
{path:'pipe-example',component:PipeExampleComponent},
{path:'admin',component:AdminComponent},
{path:'agent',component:AgentComponent},
{path:'reactive-form',component:PersonFormComponent},
{path:'persontable',component:PersontableComponent},
{path:'**',component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
