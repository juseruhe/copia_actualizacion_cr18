import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@env/environment';

/* API */
import { CompanyService } from '@api/company/company.service';
import { PersonService } from '@api/person/person.service';

/* Enums */
import { Knowledge } from '@enum/knowledge.enum';

/* Utils */
import { StorageService } from '@util/storage/storage.service';
import { DateManageService } from '@util/date-manage/date-manage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-where-are-your-company',
  templateUrl: './where-are-your-company.component.html',
  styleUrls: ['./where-are-your-company.component.scss']
})
export class WhereAreYourCompanyComponent implements OnInit {

  knowledge = Knowledge;
  selected: number;
  lock = false;
  inside = false;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private dateManageService: DateManageService,
    private companyService: CompanyService,
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.inside = this.activatedRoute.snapshot.data.inside || false;
    this.selected = this.storageService.getKnowledge();
    const knowledgeAt = this.storageService.getKnowledgeAt();
    this.lock = this.selected === 3 || (knowledgeAt && !this.dateManageService.enableByMonth(knowledgeAt, environment.KNOWLEDGE_MONTH));
  }

  select(knowledge: number) {
    if (this.lock) {
      return;
    }
    this.selected = knowledge;
  }

  async next() {
    try {
      const type = this.storageService.getType();
      await (type === 1 ? this.companyService.patchKnowledge(this.selected) : this.personService.patchKnowledge(this.selected));
      if (this.inside) {
        this.toastrService.success('Estado actualizado con éxito.', 'Felicidades!');
      } else {
        const route = this.selected === this.knowledge.ALREADY ? '/outside-maturity-matrix' : '/outside-bim-presentation';
        this.router.navigate([route]);
      }
    } catch (error) {
      console.warn('Error@WhereAreYourCompanyComponent@next:', error);
    }
  }

}
