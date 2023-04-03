import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-essay',
  templateUrl: './custom-essay.component.html',
  styleUrls: ['./custom-essay.component.scss'],
})
export class CustomEssayComponent implements OnInit{
  selectedContent:any;
  items = [
    {
      id:1,text: 'I need someone to write my essay for me, who can help me?',
      fullText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.',
    },
    {
      id:2,text: 'What you should not write in a college essay?',
      fullText:
      'What you shpuld do ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.',

    },
    {
      id:3,text: 'Can you write my essay for free?',
      fullText:
      'Can You please write ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.',

    },
    {
      id:4,text: 'I need someone to write my essay for me, who can help me?',
      fullText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a euismod ipsum. Ut eu molestie justo, sed tempor purus. Suspendisse nunc nisl, ultricies sit amet neque non, posuere volutpat lacus. Etiam id maximus ligula. Ut nisl quam, iaculis quis lorem condimentum, sagittis pellentesque quam. Vivamus ornare, turpis ut laoreet mattis, ipsum enim efficitur eros, sit amet consectetur diam nulla ac mauris. Donec consequat ex at urna ullamcorper congue. Duis vitae luctus nisl. Curabitur eget vestibulum eros, eu facilisis leo. Fusce molestie velit augue, in laoreet eros dignissim non. Sed feugiat quam dolor, in tempor ante laoreet quis. Suspendisse lobortis, nulla a faucibus mollis, tortor purus aliquam mauris, sit amet tempor mi tortor eu justo. Aenean convallis nisi a ante posuere fringilla. Nam at nisi magna. In ut neque eu ante scelerisque sodales in vel sapien. Curabitur elementum elit quam.',

    },
    {
      id:5,text: 'What you should not write in a college essay?',
      fullText: '',
    },
    {
      id:6,text: 'Can you write my essay for free?',
      fullText: '',
    },
    {
      id:7,text: 'Can you write my essay for free?',
      fullText: '',
    },
    {
      id:8,text: 'Can you write my essay for free?',
      fullText: '',
    },  {
      id:9,text: 'Can you write my essay for free?',
      fullText: '',
    },
  ];
  ngOnInit(): void {
    this.selectedContent=this.items[0]
  }
}
