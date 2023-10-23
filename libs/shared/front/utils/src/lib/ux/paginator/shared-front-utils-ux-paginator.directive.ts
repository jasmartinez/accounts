import { AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

const customCounterClass = 'paginator-current-page'
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[accountPaginatorCounter]' })
export class AccountsSharedFrontUtilsUxPaginatorCounterDirective
  implements OnChanges, AfterViewInit
{
  @Input() currentPageCounter = 0;
  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['currentPageCounter'].currentValue !==
      changes['currentPageCounter'].previousValue
    ) {
      this._updateCounter();
    }
  }

  ngAfterViewInit(): void {
    this._setupCounter();
  }

  private _updateCounter() {
    // paginatorEl
    const el = this.renderer.selectRootElement(this.el.nativeElement, true);
    if(el){
      const span = el.querySelector(`.${customCounterClass}`) as HTMLElement;
      if(span){
        span.innerHTML = `${this.currentPageCounter}`;
      }
    }
  }

  private _setupCounter() {
    // paginatorEl
    const el = this.renderer.selectRootElement(this.el.nativeElement, true);
    // counterEl
    const span = this.renderer.createElement('span');
    const spanText = this.renderer.createText(`${this.currentPageCounter}`);
    this.renderer.addClass(span, customCounterClass);
    this.renderer.appendChild(span, spanText);
    // Insert into the DOM
    const parent = el.querySelector('.mat-mdc-paginator-range-actions');
    const buttons = el.querySelectorAll(
      '.mat-mdc-paginator-range-actions button'
    );
    this.renderer.insertBefore(parent, span, buttons[2]);
  }
}