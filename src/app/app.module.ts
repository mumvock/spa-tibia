import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ContentModule } from './components/content/content.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ContentModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
