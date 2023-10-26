import { FormControl, FormGroup } from '@angular/forms';
import { CardForm, PasswordProperties } from '../types/password';
import { isDefined } from '../utils/general-type-guard';
import { PasswordGenerator } from './passGenerator';

export class PasswordCard
{
    public id: number = 0;
    public order: number = 500;
    public resource: string | null = null;
    public login: string | null = null;
    public password: string | null = null;
    public tabsId: number = 0;
    public created: string | null = null;
    public isPassVisible: boolean = false;
    public form: FormGroup<CardForm> | null = null;
    constructor(
        public props: PasswordProperties,
        private passwordGenerator: PasswordGenerator,
    )
    {
        this.initFields(props);
        this.initForm();
    }

    private initFields(props: PasswordProperties): void
    {
        Object.keys(props).forEach(key =>
        {
            this[key] = isDefined(props[key]) ? props[key] : this[key];
        });
    }

    public initForm(): void
    {
        this.form = new FormGroup({
            id: new FormControl(this.id),
            order: new FormControl(this.order),
            resource: new FormControl(this.resource),
            login: new FormControl(this.login),
            password: new FormControl(this.password),
            tabsId: new FormControl(this.tabsId),
            created: new FormControl(this.created),
        });
    }

    public GeneratePassword(): void
    {
        this.password = this.passwordGenerator.GeneratePassword();
    }

    public toggleVisible(): void
    {
        this.isPassVisible = !this.isPassVisible;
    }
}
