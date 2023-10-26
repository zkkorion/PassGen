import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Type } from '@angular/core';
import { TEST_TOKEN } from '../../tokens/test';
import { Test1Component } from '../test1/test1.component';
import { BaseComponent } from '../../types/baseTest';
import { Test2Component } from '../test2/test2.component';

export class AddComponent<C>
{
    constructor(public component: Type<C>) { }
}

function TestFactory(flag: boolean): AddComponent<BaseComponent>
{
    if (flag)
    {
        return new AddComponent(Test1Component);
    } else
    {
        return new AddComponent(Test2Component);
    }
}

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    providers: [{ provide: TEST_TOKEN, useFactory: () => TestFactory(false) }],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent
{
    protected test: string = 'test';
    protected theme: string = 'default';
    i: number = 0;
    changeTheme()
    {
        this.test = `test ${this.i++}`;
    }

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
    ) { }

    public ngOnInit(): void { }

    public ngOnDestroy(): void { }

    public ngAfterViewInit(): void
    {
        this.changeDetectorRef.detectChanges();
    }

}
