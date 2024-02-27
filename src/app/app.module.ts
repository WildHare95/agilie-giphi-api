import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ApiKeyInterceptor } from "./interceptors/api-key.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from "./core/material/material.module";
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SearchComponent } from './components/search/search.component';
import { NoResultsDialogComponent } from './components/no-results-dialog/no-results-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchComponent,
    NoResultsDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
