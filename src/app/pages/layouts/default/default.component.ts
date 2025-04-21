import { Component } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-default',
    imports: [RouterOutlet, MatToolbarModule],
    templateUrl: './default.component.html',
    styleUrl: './default.component.scss',
})
export class DefaultComponent {}
