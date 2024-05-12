import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
})
export class GithubReposComponent {
  @Input() githubRepos: any[] = [];
}
