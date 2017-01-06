import {Component, OnInit} from "@angular/core";
import {AdminApiService} from "../../Admin/admin-api.service";
import {Article} from "../../article";

@Component({
  selector: 'app-visitor-home',
  templateUrl: './visitor-home.component.html',
  styleUrls: ['./visitor-home.component.scss']
})
export class VisitorHomeComponent implements OnInit {

  articles: Article[];

  constructor(private api: AdminApiService) {
  }

  ngOnInit() {
    this.api.getArticles()
      .then(articles => this.articles = articles)
  }
}
