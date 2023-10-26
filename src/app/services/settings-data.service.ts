import { Injectable } from '@angular/core';
import { PasswordSettings } from '../types/password';

@Injectable({
    providedIn: 'root'
})
export class SettingsDataService
{

    public passwordSettings: PasswordSettings = {
        capitalLetters: true,
        length: 15,
        letters: true,
        numbers: true,
        specialCharacters: true,
    };

    constructor() { }
}
