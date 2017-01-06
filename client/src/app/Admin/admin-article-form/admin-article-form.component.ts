import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {AdminApiService} from "../admin-api.service";
import {Author} from "../../author";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-article-form',
  templateUrl: './admin-article-form.component.html',
  styleUrls: ['./admin-article-form.component.scss']
})
export class AdminArticleFormComponent implements OnInit {

  articleAddForm: any;

  submitted = false;
  errorMessage: string;


  authors: Author[] = [];
  tags = [];

  constructor(public api: AdminApiService,
              public router: Router,
              public fb: FormBuilder) {
    this.articleAddForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      created_by: ['', Validators.required],
      tags: [[]],
    });

    this.api.getAuthors().then(authors => this.authors = authors)
  }

  ngOnInit() {
  }

  onSubmitted() {
    this.submitted = true

    console.log(this.articleAddForm)
    console.log(this.articleAddForm.value)

    if (this.articleAddForm.valid) {
      console.log('valid');
      this.api.createArticle(this.articleAddForm.value)
        .then(articleId => this.router.navigate(['admin/articles', articleId]))
        .catch(error => this.errorMessage = error)
    } else {
      this.errorMessage = 'Le formulaire est invalide.'
    }
  }
}
