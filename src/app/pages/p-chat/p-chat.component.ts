import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-chat',
  templateUrl: './p-chat.component.html',
  styleUrls: ['./p-chat.component.css'],
})
export class PChatComponent implements OnInit {
  public session = [];
  public writing = false;
  public messages = [
    {
      trigger: 'sessionStart',
      response: 'Hello, i am a AnBot, please select an option',
      options: ['1', '2', '3', 'Restart'],
    },
    {
      trigger: '1',
      response: 'You selected option 1',
      options: ['2', '3', 'Restart'],
    },
    {
      trigger: '2',
      response: 'You selected option 2',
      options: ['1', '3', 'Restart'],
    },
    {
      trigger: '3',
      response: 'You selected option 3',
      options: ['1', '2', 'Restart'],
    },
    {
      trigger: 'Restart',
      response: 'Hello, i am a AnBot, please select an option',
      options: ['1', '2', '3'],
    },
  ];

  constructor() {}

  ngOnInit() {
    this.session.push(
      this.formartMsjSession('bot', this.getNextMsg('sessionStart'))
    );
  }

  getNextMsg(trigger: string) {
    let msj = this.messages.find((msj) => msj.trigger == trigger);
    return msj;
  }

  onOptionSelected(option: any) {
    this.writing = true;
    setTimeout(() => {
      this.session.push(this.formartMsjSession('user', { response: option }));
      this.session.push(this.formartMsjSession('bot', this.getNextMsg(option)));
      this.writing = false;
    }, 1800);
  }

  formartMsjSession(autor, msg) {
    return {
      autor,
      ...msg,
    };
  }
}
