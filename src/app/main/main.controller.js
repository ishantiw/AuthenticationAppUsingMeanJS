/* controller lets us bind things to the view or our layouts sucha as variable and functions, thus keeping the script separate from layout*/

export class MainController {
  constructor ($http) {
    'ngInject';

      this.$http =$http;
      this.getMessages();
  }

    getMessages() {

        this.$http.get('http://localhost:5000/api/message').then(result => {
            this.messages = result.data;
        });
    }
    postMessage() {
        this.$http.post('http://localhost:5000/api/message', {msg: this.message});
             console.log("post");
    }
}
