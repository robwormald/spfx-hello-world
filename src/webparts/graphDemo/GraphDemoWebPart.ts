import './elements'
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

export interface IGraphDemoWebPartProps {
  description: string;
}

export default class GraphDemoWebPartWebPart extends BaseClientSideWebPart<IGraphDemoWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<ms-graph-demo></ms-graph-demo>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Graph Demo'
          },
          groups: [
            {
              groupName: 'Options',
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Description'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
