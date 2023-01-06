import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  employeesList: any;

  constructor(private employeesService:EmployeesService) { }

  ngOnInit(): void {debugger;

    this.employeesService.getemployeeslist().subscribe((res:any)=>{
     
      this.employeesList=res.body;
     
    });
  }
  delete(data:any){

  }

}
