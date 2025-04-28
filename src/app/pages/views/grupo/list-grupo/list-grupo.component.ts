import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GrupoApi } from '../../../../core/api/grupo.api';
import { GrupoModel } from '../../../../core/models/grupo.model';
import { MaterialModule } from '../../../../shared/modules/material/material.module';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';

@Component({
  selector: 'app-list-grupo',
  imports: [MaterialModule, SharedModule],
  templateUrl: './list-grupo.component.html',
  styleUrl: './list-grupo.component.scss'
})
export class ListGrupoComponent implements OnInit {
    private api = inject(GrupoApi)
    grupos$!: Observable<GrupoModel[]>

    ngOnInit() {
        this.grupos$ = this.api.get()
    }
}