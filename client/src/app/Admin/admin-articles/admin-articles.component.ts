import {Component, OnInit} from "@angular/core";
import {AdminApiService} from "../admin-api.service";
import {Article} from "../../article";

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.scss']
})
export class AdminArticlesComponent implements OnInit {

  articles: Article[];

  constructor(public api: AdminApiService) {
  }

  ngOnInit() {
    this.api.getArticles()
      .then(articles => this.articles = articles)
      .catch(alert)
  }

}
