import { Component } from '@angular/core'
import { MaterialModule } from '@shared/modules/material/material.module'
import { SharedModule } from '@shared/modules/shared/shared.module'

@Component({
    selector: 'app-form-colecao',
    imports: [MaterialModule, SharedModule],
    templateUrl: './form-colecao.component.html',
    styleUrl: './form-colecao.component.scss',
})
export class FormColecaoComponent {}
