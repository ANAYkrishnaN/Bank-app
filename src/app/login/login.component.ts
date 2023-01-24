import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your Perfect Banking Partner" 
  
  data="ENTER AC number"
  acnumber=''
  psw=''
  

  userdetails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0},
    1001:{acno:1001,username:"amal",password:123,balance:0},
    1002:{acno:1002,username:"arjun",password:123,balance:0},
    1003:{acno:1003,username:"mega",password:123,balance:0},
  }
      constructor(private router:Router) { }
      ngOnInit(): void {
        
      }
        login(a:any,b:any){
        
          this.acnumber=a.value
          this.psw=b.value
          
        //   var acnumber=this.acnumber
        //   var psw=this.psw
        //   var userdetails=this.userdetails

          
          
        //   // alert('login buffering')
        //   if(acnumber in userdetails){
        //     if(psw==userdetails[acnumber]["password"]){
        //       alert("login success")
        //     }
        //     else{ alert ("incorrect password")}

        //   }
        //   else{alert("username not found. Please register")}

        // }
        

             var acnumber=this.acnumber
          var psw=this.psw
          var userdetails=this.userdetails

          
          
          // alert('login buffering')
          if(acnumber in userdetails){
            if(psw==userdetails[acnumber]["password"]){
              alert("login success")
            }
            else{ alert ("incorrect password")}

          }
          else{alert("username not found. Please register")}

        }
    //     acnumberChange(event:any){
    //       // console.log();
    //      this.acnumber=event.target.value
    //     }

    //     pswChange(event:any){
    //       this.psw=event.target.value
    //     }
        }