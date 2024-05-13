import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../model/note.model';

@Component({
  selector: 'app-note', // hint: make input mandatory
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input()
  note!: Note;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }

  deleteNote(id: number) {
    this.notesService.deleteNote(id);
  }
}
