import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './_guards/auth.guard';
import { ValueDetailComponent } from './value/value-detail/value-detail.component';
import { ValueDetailResolver } from './_resolvers/value-detail.resolver';
import { ValueListResolver } from './_resolvers/value-list.resolver';
import { ValueEditComponent } from './value/value-edit/value-edit.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = 
[
    {path: '', component: HomeComponent, resolve: {values: ValueListResolver}},
    {path: 'onas', component: AboutusComponent},
    {path: 'kontakt', component: ContactComponent},
    {path: 'paneladministracyjny', component: LoginComponent, resolve: {values: ValueListResolver}},
    {path: 'samochod/:id', component: ValueDetailComponent, resolve: {value: ValueDetailResolver}},
    // tslint:disable-next-line: max-line-length
    {path: 'paneladministracyjny/edytuj/:id', component: ValueEditComponent, resolve: {value: ValueDetailResolver}, canDeactivate: [PreventUnsavedChanges], canActivate: [AuthGuard]},
    {path: '**', redirectTo: '', pathMatch: 'full'}
]