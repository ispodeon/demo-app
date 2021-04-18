import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-blog',
  changeDetection: ChangeDetectionStrategy.OnPush, //for tabs
  encapsulation: ViewEncapsulation.None, // for global styling for alers
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  tabs: any[] = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1', customClass: 'custom' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2' },
    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }
  ];

  value: string | undefined;

  constructor() { }

  ngOnInit() {
  }

  addNewTab(): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: `Dynamic Title ${newTabIndex}`,
      content: `Dynamic content ${newTabIndex}`,
      disabled: false,
      removable: true
    });
  }
 
  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }
  
  onSelect(data: TabDirective): void {
    this.value = data.heading;
    console.log(data.id);
  }
}
