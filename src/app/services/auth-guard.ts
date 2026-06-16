import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const token = sessionStorage.getItem('token');
  if(token){
    return true
  }
  return token?true: router?.createUrlTree(['/personal/profile/me/default']);

};
