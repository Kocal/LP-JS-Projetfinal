import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-article-form',
  templateUrl: './admin-article-form.component.html',
  styleUrls: ['./admin-article-form.component.scss']
})
export class AdminArticleFormComponent implements OnInit {

  articleAddForm: any;

  public tags = [];

  constructor(public fb: FormBuilder) {
    this.articleAddForm = this.fb.group({
      title: ['', Validators.required],
      slug: ['', Validators.required],
      body: ['', Validators.required],
      tags: [[]],
    });
  }

  ngOnInit() {
  }

  onSubmited() {
    console.log(this.articleAddForm)
    console.log(this.articleAddForm.value)

    if(this.articleAddForm.valid) {
      console.log('valid');
    }
  }
}
