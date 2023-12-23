import { RouterModule, Routes } from '@angular/router';
import { DedicatoriasComponent } from './views/dedicatorias/dedicatorias.component';
import { LaExperienciaComponent } from './views/la-experiencia/la-experiencia.component';
import { MunicipiosComponent } from './views/municipios/municipios.component';
import { PaisesComponent } from './views/paises/paises.component';
import { HomeComponent } from './views/home/home.component';
import { GiftComponent } from './views/gift/gift.component';
import { NgModule } from '@angular/core';
import { LondresDedicatoriasComponent } from './views/londres-dedicatorias/londres-dedicatorias.component';
import { LondresLaExperienciaComponent } from './views/londres-la-experiencia/londres-la-experiencia.component';
import { LondresLugaresComponent } from './views/londres-lugares/londres-lugares.component';
import { LondresMapaComponent } from './views/londres-mapa/londres-mapa.component';
import { LondresHomeComponent } from './views/londres-home/londres-home.component';

const routes: Routes = [
    {
        path: '', component: GiftComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'paises', children: [
            {path: '', component: PaisesComponent},
            {path: 'londres/home', component: LondresHomeComponent},
            {path: 'londres/mapa', component: LondresMapaComponent},
            {path: 'londres/lugares', component: LondresLugaresComponent},
            {path: 'londres/la-experiencia', component: LondresLaExperienciaComponent},
            {path: 'londres/dedicatorias', component: LondresDedicatoriasComponent},
            {path: '**', redirectTo: '/londres/home'},
        ]
    },
    {
        path: 'municipios', component: MunicipiosComponent
    },
    {
        path: 'la-experiencia', component: LaExperienciaComponent
    },
    {
        path: 'dedicatorias', component: DedicatoriasComponent
    },
    {
        path: '**', redirectTo: ''
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class RoutesModule {}
