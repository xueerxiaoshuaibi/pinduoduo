import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ComponentFactoryResolver,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-component-box",
  templateUrl: "./component-box.component.html",
  styleUrls: ["./component-box.component.css"],
})
export class ComponentBoxComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() comItem;
  @ViewChild("container", { read: ViewContainerRef, static: true })
  container: ViewContainerRef;
  comRef;
  constructor(private componnetFctory: ComponentFactoryResolver) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.loadData();
  }
  loadData() {
    const componetFct = this.componnetFctory.resolveComponentFactory(
      this.comItem[0]
    );
    this.comRef = this.container.createComponent(componetFct);
  }
  ngOnDestroy() {
    if (this.comRef) {
      this.comRef.destroy();
    }
  }
}
