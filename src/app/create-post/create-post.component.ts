import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
 
  createForm: FormGroup;
  constructor(private _create: PostService) {
    this.createForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('',Validators.required),
    });
  }
  ngOnInit() {   
  }

  createPost(){
    this._create.createPost(this.createForm.get('title').value,this.createForm.get('body').value).subscribe(x => console.log(x));
  } 

}