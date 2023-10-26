import { ChangeDetectionStrategy, Component, ComponentRef, ElementRef, Inject, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { PasswordCard } from '../../entities/passwordCard';
import { FormControl, FormGroup } from '@angular/forms';
import { CardForm } from '../../types/password';
import { PasswordGenerator } from '../../entities/passGenerator';
import { lng } from '../../../assets/lang';
import { TEST_TOKEN } from '../../tokens/test';
import { of } from 'rxjs';
import { BaseComponent } from '../../types/baseTest';
import { ContainerDirective } from '../../directives/container.directive';
import { AddComponent } from '../main/main.component';

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

    protected lng = lng.passCard;

    @ViewChild(ContainerDirective, { static: true }) public container: ContainerDirective;

    private componentRef: ComponentRef<BaseComponent>;

    constructor(
        private passwordGenerator: PasswordGenerator,
        @Inject(TEST_TOKEN) readonly baseComponent: AddComponent<BaseComponent>,
    ) { }

    public ngOnInit(): void
    {
        this.container.viewContainerRef.clear();
        this.container.viewContainerRef.createComponent(this.baseComponent.component).instance.text = 'test text';
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
