import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { CanComponentDeactivate } from 'src/app/shared/can-deactivate.guard';
import { Phrase } from 'src/app/shared/phrase.class';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit, CanComponentDeactivate {

  phrase!: Phrase | undefined
  editValue!: string
  editLanguage!: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.phrase = data['phrase']
      if (this.phrase) {
        this.editValue = this.phrase.value
        this.editLanguage = this.phrase.language
      }
     
    })
  }

  goToPhrasesList():void {
    this.router.navigate(['/phrases', {id: this.phrase?.id}]).then()
  }

  save(): void {
    if (this.phrase) {
      this.phrase.value = this.editValue
      this.phrase.language = this.editLanguage
    }
  }

  isChanged(): boolean {
    return !(this.phrase?.value === this.editValue && this.phrase.language === this.editLanguage)
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.phrase) return true
    if(!this.isChanged()) return true
    return confirm('Вы не сохранили данные. \nДанные будут утеряны. \nУйти со страницы в любом случае?')
  }
}