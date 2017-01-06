import {Component, OnInit} from '@angular/core';
import {AdminApiService} from "../admin-api.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-article-delete',
  templateUrl: './admin-article-delete.component.html',
  styleUrls: ['./admin-article-delete.component.scss']
})
export class AdminArticleDeleteComponent implements OnInit {

  constructor(private api: AdminApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: any) => {
        this.api.deleteArticle(+param['id'])
          .then(_ => this.router.navigate(['admin/articles']))
          .catch(alert)
      });
  }
}
