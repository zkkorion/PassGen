import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Type } from '@angular/core';
import { TEST_TOKEN } from '../../tokens/test';
import { Test1Component } from '../test1/test1.component';
import { BaseComponent } from '../../types/baseTest';
import { Test2Component } from '../test2/test2.component';
import { Observable, Subscriber, Unsubscribable, concat, first, fromEvent, interval, merge, of, range, share, take, takeUntil } from 'rxjs';
import { Test } from '../../types/password';

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
    protected theme: string = 'default';
    i: number = 0;

    public observable: Observable<string> = new Observable();

    sibscriber(subscribe?: Subscriber<string>): void
    {
        let text = 'qu ept';
        this.i++;
        subscribe.next(`${text} ${this.i}`);
    }

    source(): void
    {
        this.observable = new Observable(sibscribe => sibscribe.next('index' + this.i++));
    }

    changeTheme(): void
    {
        this.test = {
            numers: [5, 4, 3, 2, 1],
            strings: ['q', 'w', 'e', 'r', 't', 'y']
        };
    }

    public test: Test = {
        numers: [1, 2, 3, 4, 5],
        strings: ['a', 'b', 'c', 'd']
    };

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
    ) { }

    public ngOnInit(): void
    {
        const clicks = fromEvent(document, 'click');
        const timer = interval(1000).pipe(take(4));
        const sequence = range(1, 10);
        const tupoOf = of('tupoOf');


        const clicksOrTimer = concat(timer, clicks);
        // clicksOrTimer.subscribe((x) => console.log(x));
    }

    public ngOnDestroy(): void { }

    public ngAfterViewInit(): void
    {

        this.changeDetectorRef.detectChanges();
    }

}
