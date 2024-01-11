import { Component } from "@angular/core";


@Component({
    selector: 'app-foo',
    standalone: true,
    template: `
        <div>
            <h1>Foo</h1>
        </div>
    
    `,
    styles: [
        `
        h1 {
            color: red;
        }
        `
    ]
})
export class FooComponent { }