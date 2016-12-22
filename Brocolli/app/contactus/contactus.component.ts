import {Component} from "@angular/core";
import {applyRedirects} from "@angular/router/src/apply_redirects";
import {Router} from "@angular/router";
/**
 * Created by RIKS on 12/12/16.
 */

@Component({
  selector: 'contact-us',
  templateUrl: 'app/contactus/contactus.component.html',
})
export class ContactUsComponent {

  constructor(private router: Router){}

  contactusSubmit(){
    alert("Submitted");
    this.router.navigate(['home']);

  }

}
