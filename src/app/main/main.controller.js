/* controller lets us bind things to the view or our layouts sucha as variable and functions, thus keeping the script separate from layout*/

export class MainController {
  constructor () {
    'ngInject';


  }
    postMessage() {
        console.log("post");
    }
}
