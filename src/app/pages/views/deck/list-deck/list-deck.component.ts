import { Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DeckApi } from '@api/deck.api'
import { DeckModel } from '@models/deck.model'
import { MaterialModule } from '@shared/modules/material/material.module'
import { SharedModule } from '@shared/modules/shared/shared.module'
import { BehaviorSubject, Observable } from 'rxjs'

@Component({
    selector: 'app-list-deck',
    imports: [MaterialModule, SharedModule],
    templateUrl: './list-deck.component.html',
    styleUrl: './list-deck.component.scss',
})
export class ListDeckComponent implements OnInit {
    private api = inject(DeckApi)
    private activatedRoute = inject(ActivatedRoute)
    private router = inject(Router)
    decks$!: Observable<DeckModel[]>

    ngOnInit() {
        const decks = this.activatedRoute.snapshot.data['decks'] as DeckModel[]

        if (decks) {
            this.decks$ = new BehaviorSubject(decks)
        } else {
            this.decks$ = this.api.get()
        }
    }

    goToFlashCardsByDeck(idDeck: number) {
        this.router.navigate(['flash-card'], {
            state: { id: idDeck },
        })
    }
}
