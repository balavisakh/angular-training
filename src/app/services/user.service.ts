import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_url = environment.api_url;
  constructor(private http:HttpClient) { }

  // To get all posts
  getAllPosts():Observable<any> {
    return this.http.get(this.api_url + '/posts/');
  }
  // To get a specific post
  getPostById(id:number):Observable<any> {
    return this.http.get(this.api_url + `/posts/${id}`);
  }

  // To update specific post
  updatePostById(id:number,body:any):Observable<any> {
    return this.http.put(this.api_url + `/posts/${id}`,body);
  }

  // To delete specific post
  deletePostById(id:number):Observable<any> {
    return this.http.delete(this.api_url + `/posts/${id}`);
  }
  // To get all user informations
  getAllUsers():Observable<any> {
    return this.http.get(this.api_url + '/users');
  }

  // Get posts for user
  getPostsOfUser(id:number):Observable<any> {
    return this.http.get(this.api_url + `/users/${id}/posts`);
  }

  // get comments for posts
  getCommentsOfPosts(id:number):Observable<any> {
    return this.http.get(this.api_url + `/posts/${id}/comments`);
  }

  // getUser details with comments
  getUserDetailsWithComments(id:number):Observable<any> {
    return this.http.get(this.api_url + `/comments/${id}`);
  }
  // get User by id
  getUserById(id:number): Observable<any> {
    return this.http.get(this.api_url + `/users/${id}`);
  }

  // To update the user details
  updateUserById(id:number,body:any): Observable<any> {
    return this.http.put(this.api_url + `/users/${id}`,body);
  }
  // delete user & comments
  deleteCommentsById(id: number): Observable<any> {
    return this.http.delete(this.api_url + `/comments/${id}`);
  }
  // To delete user by id
  deleteUserById(id:number): Observable<any> {
    return this.http.delete(this.api_url + `/users/${id}`);
  }
}
