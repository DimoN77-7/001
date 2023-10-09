import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-emoji-list',
  template: '<h1>Emoji list</h1>'
})
export class EmojiListComponent {
  constructor(
    private  httpClient: HttpClient,
    ) {}

  ngOnInit() {
    this.httpClient
      // .get('http://194.87.237.48:5000/swagger/v1/swagger.json')
      .get('https://api.github.com/emojisye d')
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
