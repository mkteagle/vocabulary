import { Routes, RouterModule } from '@angular/router';
import {
    LoginComponent,
    AppComponent,
    AdminComponent,
    HomeComponent,
    NameComponent
} from './_components/index';

import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
        children: [

        ]
    },
    {
        path: 'name/:name', component: NameComponent,
        children: [
            
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);