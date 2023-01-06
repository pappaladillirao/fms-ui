import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.scss']
})
export class EmployeesViewComponent implements OnInit {
  id: any;
  employeeview: any;

  editForm=this.fb.group({
    id:({value:'',disabled:true}),
    employeeName:({value:'',disabled:true}),
    employeeSalaryType:({value:'',disabled:true}),
    joiningDate:({value:'',disabled:true}),
    address:({value:'',disabled:true}),
    primaryContact:({value:'',disabled:true}),
    secondaryContact:({value:'',disabled:true}),
  })
 
 


  constructor(private fb:FormBuilder, private route:ActivatedRoute, private employeesService:EmployeesService) { }


  ngOnInit(): void {debugger;
    this.id = this.route.snapshot.paramMap.get('id');
    this.employeesService.getEmployeebyId(Number(this.id)).subscribe((res:any)=>{

      this.employeeview =res.body;

      this.editForm.patchValue({
        id:this.employeeview.id,
        employeeName:this.employeeview.employeeName,
        employeeSalaryType:this.employeeview.employeeSalaryType,
        joiningDate:this.employeeview.joiningDate,
        address:this.employeeview.address,
        primaryContact:this.employeeview.primaryContact,
        secondaryContact:this.employeeview.secondaryContact,

      })


      
    })


  }

  

}
