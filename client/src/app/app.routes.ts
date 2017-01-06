import {Routes, RouterModule} from "@angular/router";
import {VisitorHomeComponent} from "./Visitor/visitor-home/visitor-home.component";
import {AdminHomeComponent} from "./Admin/admin-home/admin-home.component";
import {AdminAuthorsComponent} from "./Admin/admin-authors/admin-authors.component";
import {AdminArticlesComponent} from "./Admin/admin-articles/admin-articles.component";


const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent},
  {path: 'admin/articles', component: AdminArticlesComponent},
  {path: 'admin/authors', component: AdminAuthorsComponent},
  {path: '', component: VisitorHomeComponent}
];

export const routing = RouterModule.forRoot(routes);
