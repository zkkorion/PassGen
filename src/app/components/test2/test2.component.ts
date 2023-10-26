import { Component } from '@angular/core';
import { BaseComponent } from '../../types/baseTest';

@Component({
    selector: 'app-test2',
    templateUrl: './test2.component.html',
    styleUrls: ['./test2.component.css']
})
export class Test2Component extends BaseComponent
{
    override GeneralMethod(): void
    {
        console.log('Test 2 here');
    }

    ngOnInit()
    {
        this.BaseMethod();
    }
}
