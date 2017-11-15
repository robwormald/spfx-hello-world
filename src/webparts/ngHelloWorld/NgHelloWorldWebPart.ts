import './wc-shim'
import { registerAsCustomElements } from '@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { HelloWorldModule, HelloWorld } from './app/hello-world'

import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

const platform = platformBrowserDynamic();

registerAsCustomElements([HelloWorld], () => platform.bootstrapModule(HelloWorldModule, { ngZone: 'noop' }));




export default class NgHelloWorldWebPartWebPart extends BaseClientSideWebPart<HelloWorld> {
  element: HTMLElement;
  public render(): void {
    if (!this.renderedOnce) {
      const HelloWorld = customElements.get('hello-world');

    }
    this.domElement.innerHTML = `<hello-world name="${this.properties.name}"></hello-world>`;
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
