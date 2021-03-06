import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpRequest} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CookieModule} from "ngx-cookie";
import {DecimalNumberDirective} from "./common/decimal-directive";
import {EnumConverterPipe} from "./common/enum-converter.pipe";
import {NgbButtonsModule, NgbCollapseModule, NgbDatepickerModule, NgbModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {CsrfTokenInterceptor} from "./common/csrf-token-interceptor";
import {BlockUIModule} from "ng-block-ui";
import {BlockUIHttpModule} from "ng-block-ui/http";
import {ChartModule, HIGHCHARTS_MODULES} from "angular-highcharts";
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import {NgbDatepickerRange} from "./common/datepicker-range/datepicker.range";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {NgSelectModule} from "@ng-select/ng-select";
import {ProductCreateComponent} from "./pages/product-catalog/product/product-create/product-create.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {ShoppingCenterComponent} from "./pages/shopping/shopping-center/shopping-center.component";
import {ProductListComponent} from "./pages/product-catalog/product/product-list/product-list.component";
import {HomeComponent} from "./pages/home/home.component";
import {ShoppingHistoryComponent} from "./pages/shopping/shopping-history/shopping-history.component";
import {ProductPriceHistoryComponent} from "./pages/report/product-price-history/product-price-history.component";
import {SupplierListComponent} from "./pages/product-catalog/supplier/supplier-list/supplier-list.component";
import {SupplierCreateComponent} from "./pages/product-catalog/supplier/supplier-create/supplier-create.component";
import {IncomeReportComponent} from "./pages/report/income-report/income-report.component";
import {SaleReportComponent} from "./pages/report/sale-report/sale-report.component";
import {CustomerShoppingHistoryComponent} from './pages/shopping/customer-shopping-history/customer-shopping-history.component';

export function filterGET(req: HttpRequest<any>) {
    return req.method == "GET" && /^\/api\/.*/.test(req.url);
}


@NgModule({
    declarations: [
        AppComponent,
        ProductCreateComponent,
        ProductListComponent,
        DecimalNumberDirective,
        EnumConverterPipe,
        ShoppingCenterComponent,
        LoginComponent,
        HomeComponent,
        ShoppingHistoryComponent,
        ProductPriceHistoryComponent,
        NgbDatepickerRange,
        SupplierListComponent,
        SupplierCreateComponent,
        IncomeReportComponent,
        SaleReportComponent,
        CustomerShoppingHistoryComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        NgbCollapseModule,
        NgbButtonsModule,
        NgbTooltipModule,
        ChartModule,
        NgbDatepickerModule,
        InfiniteScrollModule,
        NgSelectModule,
        CookieModule.forRoot(),
        BlockUIModule.forRoot(),
        BlockUIHttpModule.forRoot({
            requestFilters: [filterGET]
        }),
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: CsrfTokenInterceptor, multi: true},
        {provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ]},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
