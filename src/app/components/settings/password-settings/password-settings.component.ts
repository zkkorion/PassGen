import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-password-settings',
    templateUrl: './password-settings.component.html',
    styleUrls: ['./password-settings.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordSettingsComponent
{
    protected generatorSettings = [
        { label: 'letters', checked: false },
        { label: 'capital letters', checked: false },
        { label: 'numbers', checked: false },
        { label: 'special characters', checked: false },
    ];

    protected length = new FormControl(10);
}
