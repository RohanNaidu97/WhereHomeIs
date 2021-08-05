import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const routes: Routes = [
  {
    path: 'convert',
    loadChildren: () => import('./convert/convert-routing.module').then(m => m.ConvertRoutingModule)
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'condition',
    loadChildren: () => import('./condition/condition-routing.module').then(m => m.ConditionRoutingModule)
  },
  {
    path: 'addition',
    loadChildren: () => import('./addition/addition-routing.module').then(m => m.AdditionRoutingModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table-routing.module').then(m => m.TableRoutingModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
