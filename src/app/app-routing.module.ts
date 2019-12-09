import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataInputComponent } from './components/data-input/data-input.component';
import { ResultsComponent } from './components/results/results.component';


const routes: Routes = [
  {path: '', redirectTo: 'input', pathMatch: 'full'},
  
  {path: 'input', component: DataInputComponent},
  {path: 'results/:members/:groupsName/:groupsSize', component: ResultsComponent},
  {path: '**', redirectTo: 'input'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
