import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
})
export class GithubProfileComponent {
  @Input() githubProfile:any;
}
