import { HeaderComponent } from "./components/header/header.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductComponent } from "./components/product/product.component";
import { NewsComponent } from "./components/news/news.component";
import { AppRoutingModule } from "./app-routing.module";
import { NewscontentComponent } from "./components/newscontent/newscontent.component";
import { WelcomeComponent } from "./components/home/welcome/welcome.component";
import { SettingComponent } from "./components/home/setting/setting.component";
import { MydemoService } from "./mydemo.service";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    NewsComponent,
    NewscontentComponent,
    WelcomeComponent,
    SettingComponent
  ],
  bootstrap: [AppComponent],
  providers: [MydemoService]
})
export class AppModule {}
