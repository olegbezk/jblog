import {Component, OnInit} from '@angular/core';
import {Post, PostService} from '../entities/post';
import {HttpResponse} from '@angular/common/http';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.css'
    ]

})
export class HomeComponent implements OnInit {

    posts: Post[] = [];

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        console.log('...ngOnInit()');
        this.loadAll();
    }

    loadAll() {
        this.postService.query().subscribe(
            (res: HttpResponse<Post[]>) => {
                console.log(res);
                this.posts = res.body;
            },
            (res: HttpResponse<Post[]>) => {
                console.log(res);
            }
        );
    }

}
