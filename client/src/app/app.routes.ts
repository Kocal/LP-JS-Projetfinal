import {Routes, RouterModule} from "@angular/router";
import {VisitorHomeComponent} from "./Visitor/visitor-home/visitor-home.component";
import {AdminHomeComponent} from "./Admin/admin-home/admin-home.component";
import {AdminAuthorsComponent} from "./Admin/admin-authors/admin-authors.component";
import {AdminArticlesComponent} from "./Admin/admin-articles/admin-articles.component";
import {AdminArticleEditComponent} from "./Admin/admin-article-edit/admin-article-edit.component";
import {AdminArticleDeleteComponent} from "./Admin/admin-article-delete/admin-article-delete.component";
import {VisitorTagsComponent} from "./Visitor/visitor-tags/visitor-tags.component";
import {VisitorAuthorsComponent} from "./Visitor/visitor-authors/visitor-authors.component";
import {VisitorTagDetailsComponent} from "./Visitor/visitor-tag-details/visitor-tag-details.component";


const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent},
  {path: 'admin/articles', component: AdminArticlesComponent},
  {path: 'admin/articles/:id/edit', component: AdminArticleEditComponent},
  {path: 'admin/articles/:id/delete', component: AdminArticleDeleteComponent},
  {path: 'admin/authors', component: AdminAuthorsComponent},
  {path: '', component: VisitorHomeComponent},
  {path: 'authors', component: VisitorAuthorsComponent},
  {path: 'articles/:id', component: VisitorAuthorsComponent},
  {path: 'tags', component: VisitorTagsComponent},
  {path: 'tags/:tag', component: VisitorTagDetailsComponent},
];

export const routing = RouterModule.forRoot(routes);
