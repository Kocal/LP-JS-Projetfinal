import { Component, OnInit } from '@angular/core';
import {AdminApiService} from "../../Admin/admin-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-visitor-tag-details',
  templateUrl: './visitor-tag-details.component.html',
  styleUrls: ['./visitor-tag-details.component.scss']
})
export class VisitorTagDetailsComponent implements OnInit {

  tag: string;
  articles_id: any[];

  constructor(
    private api: AdminApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: any) => {
        this.tag = param['tag']
        this.api.getArticlesByTag(this.tag)
          .then(articles_id => this.articles_id = articles_id.split('||'))
      });
  }
}
