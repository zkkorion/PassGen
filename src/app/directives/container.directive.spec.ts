import { ViewContainerRef } from '@angular/core';
import { ContainerDirective } from './container.directive';
import { TestBed } from '@angular/core/testing';

describe('ContainerDirective', () =>
{
    let viewContainerRef: ViewContainerRef;
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [
                ViewContainerRef
            ]
        });

        viewContainerRef = TestBed.inject(ViewContainerRef);
    });
    it('should create an instance', () =>
    {
        const directive = new ContainerDirective(viewContainerRef);
        expect(directive).toBeTruthy();
    });
});
