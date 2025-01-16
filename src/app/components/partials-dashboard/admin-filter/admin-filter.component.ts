import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

/* Models */
import { Category } from '@model/Category';
import { City } from '@model/City';
import { Company } from '@model/Company';
import { Person } from '@model/Person';
import { MatrixPublish } from '@model/MatrixPublish';
import { State } from '@model/State';

/* API */
import { CategoryService } from '@api/category/category.service';
import { CityService } from '@api/city/city.service';
import { CompanyService } from '@api/company/company.service';
import { PersonService } from '@api/person/person.service';
import { StateService } from '@api/state/state.service';

/* Resolvers */
import { AllSizeCompanyResolverService } from '@resolver/all-size-company/all-size-company-resolver.service';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-admin-filter',
  templateUrl: './admin-filter.component.html',
  styleUrls: ['./admin-filter.component.css']
})
export class AdminFilterComponent implements OnInit, OnDestroy {

  $destroy = new Subject<boolean>();
  @Input() loader = false;
  @Input() matrixPublishList: MatrixPublish[] = [];

  form: FormGroup;

  periodList = [];
  sizeCompanyList: string[] = [];
  categoryList: Category[] = [];
  cityList: City[] = [];
  targetCityList: City[] = [];
  stateList: State[] = [];
  companyList: Company[] = [];
  personList: Person[] = [];

  @Output() filterEvent: EventEmitter<any> = new EventEmitter<any>();

  show = true;

  previousFilters: any = null;

  constructor(
    private fb: FormBuilder,
    private allSizeCompanyResolverService: AllSizeCompanyResolverService,
    private categoryService: CategoryService,
    private cityService: CityService,
    private stateService: StateService,
    private companyService: CompanyService,
    private personService: PersonService
  ) { }

  async ngOnInit() {
    this.buildForm();
    this.getData();
  }

  ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }

  private getData() {
    this.allSizeCompanyResolverService.resolve(null, null)
      .then(response => {
        this.sizeCompanyList = response;
      });
    this.categoryService.getAll()
      .then(response =>{
        this.categoryList = response.data.categoryList;
      })
    this.stateService.getAll()
      .then(response =>{
        this.stateList = response.data.stateList;
      });
    this.cityService.getAll()
      .then(response =>{
        this.cityList = response.data.cityList;
      });
    this.getCompanyFilter();
    this.getPersonFilter();
  }

  private async getCompanyFilter(): Promise<void> {
    try {
      const filters = _.cloneDeep(this.form.value);
      delete filters.type;
      delete filters.personId;
      const response = await this.companyService.getByFilter(filters);
      this.companyList = response.data.companyList;
    } catch (error) {
      console.warn('Error@AdminFilterComponent@getCompanyBy:', error);
    }
  }

  private async getPersonFilter(): Promise<void> {
    try {
      const filters = _.cloneDeep(this.form.value);
      delete filters.type;
      delete filters.allyCamacol_like;
      delete filters.company$categoryId_like;
      delete filters.company$sizeCompany_like;
      delete filters.companyId;
      const response = await this.personService.getByFilter(filters);
      this.personList = response.data.personList;
    } catch (error) {
      console.warn('Error@AdminFilterComponent@getPersonFilter:', error);
    }
  }

  private filterPersonAndCompany(): void {
    switch (+this.form.controls.type.value) {
      case 1:
        this.getCompanyFilter();
        break;
      case 2:
        this.getPersonFilter();
        break;
    }
  }

  private startListeningFilters(): void {
    this.form.valueChanges.pipe(takeUntil(this.$destroy), debounceTime(200)).subscribe((value) => {
      this.filterPersonAndCompany()
    });
  }

  private buildForm(): void {
    this.form = this.fb.group({
      matrixPublishId: [0, []],
      type: [0, []],
      companyId: ['', []],
      personId: ['', []],
      company$sizeCompany_like: ['', []],
      company$categoryId_like: ['', []],
      city$stateId_equal: ['', []],
      cityId_equal: ['', []],
      allyCamacol_like: ['', []],
      belongsBim_like: ['', []],
      preBim: ['', []]
    });
    this.change();
    this.startListeningFilters()
  }

  changeState(event) {
    this.form.controls.cityId_like.patchValue(null);
  }

  change() {
    const filters = _.cloneDeep(this.form.value);
    console.log("filtros", filters);
    if (!_.isEqual(filters, this.previousFilters)) {
      this.filterEvent.emit(filters);
      this.previousFilters = filters;
    }
  }

  changeShow() {
    this.show = !this.show;
  }

  isEqual(): boolean {
    return _.isEqual(this.form.value, this.previousFilters);
  }

  changeType(event) {
    this.form.controls.companyId.patchValue('', {emitEvent: false});
    this.form.controls.personId.patchValue('', {emitEvent: false});
    this.form.controls.company$sizeCompany_like.patchValue('', {emitEvent: false});
    this.form.controls.company$categoryId_like.patchValue('', {emitEvent: false});
    this.form.controls.allyCamacol_like.patchValue('', {emitEvent: false});
    this.form.updateValueAndValidity();
  }

}
