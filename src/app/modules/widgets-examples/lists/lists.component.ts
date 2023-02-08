import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingService } from 'src/app/servics/setting/setting.service';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent {
  constructor(private settingservics: SettingService) {}
  ngOnInit(): void {
    this.settingservics.getuser(1).subscribe((response: any)=>{
      console.log('response',response);
    }) 

    this.settingservics.update
  }

}

