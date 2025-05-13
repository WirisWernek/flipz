import { Component, inject, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ColecaoApi } from '@api/colecao.api'
import { ColecaoModel } from '@models/colecao.model'
import { MaterialModule } from '@shared/modules/material/material.module'
import { SharedModule } from '@shared/modules/shared/shared.module'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-list-colecao',
    imports: [MaterialModule, SharedModule],
    templateUrl: './list-colecao.component.html',
    styleUrl: './list-colecao.component.scss',
})
export class ListColecaoComponent implements OnInit {
    private api = inject(ColecaoApi)
    private router = inject(Router)
    colecoes$!: Observable<ColecaoModel[]>

    ngOnInit() {
        this.colecoes$ = this.api.get()
    }

	goToGruposByColecao(idColecao: number) {
		console.log('idColecao', idColecao)
        this.router.navigate(['grupo'], {
            state: { id: idColecao },
        })
    }
}
