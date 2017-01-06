import { Component, OnInit } from '@angular/core';
import {AdminApiService} from "../../Admin/admin-api.service";

@Component({
  selector: 'app-visitor-tags',
  templateUrl: './visitor-tags.component.html',
  styleUrls: ['./visitor-tags.component.scss']
})
export class VisitorTagsComponent implements OnInit {

  tags: any[];

  constructor(
    private api: AdminApiService
  ) { }

  ngOnInit() {
    this.api.getTags()
      .then(tags => this.tags = tags)
  }

}
