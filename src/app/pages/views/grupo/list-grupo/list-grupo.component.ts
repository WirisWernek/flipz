import { Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { GrupoApi } from '@api/grupo.api'
import { GrupoModel } from '@models/grupo.model'
import { MaterialModule } from '@shared/modules/material/material.module'
import { SharedModule } from '@shared/modules/shared/shared.module'
import { BehaviorSubject, Observable } from 'rxjs'

@Component({
    selector: 'app-list-grupo',
    imports: [MaterialModule, SharedModule],
    templateUrl: './list-grupo.component.html',
    styleUrl: './list-grupo.component.scss',
})
export class ListGrupoComponent implements OnInit {
    private api = inject(GrupoApi)
    private router = inject(Router)
    private activatedRoute = inject(ActivatedRoute)
    grupos$!: Observable<GrupoModel[]>

    ngOnInit() {
        const grupos = this.activatedRoute.snapshot.data['grupos'] as GrupoModel[]

        if (grupos) {
            this.grupos$ = new BehaviorSubject(grupos)
        } else {
            this.grupos$ = this.api.get()
        }
    }

    goToDecksByGrupo(idGrupo: number) {
        this.router.navigate(['deck'], {
            state: { id: idGrupo },
        })
    }
}
