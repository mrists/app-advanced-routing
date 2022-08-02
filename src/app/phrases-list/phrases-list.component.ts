import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PHRASES } from '../shared/mock-data';
import { Phrase } from '../shared/phrase.class';
import { PhraseService } from '../shared/phrase.service';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: Phrase[]

  constructor(
    private phraseservice: PhraseService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.phraseservice.getAllPhrases().then(res => {
      this.phrases = res;
    });
  }

  onSelect(phrase: Phrase) {
      console.log(phrase)
      this.router.navigate(['phrase', phrase.id]).then()    
    }
}


