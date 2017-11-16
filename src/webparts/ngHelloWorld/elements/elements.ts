import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloWorld } from './hello-world/hello-world';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    HelloWorld
  ],
  entryComponents: [HelloWorld]
})
export class NgElementDemos {
  ngDoBootstrap(){
    console.log('bootstrapping')
  }
}

export const elements = [
  HelloWorld
]
