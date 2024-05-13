import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './pages/notes-page/notes-list/notes-list.component';
import { NoteComponent } from './pages/notes-page/note/note.component';
import { BlueDirective } from './blue.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteComponent,
    BlueDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
