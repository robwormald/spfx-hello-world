//web components ES5 shim
import './wc-shim'
import { registerAsCustomElements } from '@angular/elements';
import { platformBrowser } from '@angular/platform-browser'

import { HelloWorld } from './elements/hello-world/hello-world'
import { NgElementDemos } from './elements/elements'
import { NgElementDemosNgFactory } from './elements/elements.ngfactory'

import { Version } from '@microsoft/sp-core-library';

import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

const platform = platformBrowser();


registerAsCustomElements([HelloWorld], () => platformBrowser().bootstrapModuleFactory(NgElementDemosNgFactory, { ngZone: 'noop' }))

export default class NgHelloWorldWebPartWebPart extends BaseClientSideWebPart<HelloWorld> {
  constructor(){
    super();
  }
  ngElement: HTMLElement;
  public render(): void {
    if(!this.renderedOnce){
      const HelloWorldElement = customElements.get('hello-world');
      this.ngElement = new HelloWorldElement();
      this.domElement.appendChild(this.ngElement);
    }
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Description'
          },
          groups: [
            {
              groupName: "Options",
              groupFields: [
                PropertyPaneTextField('name', {
                  label: "Username",
                  value: "Rob"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
