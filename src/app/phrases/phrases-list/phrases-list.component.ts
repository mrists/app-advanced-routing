import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhraseService } from 'src/app/shared/phrase.service';
import { Phrase } from 'src/app/shared/phrase.class';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[];
  selectedID!: number

  constructor(
    private phraseservice: PhraseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.selectedID = +params['id']
    })

    this.phraseservice.getAllPhrases().then(res => {
      this.phrases = res;
    });
  }

  isSelected(phrase: Phrase):boolean {
    return this.selectedID === phrase.id
  }

  onSelect({id}: Phrase) {
      this.router.navigate(['phrases', id]).then()    
    }
}


