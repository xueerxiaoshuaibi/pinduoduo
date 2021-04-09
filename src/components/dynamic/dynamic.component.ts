import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { AdDirective } from "src/app/directive/ad.directive";
import { AdService } from "src/app/service/ad.service";
import { AdItem } from "./ad-item";
import { AdComponent } from "./ad.component";

@Component({
  selector: "app-dynamic",
  templateUrl: "./dynamic.component.html",
  styleUrls: ["./dynamic.component.less"],
})
export class DynamicComponent implements OnInit {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;
  interval: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private adSrv: AdService
  ) {}

  ngOnInit() {
    this.ads = this.adSrv.getAds();
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      adItem.component
    );

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      componentFactory
    );
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
