import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from "./world/world.component";

@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent,
        HelloComponent,
        WorldComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
    ]
})

export class AppModule { }

