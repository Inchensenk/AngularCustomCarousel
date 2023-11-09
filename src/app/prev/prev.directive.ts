import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click')
  prevFunc(){
  var elm = this.el.nativeElement.parentElement.parentElement.children[0];//отоброжение нулевого дочернего элемента у родителя второго уровня вложенности
  var item = elm.querySelectorAll(".item");
  elm.prepend(item[item.length - 1]);//вставляем последний элемент в начало
  console.log(item);

  }
}
