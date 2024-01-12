import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input()
  appHighlight!: string

  // @Output()
  // event: any = new EventEmitter<any>();

  constructor(private ele: ElementRef) { }


  @HostListener("mouseenter")
  onMouseEnter() {
    this.ele.nativeElement.style.backgroundColor = this.appHighlight || "yellow";
  }
  @HostListener("mouseleave")
  onMouseLeave() {
    this.foo()
  }

  ngOnChanges() { }
  ngOnInit() {
    // console.log(this.ele.nativeElement);
    // this.ele.nativeElement.addEventListener("mouseenter", (e: any) => {
    //   this.ele.nativeElement.style.backgroundColor = this.appHighlight || "yellow";
    // });
    // this.ele.nativeElement.addEventListener("mouseleave", (e: any) => {
    //   this.ele.nativeElement.style.backgroundColor = "white";
    // });
  }
  ngOnDestroy() { }


  foo() {
    this.ele.nativeElement.style.backgroundColor = "white";
  }


}
