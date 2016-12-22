import {Component, OnInit, Output} from "@angular/core";
import {AdminService} from "./admin.service";
/**
 * Created by RIKS on 12/13/16.
 */


@Component({
  selector: 'admin-panel',
  templateUrl: 'app/admin/admin.home.html',
})
export class AdminComponent implements OnInit{


  ngOnInit(): void {
    this.getAuthenticated();
  }

  constructor(private adminService: AdminService){}

  getAuthenticated(): void{
    this.adminService.getAuthentication();
  }

}
