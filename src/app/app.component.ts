import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kljnWebsite';

  onClickFabebook() {
    window.open('https://www.facebook.com/Kishan-Lal-Jagannath-200917289964544', '_blank');
  }

  onClickBlog() {
    window.open('https://flavourofspices.blogspot.com/', '_blank');
  }
}
