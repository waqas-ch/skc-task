import { Component } from '@angular/core';

@Component({
  selector: 'app-freq-question',
  templateUrl: './freq-question.component.html',
  styleUrls: ['./freq-question.component.scss']
})
export class FreqQuestionComponent {
  visible:any
  items=[
    {
      id:1,
      text:"I need someone to write my essay for me, who can help me?",
      active:false
    },
    {
      id:2,
      text:"What you should not write in a college essay?",
      active:false
    },
    {
      id:3,
      text:"Can you write my essay for free?",
      active:false

    }
  ]
  questionClick(item:any){
    this.visible = item; item.active = !item.active
    this.items.forEach((itemx:any)=>
    {
      if(itemx.id!==item.id)
       itemx.active=!item.active
    })
  }
}
