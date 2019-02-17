import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestsComponent } from './tests/tests.component';
import { TestAttributeSelectorComponent } from './test-attribute-selector/test-attribute-selector.component';
import { TestClassSelectorComponent } from './test-class-selector/test-class-selector.component';
import { TestStyleComponent } from './test-style/test-style.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestsComponent,
    TestAttributeSelectorComponent,
    TestClassSelectorComponent,
    TestStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
