import "rxjs/add/operator/do";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AdminHeaderComponent} from "./Admin/admin-header/admin-header.component";
import {AdminHomeComponent} from "./Admin/admin-home/admin-home.component";
import {VisitorHomeComponent} from "./Visitor/visitor-home/visitor-home.component";
import {VisitorHeaderComponent} from "./Visitor/visitor-header/visitor-header.component";
import {VisitorFooterComponent} from "./Visitor/visitor-footer/visitor-footer.component";
import {routing} from "./app.routes";
import {AdminArticlesComponent} from "./Admin/admin-articles/admin-articles.component";
import {AdminAuthorsComponent} from "./Admin/admin-authors/admin-authors.component";
import {AdminArticleFormComponent} from "./Admin/admin-article-form/admin-article-form.component";
import {RlTagInputModule} from "angular2-tag-input";
import {AdminApiService} from "./Admin/admin-api.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminArticlesComponent,
    AdminAuthorsComponent,
    VisitorHomeComponent,
    VisitorHeaderComponent,
    VisitorFooterComponent,
    AdminArticleFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RlTagInputModule,
    routing
  ],
  providers: [
    AdminApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
