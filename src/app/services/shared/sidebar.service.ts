import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {


  menu: any = [
    {
      title: '',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'ProgressBar', url: '/progress' },
        { title: 'Graphics', url: '/graphics1' },
        { title: 'Promise', url: '/promise' },
        { title: 'RXJS', url: '/rxjs' },
      ]
    }
  ];

  constructor() { }

}
