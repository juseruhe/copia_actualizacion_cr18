import { Component, ContentChild, Inject, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/* Components */
import { DeleteModalComponent } from '@component/crud-modal/delete-modal/delete-modal.component';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

/* Interfaces */
import { ICrudConfig } from '../interfaces/ICrudConfig';
import { IRedirectionConfig } from '../interfaces/IRedirectionConfig';
import { ERole } from '@enum/role.enum';

@Component({
  selector: 'app-matrix-manage',
  templateUrl: './matrix-manage.component.html',
  styleUrls: ['./matrix-manage.component.scss']
})
export class MatrixManageComponent implements OnInit {

  @ContentChild('descriptionContent') descriptionContentTmpl: TemplateRef<any>;
  @ContentChild('elementContent') elementContentTmpl: TemplateRef<any>;

  @Input() title: string;
  @Input() description: string;
  @Input() keyModule: string;
  @Input() grandfatherKey: string;

  parent: any;
  recordList: any[] = [];
  selected: any;

  canCrud = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router,
    @Inject('CRUD_CONFIG') public crudConfig: ICrudConfig,
    @Inject('REDIRECTION_CONFIG') public redirectionConfig: IRedirectionConfig,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.parent = this.activatedRoute.snapshot.data.parent || {};
    const recordList = this.activatedRoute.snapshot.data.recordList || [];
    this.recordList = recordList.map(record => {
      record.show = true;
      return record;
    });

    this.canCrud = [ERole.SUPERADMIN, ERole.ADMIN].includes(this.storageService.getRole());
  }

  async create(): Promise<void> {
    const modalRef = this.modalService.open(this.crudConfig.createClass, {
      size: 'lg'
    });
    modalRef.componentInstance.data = { parent: this.parent, otherData: this.activatedRoute.snapshot.data };
    const response = await modalRef.result;
    if (response) {
      const result = response[this.keyModule];
      result.show = true;
      this.recordList.push(result);
    }
  }

  async edit(record: any): Promise<void> {
    const modalRef = this.modalService.open(this.crudConfig.editClass, {
      size: 'lg',
    });
    modalRef.componentInstance.data = { record, parent: this.parent, otherData: this.activatedRoute.snapshot.data };
    const response = await modalRef.result;
    if (response) {
      const result = response[this.keyModule];
      this.recordList = this.recordList.map(r => r.id === result.id ? result : r );
    }
  }

  async delete(record: any): Promise<void> {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.title = `Eliminar ${this.crudConfig.name}`;
    modalRef.componentInstance.data = { record };
    const response = await modalRef.result;
    if (response) {
      const result = response[this.keyModule];
      this.recordList = this.recordList.filter(r => r.id !== result.id );
    }
    console.log(response);
  }

  select(record: any) {
    if (this.redirectionConfig.nextPath) {
      this.selected = record;
    }
  }

  show(record: any) {
    record.show = !record.show;
  }

  back() {
    if (this.parent) {
      this.router.navigate([`${this.redirectionConfig.backPath}${ this.redirectionConfig.backPathRelation ?
        this.parent[this.grandfatherKey] : ''}`]);
    }
  }

  next() {
    if (this.redirectionConfig.nextPath) {
      this.router.navigate([`${this.redirectionConfig.nextPath}${this.selected.id}`]);
    }
  }

}
