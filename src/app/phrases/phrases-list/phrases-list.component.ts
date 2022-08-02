import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhraseService } from 'src/app/shared/phrase.service';
import { Phrase } from 'src/app/shared/phrase.class';

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


