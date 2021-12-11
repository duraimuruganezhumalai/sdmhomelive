import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';
import { WeddingComponent } from './wedding/wedding.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'home', component:HomeComponent},
  {path : 'about', component: AboutComponent},
  {path : 'portfolio', component: PortfolioComponent},
  {path : 'albums', component: AlbumsComponent},
  {path : 'wedding', component : WeddingComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'home/login', component : LoginComponent},
  {path : 'register', component :RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
