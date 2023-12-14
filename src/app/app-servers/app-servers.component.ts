import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './app-servers.component.html',
  styleUrl: './app-servers.component.scss',
})
export class AppServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No servers are created!';
  serverName: string = 'TestServer';
  serverCreated: boolean = false;
  servers: Array<string> = ['TestServers', 'Test 2']
  toggleShowPassword: boolean = false;
  log: Array<string> = ['test 1', 'test 2', 'test 3']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created!' + this.serverName;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  onTogglePassword() {
    this.toggleShowPassword = !this.toggleShowPassword
  }
}
