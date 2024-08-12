import { Routes } from '@angular/router';
import { StringManipulationComponent } from './string-manipulation/string-manipulation.component';

export const routes: Routes = [
    {
        path:'', redirectTo:"/strman",pathMatch:'full'
    },
    {
        path:'strman',component:StringManipulationComponent
    }
];
