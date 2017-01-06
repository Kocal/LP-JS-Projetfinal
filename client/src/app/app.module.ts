import "rxjs/add/operator/do";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AdminHeaderComponent} from "./Admin/admin-header/admin-header.component";
import {AdminHomeComponent} from "./Admin/admin-home/admin-home.component";
import {VisitorHomeComponent} from "./Visitor/visitor-home/visitor-home.component";
import {VisitorHeaderComponent} from "./Visitor/visitor-header/visitor-header.component";
import {VisitorFooterComponent} from "./Visitor/visitor-footer/visitor-footer.component";
import {routing} from "./app.routes";
import {AdminArticlesComponent} from "./Admin/admin-articles/admin-articles.component";
import {AdminArticleFormComponent} from "./Admin/admin-article-form/admin-article-form.component";
import {RlTagInputModule} from "angular2-tag-input";
import {AdminApiService} from "./Admin/admin-api.service";
import {AdminArticleEditComponent} from "./Admin/admin-article-edit/admin-article-edit.component";
import {MomentModule} from "angular2-moment";
import {AdminArticleDeleteComponent} from "./Admin/admin-article-delete/admin-article-delete.component";
import {VisitorTagsComponent} from "./Visitor/visitor-tags/visitor-tags.component";
import {VisitorAuthorsComponent} from "./Visitor/visitor-authors/visitor-authors.component";
import {VisitorArticleDetailsComponent} from "./Visitor/visitor-article-details/visitor-article-details.component";
import {VisitorTagDetailsComponent} from "./Visitor/visitor-tag-details/visitor-tag-details.component";
import {TruncatePipe} from "angular2-truncate";
import {VisitorAuthorDetailsComponent} from "./Visitor/visitor-author-details/visitor-author-details.component";

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminArticlesComponent,
    VisitorHomeComponent,
    VisitorHeaderComponent,
    VisitorFooterComponent,
    AdminArticleFormComponent,
    AdminArticleEditComponent,
    AdminArticleDeleteComponent,
    VisitorTagsComponent,
    VisitorAuthorsComponent,
    VisitorArticleDetailsComponent,
    VisitorTagDetailsComponent,
    VisitorAuthorDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RlTagInputModule,
    MomentModule,
    routing
  ],
  providers: [
    AdminApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
