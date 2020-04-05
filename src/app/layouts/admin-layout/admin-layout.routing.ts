import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { CategoryComponent } from '../../pages/category/category.component';
import { AddMainCategoryComponent } from 'app/pages/add-main-category/add-main-category.component';
import { CustomerListComponent } from 'app/pages/customer-list/customer-list.component';
import { ShopsComponent } from 'app/pages/shops/shops.component';
import { ShopsDetailsComponent } from 'app/pages/shops-details/shops-details.component';
import { ShopsOrdersComponent } from 'app/pages/shops-orders/shops-orders.component';
import { CustomerOrdersComponent } from 'app/pages/customer-orders/customer-orders.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'category',      component: CategoryComponent },
    { path: 'category-detail',      component: AddMainCategoryComponent },
    { path: 'customers-list',      component: CustomerListComponent },
    { path: 'shops',      component: ShopsComponent },
    { path: 'shop-details',      component: ShopsDetailsComponent },
    { path: 'shop-order',      component: ShopsOrdersComponent },
    { path: 'customer-orders',      component: CustomerOrdersComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
