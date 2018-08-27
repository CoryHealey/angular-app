// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Http
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'order', component: OrderComponent },
      { path: 'users', component: UsersComponent },
      { path: 'detail/:id', component: OrderDetailComponent },
      { path: '', redirectTo: 'order', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
