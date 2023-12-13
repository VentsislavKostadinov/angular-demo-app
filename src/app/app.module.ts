import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { AppServersComponent } from './app-servers/app-servers.component';
import { WarningAlertComponentComponent } from './warning-alert-component/warning-alert-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AppServersComponent,
    WarningAlertComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
