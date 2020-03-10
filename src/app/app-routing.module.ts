import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
	// { path: '', canActivate: [AuthGuard], loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
	// { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
	// {
	// 	path: '',
	// 	loadChildren: () => import('./core/auth/login/login.module').then(m => m.LoginPageModule)
	// },
	{
		path: '',
		loadChildren: () => import('./features/welcome/welcome.module').then(m => m.WelcomePageModule)
	},
	{
		path: 'login',
		loadChildren: () => import('./core/auth/login/login.module').then(m => m.LoginPageModule)
	},
	{
		path: 'signup',
		loadChildren: () => import('./core/auth/signup/signup.module').then(m => m.SignupPageModule)
	},
	{
		path: 'confirm',
		loadChildren: () => import('./core/auth/confirm/confirm.module').then(m => m.ConfirmPageModule)
	},
	{
		path: 'chat', canActivate: [AuthGuard],
		loadChildren: () => import('./features/chat/chat.module').then(m => m.ChatPageModule)
	},
	{
		path: 'campaigns',
		loadChildren: () => import('./features/campaigns/campaigns.module').then(m => m.CampaignsPageModule),
	},
	{
		path: 'sugestions',
		loadChildren: () => import('./features/sugestion-category/sugestion-category.module').then(m => m.SugestionCategoryPageModule)
	},
	{
		path: 'about',
		loadChildren: () => import('./features/about/about.module').then(m => m.AboutPageModule)
	},
	{
		path: 'contact',
		loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactPageModule)
	},
	{
		path: 'my-campaigns', canActivate: [AuthGuard],
		loadChildren: () => import('./features/my-campaigns/my-campaigns.module').then(m => m.MyCampaignsPageModule)
	},
  {
    path: 'profile',canActivate: [AuthGuard],
    loadChildren: () => import('./features/profile/profile.module').then( m => m.ProfilePageModule)
  },




];
@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
