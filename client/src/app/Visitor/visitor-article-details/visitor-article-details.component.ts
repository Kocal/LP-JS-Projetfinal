import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdminApiService} from "../../Admin/admin-api.service";
import {Article} from "../../article";

@Component({
  selector: 'app-visitor-article-details',
  templateUrl: './visitor-article-details.component.html',
  styleUrls: ['./visitor-article-details.component.scss']
})
export class VisitorArticleDetailsComponent implements OnInit {

  article: Article;

  constructor(
    private api: AdminApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: any) => {
        this.api.getArticle(+param['id'])
          .then(article => this.article = article)
      });
  }
}
