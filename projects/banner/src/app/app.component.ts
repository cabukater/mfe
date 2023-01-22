import { ModalComponent } from './modal/modal.component';
import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'banner';
   apiHost= environment.API_URL;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(){
    console.log(this.apiHost)

  }

  public  openModal(): void {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.dialog.open(ModalComponent, dialogConfig)
    }
  }
