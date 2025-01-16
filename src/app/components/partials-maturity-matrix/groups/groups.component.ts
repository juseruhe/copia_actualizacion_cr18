import { Component, OnInit } from '@angular/core';

/* Models */
import { MatrixGroup } from '@model/MatrixGroup';
import { MatrixSubgroup } from '@model/MatrixSubgroup';

/* Services */
import { MaturityMatrix } from '@service/maturity-matrix/maturity-matrix';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  opened: MatrixGroup = {};

  selected: MatrixSubgroup = {};

  constructor(
    public maturityMatrix: MaturityMatrix
  ) { }

  ngOnInit(): void {
    this.opened = this.maturityMatrix.data.matrixGroupList[0] || {};
    this.opened.selectedIndex = 0;
  }

  show(element: MatrixGroup) {
    this.opened.show = true;
    element.show = !element.show;
    this.opened = element;
    this.opened.selectedIndex = 0;
  }

  select(element: MatrixGroup, index: number) {
    element.selectedIndex = index;
  }

  nextResponse(index: number, groupIndex: number) {
    // block the next module if discomment the code, available the next module
  /*
    if (index === this.opened.matrixSubgroupList.length - 1) {
      this.nextEvent(groupIndex + 1);
    } else {
      this.select(this.opened, index + 1);
    }*/
  }

  backResponse(index: number, groupIndex: number) {
    // block the back module if discomment the code, available the back module
 /*   if (index === 0) {
      this.backEvent(groupIndex - 1);
    } else {
      this.select(this.opened, index - 1);
    }*/
  }

  nextEvent(index: number) {
    this.show(this.maturityMatrix.data.matrixGroupList[index]);
  }

  backEvent(index: number) {
    this.show(this.maturityMatrix.data.matrixGroupList[index]);
  }
}
