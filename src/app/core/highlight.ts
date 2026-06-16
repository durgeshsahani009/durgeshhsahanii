import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import hljs from './highlight.config';
@Directive({
  selector: '[appHighlight]'
})
export class Highlight implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const blocks = this.el.nativeElement.querySelectorAll('pre code');

    blocks.forEach((block: HTMLElement) => {
      hljs.highlightElement(block);
    });
  }
}