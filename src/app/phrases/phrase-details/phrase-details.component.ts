import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phrase } from 'src/app/shared/phrase.class';
import { PhraseService } from 'src/app/shared/phrase.service';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase!: Phrase | undefined

  constructor(
    private phraseservice: PhraseService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params) => {
      const id = +params['id']

      if (isNaN(id)) return

      this.phraseservice.getPhrase(id).then(res => this.phrase = res);
    })

  }

  goToPhrasesList() {
    this.router.navigate(['/phrases']).then()
  }

}
