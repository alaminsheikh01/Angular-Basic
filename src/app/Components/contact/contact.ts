import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  ngOnInit(): void {
    this.getAllPhotos();
  }
  photoList: any[] = [];

  http = inject(HttpClient);

  // constructor(private http: HttpClient) {}

  newPhotos: any = {
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: '',
  };

  getAllPhotos() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((result: any) => {
      this.photoList = result;
    });
  }
  onSavePhoto() {
    this.http
      .post('https://jsonplaceholder.typicode.com/photos', this.newPhotos)
      .subscribe((response: any) => {
        alert('API call success');
        this.getAllPhotos();
      });
  }
  onUpdatePhoto() {
    this.http
      .put('https://jsonplaceholder.typicode.com/photos/' + this.newPhotos.id, this.newPhotos)
      .subscribe((response: any) => {
        alert('API call success');
        this.getAllPhotos();
      });
  }
  onDelete(id: number) {
    const isDelete = confirm('Are you sure want to delete?');

    if (isDelete == true) {
      this.http
        .delete('https://jsonplaceholder.typicode.com/photos/' + id)
        .subscribe((response: any) => {
          alert('API call success');
          this.getAllPhotos();
        });
    }
  }
  onEdit(data: any) {
    this.newPhotos = data;
  }
  onReset() {
    this.newPhotos = '';
  }
}
