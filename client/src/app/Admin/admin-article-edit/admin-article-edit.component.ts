import { Component, OnInit } from '@angular/core';
import {AdminApiService} from "../admin-api.service";
import {Article} from "../../article";

@Component({
  selector: 'app-admin-article-edit',
  templateUrl: './admin-article-edit.component.html',
  styleUrls: ['./admin-article-edit.component.scss']
})
export class AdminArticleEditComponent implements OnInit {

  article: Article;

  constructor(public api: AdminApiService) { }

  ngOnInit() {
  }

}
