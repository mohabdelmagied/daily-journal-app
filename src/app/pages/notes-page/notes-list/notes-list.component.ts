import { Component, OnInit } from '@angular/core';
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

  constructor( private uuidService: UuidGeneratorService) { }

  ngOnInit(): void {

  }

  addNewNote() {

  }
}
