import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-navbar-searcher',
  templateUrl: './navbar-searcher.component.html',
  styleUrls: ['./navbar-searcher.component.css']
})
export class NavbarSearcherComponent {
  
  @Output() onEnterPress: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder : string = '';
  
  debouncer   : Subject<string> = new Subject();
  query       : string = '';
  lastQuery   : string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( value => {
        this.onDebounce.emit(value);
      });
  }

  public search() {
    this.lastQuery = this.query;
    this.onEnterPress.emit( this.query );
  }

  public keyPressed() {
    this.debouncer.next(this.query);
  }
}
