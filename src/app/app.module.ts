import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component'
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: "**",
    redirectTo:'main',

  },
  {
    path: "main",
    component:MainComponent,
  }
];
@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      ListComponent
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
      MatTableModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,

      //Angular Flex
      FlexLayoutModule,

      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent,

   ]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/round-search-24px.svg'));

  }
}
