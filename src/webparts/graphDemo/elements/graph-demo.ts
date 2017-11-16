import { Component, NgModule, Input, ViewEncapsulation } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ms-graph-demo',
  templateUrl: `./graph-demo.html`,
  styleUrls: [ './graph-demo.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class GraphDemo {
  @Input() name = 'Angular'
}

@NgModule({
  imports: [BrowserModule],
  declarations: [GraphDemo],
  entryComponents: [GraphDemo]
})
export class GraphDemoModule {
  ngDoBootstrap(){}
}
