import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  users: MatTableDataSource<User>;
  columns: string[] = [
    'name',
    'email',
    'fullAddress',
    'phone',
    'website',
    'company'
  ]
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.userService.getUsers().subscribe(res => {
      this.users = new MatTableDataSource(res);
      this.users.sort = this.sort;
    });
  }
}
