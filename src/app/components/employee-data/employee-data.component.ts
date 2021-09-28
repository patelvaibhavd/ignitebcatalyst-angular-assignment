import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SortPipe } from 'src/app/shared/pipe/sort.pipe';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit, AfterViewInit {

  @ViewChild('input') input: any;
  empForm: FormGroup;
  submitted = false;
  isLoader: boolean = false;
  searchEmp: string = '';
  direction: string = 'asc';
  column: string = 'companyName';
  type: string = 'string';
  users: any = [
    {
      companyName: 'Walmart',
      first: 'James',
      last: 'Smith',
      age: 25,
      gender: 'male',
      email: 'james.smith@example.com',
      salary: '$120000',
      location: 'Alabama',
      designation: 'Web developer',
      workType: 'WFH'
    },
    {
      companyName: 'Amazon',
      first: 'Michael',
      last: 'Smith',
      age: 23,
      gender: 'male',
      email: 'michael.smith@example.com',
      salary: '$200000',
      location: 'Alabama',
      designation: 'Web designer',
      workType: 'WFO'
    },
    {
      companyName: 'Apple Inc',
      first: 'Robert',
      last: 'Smith',
      age: 24,
      gender: 'male',
      email: 'robert.smith@example.com',
      salary: '$1500000',
      location: 'Hawaii',
      designation: 'Java developer',
      workType: 'WFO'
    },
    {
      companyName: 'Amazon',
      first: 'Maria',
      last: 'Garcia',
      age: 29,
      gender: 'female',
      email: 'maria.garcia@example.com',
      salary: '$170000',
      location: 'Florida',
      designation: 'DevOps',
      workType: 'WFH'
    },
    {
      companyName: 'Apple Inc',
      first: 'David',
      last: 'Smith',
      age: 32,
      gender: 'male',
      email: 'david.smith@example.com',
      salary: '$1400000',
      location: 'Hawaii',
      designation: 'Frontend developer',
      workType: 'WFH'
    },
    {
      companyName: 'IBM',
      first: 'Maria',
      last: 'Rodriguez',
      age: 34,
      gender: 'female',
      email: 'maria.rodriguez@example.com',
      salary: '$300000',
      location: 'California',
      designation: 'Backend developer',
      workType: 'WFO'
    },
    {
      companyName: 'Walmart',
      first: 'Mary',
      last: 'Smith',
      age: 31,
      gender: 'female',
      email: 'mary.smith@example.com',
      salary: '$190000',
      location: 'Colorado',
      designation: 'Software Engineer',
      workType: 'WFH'
    },
    {
      companyName: 'Amazon',
      first: 'Maria',
      last: 'Hernandez',
      age: 20,
      gender: 'female',
      email: 'maria.hernandez@example.com',
      salary: '$120000',
      location: 'California',
      designation: 'Web developer',
      workType: 'WFO'
    }
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    for (const user of this.users) {
      user['isExpand'] = false;
    }
    this.empForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      first: ['', Validators.required],
      last: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['male', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', Validators.required],
      location: ['', Validators.required],
      designation: ['', Validators.required],
      workType: ['WFH', Validators.required],
    });
  }

  ngAfterViewInit() {
    this.input.valueChanges.pipe(debounceTime(500)).subscribe((x: any) => {
      this.isLoader = false;
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.empForm.controls; }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  searchData() {
    this.isLoader = true;
  }

  isOpen(user: any) {
    user['isExpand'] = !user['isExpand'];
  }

  setSortParams(param: { dir: string; col: string; typ: string }) {
    this.direction = param.dir;
    this.column = param.col;
    this.type = param.typ;
  }

  addEmployee() {
    (<any>document).getElementById('myModal').style.display = 'block';
  }

  closeModal() {
    (<any>document).getElementById('myModal').style.display = 'none';
  }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.empForm.invalid) {
          return;
      }

      const data = this.empForm.value;
      data['age'] = +data['age'];
      this.users.push(data);

      this.closeModal();
      this.submitted = false;
      this.empForm.reset(); 
      const filterPipe = new SortPipe();
      this.users = filterPipe.transform(this.users, this.direction, this.column, this.type);
      this.shoeToast();
  }
  
  shoeToast() {
    var snackEle = (<any>document).getElementById("snackbar");
    snackEle.className = "show";
    setTimeout(function(){ snackEle.className = snackEle.className.replace("show", ""); }, 3000);
  }

}
