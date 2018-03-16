import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  labelTitle: string = '';

  constructor( private router: Router,
              public title: Title,
            public meta: Meta ) {

    this.getTitleFromData().
    subscribe( data => {

      this.labelTitle = data.title;
      this.title.setTitle(this.labelTitle);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.labelTitle
      };
      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }

  getTitleFromData() {
    return this.router.events
    .filter( event => event instanceof ActivationEnd)
    .filter( (event: ActivationEnd) => event.snapshot.firstChild === null)
    .map( (event: ActivationEnd) => event.snapshot.data );
  }

}
