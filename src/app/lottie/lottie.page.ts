import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.page.html',
  styleUrls: ['./lottie.page.scss'],
})
export class LottiePage implements OnInit {

  constructor(public router:Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('home')
    }, 2000)
  }

  ngOnInit() {
  }     

  options: AnimationOptions = {
    path: '/assets/animacion.json',
    };
    animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
    }
}
