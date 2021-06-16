import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowNumComponent } from './show-num/show-num.component';
import { ShowWordComponent } from './show-word/show-word.component';
import { NumsAndWordsComponent } from './nums-and-words/nums-and-words.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowNumComponent,
    ShowWordComponent,
    NumsAndWordsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
