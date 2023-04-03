import { Component } from '@angular/core';

@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.scss']
})
export class CoverImageComponent {
  navLinks:any=[
    {
      text:'Writers',
      route:'' //we can add route links here
    },
    {
      text:'Samples',
    },
    {
      text:'Pricing',
    },
    {
      text:'FAQs',
    },
    {
      text:'Why Us',
    },
    {
      text:'Reviews'
    }
  ]
  items=[
    {
      heading:'250+',
      text:'Academic Writing Experts',
      icon:'assets/images/pencil.svg'
    },
    {
      heading:'50%',
      text:'Money Back Guarantee',
      icon:'assets/images/diamond.svg'
    },
    {
      heading:'100%',
      text:'Plagiarism Free Content',
      icon:'assets/images/diamond.svg'
    },
    {
      heading:'50%',
      text:'Prepay Upfront - Half After We Deliver',
      icon:'assets/images/Star 1.svg'
    },

  ]
}
