import { Injectable } from "@angular/core";
import { AdItem } from "src/components/dynamic/ad-item";
import { HeroJobAdComponent } from "src/components/dynamic/hero-job-ad.component";
import { HeroProfileComponent } from "src/components/dynamic/hero-profile.component";

@Injectable({
  providedIn: "root",
})
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {
        name: "Bombasto",
        bio: "Brave as they come",
      }),

      new AdItem(HeroProfileComponent, {
        name: "Dr IQ",
        bio: "Smart as they come",
      }),

      new AdItem(HeroJobAdComponent, {
        headline: "Hiring for several positions",
        body: "Submit your resume today!",
      }),

      new AdItem(HeroJobAdComponent, {
        headline: "Openings in all departments",
        body: "Apply today",
      }),
    ];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
