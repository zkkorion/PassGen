import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../types/baseTest';


@Component({
    selector: 'app-test1',
    templateUrl: './test1.component.html',
    styleUrls: ['./test1.component.css']
})
export class Test1Component extends BaseComponent
{
    override GeneralMethod(): void
    {
        console.log('Test 1 here');
    }

    ngOnInit()
    {
        this.BaseMethod();
    }
}
