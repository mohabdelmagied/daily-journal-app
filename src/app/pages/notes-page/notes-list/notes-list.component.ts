import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../model/note.model';
import { UuidGeneratorService } from 'src/app/global/service/uuid-generator.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes!: Note[];

  public title: string = '';
  public content: string = '';
  public date: string='';
  public hasEmptyInput: boolean = false;

  constructor(private notesService: NotesService, private uuidService: UuidGeneratorService) { }

  ngOnInit(): void {
    this.notesService.dataSource$.subscribe((note) => this.notes = note);
    this.notesService.initialState();
  }

  addNewNote() {
    if (!(this.title && this.content)) {
      this.hasEmptyInput = true;
      return;
    };
    let note = {
      id: this.uuidService.generateUuid(),
      title: this.title,
      content: this.content,
      date: this.date
    }
    this.notesService.postNote(note);
  }
}
