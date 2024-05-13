import { Injectable } from '@angular/core';
import { Note } from './model/note.model';
import { Subject } from 'rxjs';
import notes from './mock-notes/notes.json';

/** Task 1 starts here */
@Injectable({
    providedIn: 'root'
})
export class NotesService {
    private notes: Note[] = notes.notes;

    public dataSource$ = new Subject<Note[]>();

    initialState = () => {this.dataSource$.next(this.notes)}

    public postNote(note: Note): void {
        this.notes = [...this.notes, note];
        this.dataSource$.next(this.notes);
    }

    public deleteNote(id: number): void {
        this.notes = this.notes.filter((note) => note.id !== id);
        this.dataSource$.next(this.notes);
    }
}
/** Task 1 ends here */