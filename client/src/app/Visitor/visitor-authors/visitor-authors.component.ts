import {Component, OnInit} from "@angular/core";
import {AdminApiService} from "../../Admin/admin-api.service";
import {Author} from "../../author";

@Component({
  selector: 'app-visitor-authors',
  templateUrl: './visitor-authors.component.html',
  styleUrls: ['./visitor-authors.component.scss']
})
export class VisitorAuthorsComponent implements OnInit {

  authors: Author[];

  constructor(private api: AdminApiService) {
  }

  ngOnInit() {
    this.api.getAuthors()
      .then(authors => this.authors = authors)
  }

}
