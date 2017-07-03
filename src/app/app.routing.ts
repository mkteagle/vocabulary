import { Routes, RouterModule } from '@angular/router';
import {
    LoginComponent,
    AppComponent,
    AdminComponent,
    HomeComponent,
    StudentComponent
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
        path: 'student/:name', component: StudentComponent,
        children: [

        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);