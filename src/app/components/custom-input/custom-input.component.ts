import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit
{
    @Input() public label: string = '';
    @Input() public type: string = 'text';
    @Input() public min: number | null = null;
    @Input() public max: number | null = null;
    @Input() public required: boolean = false;
    @Input() public control: FormControl = new FormControl();
    @Input() public readonly: boolean = false;
    @Input() public styleClass: string = '';
    @Input() public showClear: boolean = false;

    constructor() { }

    public ngOnInit(): void
    {
        if (this.type === 'number')
        {
            this.control.addValidators(Validators.pattern(/[^e]/));
        }
    }

    public clearField(): void
    {
        this.control.setValue(null);
        this.control.markAsTouched();
        this.control.markAsDirty();
    }

}
