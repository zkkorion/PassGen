import { Injectable } from '@angular/core';
import { SettingsDataService } from '../services/settings-data.service';
import { PasswordSettings } from '../types/password';
import { GetRandomInt } from '../utils/functions';

@Injectable({
    providedIn: 'root'
})
export class PasswordGenerator
{
    private passwordSettings: Partial<PasswordSettings> = { numbers: true };
    private generatorsMethods: Map<string, () => string> = new Map();
    private passwordLegth: number = 10;
    private static letters: string = 'abcdefghijklmnopqrstuvwxyz';
    private static specialChars: string = '!@#$%^&*()[]-=_+.,;:?/|';

    constructor(private settingsDataService: SettingsDataService)
    {
        this.InitPasswordSettings();
        this.InitGeneratorsMethods();
    }

    private InitPasswordSettings(): void
    {
        Object.keys(this.settingsDataService.passwordSettings).forEach(key =>
        {
            if (key === 'length')
            {
                this.passwordLegth = this.settingsDataService.passwordSettings.length;
                return;
            }

            if (this.settingsDataService.passwordSettings[key])
            {
                this.passwordSettings[key] = this.settingsDataService.passwordSettings[key];
            }
        });
    }

    private InitGeneratorsMethods()
    {
        this.generatorsMethods.set('letters', () => PasswordGenerator.letters[GetRandomInt(0, PasswordGenerator.letters.length)]);
        this.generatorsMethods.set('capitalLetters', () => PasswordGenerator.letters[GetRandomInt(0, PasswordGenerator.letters.length)].toLocaleUpperCase());
        this.generatorsMethods.set('numbers', () => GetRandomInt(0, 10).toString());
        this.generatorsMethods.set('specialCharacters', () => PasswordGenerator.specialChars[GetRandomInt(0, PasswordGenerator.specialChars.length)]);
    }

    public GeneratePassword(): string
    {
        let password: string = '';
        for (let i = 0; i <= this.passwordLegth; i++)
        {
            let nextSymbolFunc = this.GetNextSymbol.apply(this);

            password += nextSymbolFunc();

        }
        return password;
    }

    private GetNextSymbol(): () => string
    {
        let symbolIndex: number = GetRandomInt(0, Object.keys(this.passwordSettings).length);
        return this.generatorsMethods.get(Object.keys(this.passwordSettings)[symbolIndex]) as () => string;
    }
}
