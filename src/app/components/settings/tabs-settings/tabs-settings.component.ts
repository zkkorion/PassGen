import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-tabs-settings',
    templateUrl: './tabs-settings.component.html',
    styleUrls: ['./tabs-settings.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsSettingsComponent
{

    protected tabsList = [
        new FormControl('tab name'),
        new FormControl('tab name'),
    ];

}
