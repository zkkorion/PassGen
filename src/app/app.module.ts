import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {AppRoutingModule} from './components/app-routing.module';
import {AuthComponent} from './components/auth/auth.component';
import {MainComponent} from './components/main/main.component';
import {InputTextModule} from 'primeng/inputtext';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        MainComponent,
    ],
    imports: [
        BrowserModule,
        ButtonModule,
        AppRoutingModule,
        InputTextModule,
        TooltipModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
