import { AppComponent } from '../app.component';
import { HomeComponent } from './home.component';
import {NgModule} from "@angular/core";
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  imports:[HttpClientModule],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [HttpClientModule]
})
export class HomeModule {}
