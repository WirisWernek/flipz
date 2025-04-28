import { Component, inject, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ColecaoApi } from '../../../../core/api/colecao.api'
import { ColecaoModel } from '../../../../core/models/colecao.model'
import { MaterialModule } from '../../../../shared/modules/material/material.module'
import { SharedModule } from '../../../../shared/modules/shared/shared.module'

@Component({
    selector: 'app-list-colecao',
    imports: [MaterialModule, SharedModule],
    templateUrl: './list-colecao.component.html',
    styleUrl: './list-colecao.component.scss',
})
export class ListColecaoComponent implements OnInit {
    private api = inject(ColecaoApi)
    colecoes$!: Observable<ColecaoModel[]>

    ngOnInit() {
        this.colecoes$ = this.api.get()
    }
}
