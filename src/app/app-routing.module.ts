import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { WelcomeComponent } from "./components/home/welcome/welcome.component";
import { SettingComponent } from "./components/home/setting/setting.component";

import { ProductComponent } from "./components/product/product.component";
import { NewsComponent } from "./components/news/news.component";
import { NewscontentComponent } from "./components/newscontent/newscontent.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "welcome", component: WelcomeComponent },
      { path: "setting", component: SettingComponent },
      { path: "**", redirectTo: "welcome" }
    ]
  },
  { path: "product", component: ProductComponent },
  { path: "news", component: NewsComponent },
  { path: "newscontent", component: NewscontentComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
