import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  succesAlert(text: string){
    Swal.fire({
      title: 'success',
      text: text,
      timer: 1500
    })
  }

  warningAlert(text: string){
    Swal.fire({
      title: 'warning',
      text: text,
      timer: 1500
    })
  }

  dangerAlert(text: string){
    Swal.fire({
      title: 'danger',
      text: text,
      timer: 1500
    })
  }

  questionAlert(text: string){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  constructor() { }
}
