/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';


@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}


/*const geoprocessorUrl = "https://logistics.arcgis.com/arcgis/rest/services/World/VehicleRoutingProblemSync/GPServer/EditVehicleRoutingProblem"

const params = {
  orders,                    // Feature Set
  depots,                    // Feature Set
  routes,                    // Feature Set
  populate_directions: true  // "Generate driving directions for the routes"
};

const { results } = await geoprocessor.execute(geoprocessorUrl, params);

const outStops = results[1].value.features;  // Graphics[]
const outRoutes = results[2].value.features; // Graphics[]

showStops(outStops);
showRoutes(outRoutes);
}*/