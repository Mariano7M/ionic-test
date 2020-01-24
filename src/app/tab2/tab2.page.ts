import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Dto } from '../models/dto';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public title: string;
  public list: Dto[];
  constructor(public alertController: AlertController) {
    this.title = 'List example';
    this.list = [
      {
        title: 'Title 1',
        subTitle: 'Subtitle 1',
        img: 'assets/img/batman-logo-01.jpg',
        text: 'Some text ramdom'
      },
      {
        title: 'Title 2',
        subTitle: 'Subtitle 2',
        img: 'assets/img/batman-logo-02.png',
        text: 'some text ramdom'
      },
      {
        title: 'Title 3',
        subTitle: 'Subtitle 3',
        img: 'assets/img/batman-logo-03.png',
        text: 'some text ramdon'
      }
    ];
  }

  async showAlert(dto: Dto) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: dto.text,
      buttons: ['OK']
    });

    await alert.present();
  }
}
