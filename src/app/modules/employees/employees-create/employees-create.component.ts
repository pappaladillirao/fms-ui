import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'src/app/shared/constants/input.constants';
import { Employees } from 'src/app/shared/model/employyes.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-create',
  templateUrl: './employees-create.component.html',
  styleUrls: ['./employees-create.component.scss']
})
export class EmployeesCreateComponent implements OnInit {

  editForm=this.fb.group({
    id:[],
    employeeName:[""],
    employeeSalaryType:[""],
    joiningDate:[formatDate(new Date(),'yyyy-MM-dd','en')],
    address:[""],
    primaryContact:[""],
    secondaryContact:[""],
   
    
  })
 

 

  constructor(private fb:FormBuilder,private employeesService:EmployeesService) {  }
  
  

  ngOnInit(): void {
  }

  

  save(){debugger;
    const employee=this.createEmployeesFromForm();

this.employeesService.create(employee).subscribe((res:any)=>{
  const data=res.body;

     this.editForm.patchValue({
      employeeName:'',
      employeeSalaryType:'',
      joiningDate:null,
      address:'',
      primaryContact:'',
      secondaryContact:'',
     
      
      })
      

  })

}  createEmployeesFromForm() {debugger;
  const employee=new Employees();
  employee.employeeName=this.editForm.get('employeeName')?.value||"";
  employee.employeeSalaryType=this.editForm.get('employeeSalaryType')?.value||"";
  employee.joiningDate=this.editForm.get('joiningDate')?.value?moment(this.editForm.get('joiningDate')?.value,DATE_TIME_FORMAT): undefined;
  employee.address=this.editForm.get('address')?.value||"";
  employee.primaryContact=this.editForm.get('primaryContact')?.value||"";
  employee.secondaryContact=this.editForm.get('secondaryContact')?.value||"";
   

  return employee;
  }

}
