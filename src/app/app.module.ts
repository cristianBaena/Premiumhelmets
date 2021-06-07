import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent} from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactanosComponent } from './Components/contactanos/contactanos.component';
import { CreateCategoryComponent } from './Components/create-category/create-category.component';



const routesApp: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: 'create-category', component: CreateCategoryComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    ProductosComponent,
    AboutusComponent,
    ContactanosComponent,
    CreateCategoryComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
