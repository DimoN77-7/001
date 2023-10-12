import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-emoji-list',
  template: '<h1>Emoji list</h1>',
  // standalone: true
})
export class EmojiListComponent {
  constructor(
    private  httpClient: HttpClient,
    ) {}

  ngOnInit() {
    this.httpClient
      .get('http://194.87.237.48:5000/Advert/{"0f439eba-d58c-42cd-86c3-4e15a486e9ec"}')
      // .get('https://api.github.com/emojis')
      .subscribe((data) => {
        console.log(data);
      },
        (errorResponse) => {
          console.log(errorResponse.error.message);
        },
        () => {

        })
    //make request
  }
}
