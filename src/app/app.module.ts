import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Temp
import { FormsModule } from '@angular/forms';

// Routes
import { APP_ROUTES } from './app.routes';

// Our modules
import { PagesModule } from './pages/pages.module';

// Our components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
