// Core
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Http
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// Components
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
// Services
import { InMemoryDataService } from './in-memory-data.service';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [AppComponent, OrderComponent, OrderDetailComponent],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    RouterModule.forRoot([
      { path: 'order', component: OrderComponent },
      { path: 'detail', component: OrderDetailComponent },
      { path: '', redirectTo: 'order', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
