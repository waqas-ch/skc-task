import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CoverImageComponent } from './layout/main-layout/cover-image/cover-image.component';
import { CardComponent } from './layout/main-layout/card/card.component';
import { FreqQuestionComponent } from './layout/main-layout/freq-question/freq-question.component';
import { CustomEssayComponent } from './layout/main-layout/custom-essay/custom-essay.component';
import { PaymentComponent } from './layout/main-layout/payment/payment.component';
import { BillComponent } from './layout/main-layout/bill/bill.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ResponseInterceptor } from './interceptors/response.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MainLayoutComponent,
    CoverImageComponent,
    CardComponent,
    FreqQuestionComponent,
    CustomEssayComponent,
    PaymentComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
