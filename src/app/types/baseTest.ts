import { Component, Input } from '@angular/core';

@Component({ template: '' })
export class BaseComponent
{
    @Input() public text: string = '';

    GeneralMethod(): void { };

    public BaseMethod(): void
    {
        console.log('Base class');
    }

    public handler(): void
    {

    }
}
