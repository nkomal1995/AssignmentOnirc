import { SelectorContext } from "@angular/compiler"
import { Injectable } from "@angular/core"
import{State , Selector,Action, StateContext} from "@ngxs/store"
import { tap } from "rxjs"
import { UserService } from "src/app/user.service"
import { GetEmployee } from "../action/employee.action"
export class EmployeeStateModel{
    employees:any|[];
    employeeL:boolean | undefined
 
}
@State<EmployeeStateModel>({
   name:'employees',
   defaults:{
    employees:[],
    employeeL:false

   }
  })

  @Injectable()
export class EmployeeState{


    constructor(private user: UserService) { }
    @Selector()
    static getEmployeeList(state:EmployeeStateModel){
         return state.employees;
    }
    @Selector()
    static getEmployeeLo(state:EmployeeStateModel){
         return state.employeeL;
    }

    @Action(GetEmployee)
    getEmployees({getState, setState}:StateContext<EmployeeStateModel>){
        return this.user.getUserDetails().pipe(tap(res=>{
            const state=getState();

            setState({
                ...state,
                employees:res,
                employeeL:true
            })
        }))
    }

}