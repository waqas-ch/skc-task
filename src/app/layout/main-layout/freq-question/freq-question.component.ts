import { Component } from '@angular/core';

@Component({
  selector: 'app-freq-question',
  templateUrl: './freq-question.component.html',
  styleUrls: ['./freq-question.component.scss']
})
export class FreqQuestionComponent {
  items=[
    {
      text:"I need someone to write my essay for me, who can help me?",
    },
    {
      text:"What you should not write in a college essay?",
    },
    {
      text:"Can you write my essay for free?",
    }
  ]
}
