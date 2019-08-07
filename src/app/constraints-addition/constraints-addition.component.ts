import { Component, OnInit } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-constraints-addition',
  templateUrl: './constraints-addition.component.html',
  styleUrls: ['./constraints-addition.component.css']
})
export class ConstraintsAdditionComponent implements OnInit {

  constructor() {
   }
   updateValues() {
    var date1 = document.getElementById("date1").value;
    var date2 = document.getElementById("date2").value;
    var date3 = document.getElementById("date3").value;
    
    var reason1 = document.getElementById("reason1").value;
    var reason2 = document.getElementById("reason2").value;
    var reason3 = document.getElementById("reason3").value;

    var priority1 = document.getElementById("priority1").value;
    var priority2 = document.getElementById("priority2").value;
    var priority3 = document.getElementById("priority3").value;
    
    // insert the server request
  }

  ngOnInit() {
  }

  
}
