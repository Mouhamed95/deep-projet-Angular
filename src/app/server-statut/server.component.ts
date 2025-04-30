import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';



@Component({
  selector: 'app-server',
  standalone:true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
  host: {
    id:"status"
  }
})
export class ServerComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  //  private interval?: ReturnType<typeof setInterval>
  // private destroyRef = inject(DestroyRef);
  destroy = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(this.currentStatus())
    // })
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('offline');
      } else if (rnd < 0.9) {
        this.currentStatus.set('online');
      } else {
        this.currentStatus.set('unknown');
      }
      clearInterval(interval)
    }, 5000);

    this.destroy.onDestroy(() => {
      clearInterval(interval);
    });
  }
}

// export class ServerComponent implements OnInit{
//   currentStatus = signal< "online" | "offline" | "unknown">("offline" ) 
//   //  private interval?: ReturnType<typeof setInterval>
//   private destroyRef = inject(DestroyRef)
//   // destroy = inject(DestroyRef)

//   constructor() {
//     //  effect(() => {
//     //   //  console.log(this.currentStatus())
//     // })
   
//   }
  
//  ngOnInit() {
//    console.log("test")
//  }
    
//   // ngOnInit() {
//   //   const interval = setInterval(() => {
//   //     const rnd = Math.random();
//   //     if (rnd < 0.5) {
//   //       this.currentStatus.set('offline');
//   //     } else if (rnd < 0.9) {
//   //       this.currentStatus.set('online');
//   //     } else {
//   //       this.currentStatus.set('unknown');
//   //     }

//   //   },5000);

     
//   //   this.destroyRef.onDestroy(() => { 
//   //     clearInterval(interval)
//   //   })
//   // }
    
//       // clearInterval(interval)
    
  
  
// //   ngOnDestroy() {
// //    if(this.interval)
// //    clearInterval(this.interval)
// //  }

// }
