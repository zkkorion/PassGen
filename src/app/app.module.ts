import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './components/app-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { MainComponent } from './components/main/main.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { PasswordSettingsComponent } from './components/settings/password-settings/password-settings.component';
import { TabsSettingsComponent } from './components/settings/tabs-settings/tabs-settings.component';
import { LanguageSettingsComponent } from './components/settings/language-settings/language-settings.component';
import { PasswordCardComponent } from './components/password-card/password-card.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { ContainerDirective } from './directives/container.directive';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        MainComponent,
        SettingsComponent,
        CustomInputComponent,
        PasswordSettingsComponent,
        TabsSettingsComponent,
        LanguageSettingsComponent,
        PasswordCardComponent,
        Test1Component,
        Test2Component,
        ContainerDirective
    ],
    imports: [
        BrowserModule,
        ButtonModule,
        AppRoutingModule,
        InputTextModule,
        TooltipModule,
        CheckboxModule,
        FormsModule,
        InputNumberModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
