import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InnerComponent} from '@inner/inner.component';
import { RetailerViewComponent } from '@inner/retailer-view/retailer-view.component';
import { CouponCreationComponent } from '@inner/coupon-creation/coupon-creation.component';
import { UserPageComponent } from '@inner/user-page/user-page.component';
const innerRoutes: Routes = [
    {path: '', component: InnerComponent, children: [
  { path:"retailer-view", component: RetailerViewComponent },
  { path:"coupon", component: CouponCreationComponent },
  { path:"coupons", component: UserPageComponent }, 
  { path:"coupon-details/:coupon_id", component: UserPageComponent }
    ]}
];

export const innerRoutingModule = RouterModule.forChild(innerRoutes);