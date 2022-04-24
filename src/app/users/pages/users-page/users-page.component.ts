import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/core/responses/user-response';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: UserResponse[];
  constructor(private readonly usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(username: string): void {
    this.usersService.deleteUser(username).subscribe(() => {
      this.users = this.users.filter(user => user.username !== username);
    });
  }
}
