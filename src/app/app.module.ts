import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppReducer } from './store/app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { CounterModule } from './counter/counter.module';
import { PostsModule } from './posts/posts.module';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthEffects } from './auth/state/auth.effects';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostsListComponent,
    AddPostComponent,
    EditPostComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CounterModule,
    HttpClientModule,
    PostsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
