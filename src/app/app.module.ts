import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { myapiService} from './services/myapi.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


const routes: Routes = [
  {
    path: '**',
    redirectTo: 'main',

  },
  {
    path: 'main',
    component: MainComponent,
  }
];
@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      ListComponent,
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
      MatSliderModule,
      MatTableModule,
      MatPaginatorModule,
      //Angular Flex
      FlexLayoutModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
      RouterModule.forRoot(routes)
   ],
   providers: [
    myapiService
   ],
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
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
