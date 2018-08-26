// Core
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Http
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
// Services
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AppComponent, OrderComponent, OrderDetailComponent, UserComponent, UsersComponent],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'order', component: OrderComponent },
      { path: 'detail/:id', component: OrderDetailComponent },
      { path: '', redirectTo: 'order', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
