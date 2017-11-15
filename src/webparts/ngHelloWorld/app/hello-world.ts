import { Component, NgModule, Input } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'hello-world',
  template: `
    <div>
      Hello, my name is {{name}}
    </div>
  `,
  styleUrls: [
   // './hello-world.scss'
  ]
})
export class HelloWorld {
  @Input() name = 'Angular'
}

@NgModule({
  imports: [BrowserModule],
  declarations: [HelloWorld],
  entryComponents: [HelloWorld]
})
export class HelloWorldModule {
  ngDoBootstrap(){
    console.log('bootstrapping...')
  }
}
