import { ChangeDetectionStrategy, Component, ComponentRef, ElementRef, Inject, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { PasswordCard } from '../../entities/passwordCard';
import { FormControl, FormGroup } from '@angular/forms';
import { CardForm, Test } from '../../types/password';
import { PasswordGenerator } from '../../entities/passGenerator';
import { lng } from '../../../assets/lang';
import { TEST_TOKEN } from '../../tokens/test';
import { Observable, of } from 'rxjs';
import { BaseComponent } from '../../types/baseTest';
import { ContainerDirective } from '../../directives/container.directive';
import { AddComponent } from '../main/main.component';

interface Coords
{
    x: number;
    y: number;
}
@Component({
    selector: 'app-password-card',
    templateUrl: './password-card.component.html',
    styleUrls: ['./password-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordCardComponent 
{
    @Input() public passwordCard: PasswordCard = new PasswordCard({
        id: 1,
        order: 500,
        resource: 'resource',
        login: 'login',
        password: 'password',
        tabsId: 0,
        created: null
    }, this.passwordGenerator);

    @Input() public set setTest(test: Test)
    {

        this.test = test;
        console.log(this.test);
    }

    public test: Test = { numers: [], strings: [] };

    protected lng = lng.passCard;

    private componentRef: ComponentRef<BaseComponent>;

    constructor(
        private passwordGenerator: PasswordGenerator,
        @Inject(TEST_TOKEN) readonly baseComponent: AddComponent<BaseComponent>,
    ) { }

    public coord: Observable<Coords>;

    public ngAfterViewInit(): void 
    {
        this.coord = new Observable<Coords>((subscribe) =>
        {
            document.body.addEventListener('mousemove', (e) =>
            {
                subscribe.next({ x: e.clientX, y: e.clientY });
            });
        });

    }

    protected CopyToClipboard(): void
    {
        navigator.clipboard.writeText('');
    }

    protected Save(): void { }

    protected ChangeTab(): void { }

    protected GeneratePassword(): void { }

    protected ShowPassword(): void { }

    protected DeleteCard(): void { }

    public TestHandler(): void
    {
        console.log('handere here');
    }

}
