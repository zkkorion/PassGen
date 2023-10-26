import { FormControl } from '@angular/forms';

export interface PasswordProperties
{
    id: number;
    order: number;
    resource: string | null;
    login: string | null;
    password: string | null;
    tabsId: number;
    created: string | null;
}

export interface CardForm
{
    id: FormControl<number>;
    order: FormControl<number>;
    resource: FormControl<string | null>;
    login: FormControl<string | null>;
    password: FormControl<string | null>;
    tabsId: FormControl<number>;
    created: FormControl<string | null>;
}

export interface PasswordSettings
{
    letters: boolean;
    capitalLetters: boolean;
    numbers: boolean;
    specialCharacters: boolean;
    length: number;
}
