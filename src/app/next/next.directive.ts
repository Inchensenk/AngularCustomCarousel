import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('click')
  nextFunc(){
  //var elm = this.el.nativeElement.parentElement;//отоброжение родительского элемента
  //var elm = this.el.nativeElement.parentElement.parentElement;//отоброжение родительского элемента на уровень выше(родитель родителя)
  //var elm = this.el.nativeElement.parentElement.parentElement.children;//отоброжение списка детей у родителя второго уровня вложенности
  var elm = this.el.nativeElement.parentElement.parentElement.children[0];//отоброжение нулевого дочернего элемента у родителя второго уровня вложенности
  var item = elm.querySelectorAll(".item");
  elm.append(item[0]);//вставляем нулевой элемент в конец
  console.log(item);

  }
}
