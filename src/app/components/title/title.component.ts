import { Component } from '@angular/core';
import { TitleStartComponent } from '../title-start/title-start.component';
import { TitlePhotosComponent } from '../title-photos/title-photos.component';
import { TitleActorsComponent } from '../title-actors/title-actors.component';
import { TitleStoryComponent } from '../title-story/title-story.component';
import { TitleSimilaryComponent } from '../title-similary/title-similary.component';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [

    //Components
    TitleStartComponent,
    TitlePhotosComponent,
    TitleActorsComponent,
    TitleStoryComponent,
    TitleSimilaryComponent,
  ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

}
