import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { NavModule } from './components/nav/nav.module';
import { SidebarModule } from './components/sidebar/sidebar.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        NavModule,
        FooterModule,
        SidebarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
