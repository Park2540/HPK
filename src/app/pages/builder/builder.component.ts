import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { FakeAPIService } from 'src/app/_fake';
import { LayoutService } from '../../_metronic/layout';
import {ApiInsertService} from 'src/app/servics/insertdata/insert.service'

export class insertproblem{
  id:number;
  agency: string;
  contact: string;
  informer: string;
  informer_message: string;
  system: string;
  problem_type: string;
  level: string;
  problem: string;
  
}
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent implements OnInit {
  file: File ;
  errormsg:any;
  successmsg:any;
  insertproblem: insertproblem = new insertproblem();
  insertproblemDataform: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiservice: ApiInsertService,
    private actrouter: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    
  this.insertproblemDataform =this.fb.group({
    agency : ['',Validators.required],
    contact : ['',Validators.required],
    informer : ['',Validators.required],
    informer_message : ['',Validators.required],
    system : ['',Validators.required],
    problem_type : ['',Validators.required],
    level : ['',Validators.required],
    problem : ['',Validators.required],

  });
  }
  

  fileupload(event:any){
    this.file = event.target.files[0];
    console.log("file",this.file)
  }

  onSubmit(){
    if (this.insertproblemDataform.valid){
      this.apiservice.createNewInsertproblem(this.insertproblemDataform.value,this.file).subscribe((res:any) => {
        console.log(this.insertproblemDataform.value,this.file);
        console.log(res);
        
        this.insertproblemDataform.reset(); 
      })
        
    }
   
    else{
      this.errormsg="all field required"
    }
  }

}