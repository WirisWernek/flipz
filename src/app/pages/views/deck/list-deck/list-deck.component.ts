import { Component, inject, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { DeckApi } from '../../../../core/api/deck.api'
import { DeckModel } from '../../../../core/models/deck.model'
import { MaterialModule } from '../../../../shared/modules/material/material.module'
import { SharedModule } from '../../../../shared/modules/shared/shared.module'

@Component({
    selector: 'app-list-deck',
    imports: [MaterialModule, SharedModule],
    templateUrl: './list-deck.component.html',
    styleUrl: './list-deck.component.scss',
})
export class ListDeckComponent implements OnInit {
    private api = inject(DeckApi)
    decks$!: Observable<DeckModel[]>

    ngOnInit() {
        this.decks$ = this.api.get()
    }
}
