import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   data: any[] = [];
  displayedColumns: string[] = ['srNo','id', 'first_name', 'last_name', 'email', 'gender','ip_address'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/MOCK_DATA.json').subscribe((res : any) => {
      this.data = res;
    });
  }

}
