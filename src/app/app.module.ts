import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ListComponent } from "./list/list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { LogoComponent } from "./svg/logo/logo.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

const routes: Routes = [
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "planet/:name",
    component: ListItemComponent
  },
  {
    path: "**",
    redirectTo: "main"
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    HeaderComponent,
    ListItemComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //Angular Material Modules
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,

    //Angular Flex
    FlexLayoutModule,

    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      "search",
      sanitizer.bypassSecurityTrustResourceUrl(
        "assets/icons/round-search-24px.svg"
      )
    );
  }
}
