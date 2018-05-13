import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';
import { RodaPeComponent } from './roda-pe/roda-pe.component';
import { ApresentadorversaoComponent } from './apresentadorversao/apresentadorversao.component';
import { EstatisticaComponent } from './estatistica/estatistica.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeDisciplinasComponent,
    RodaPeComponent,
    ApresentadorversaoComponent,
    EstatisticaComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
