import {Routes} from '@angular/router';

import {HomePage} from './pages/home/home.page';
import {TracksPage} from './pages/tracks/tracks.page';

export var routableComponents = [];

export const routes: Routes = [
    routeEntry({ path: '', component: HomePage}),
    routeEntry({ path: 'tracks', component: TracksPage}),
];

function routeEntry(data) {
    routableComponents.push(data.component);
    return data;
}
