import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AdminApiService} from "../../Admin/admin-api.service";
import {Author} from "../../author";

@Component({
  selector: 'app-visitor-author-details',
  templateUrl: './visitor-author-details.component.html',
  styleUrls: ['./visitor-author-details.component.scss']
})
export class VisitorAuthorDetailsComponent implements OnInit {

  author: Author;

  constructor(private api: AdminApiService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: any) => {
        this.api.getAuthor(+param['id'])
          .then(author => this.author = author)
      });
  }

}
