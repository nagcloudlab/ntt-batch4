import { CanActivateFn } from '@angular/router';

// service
export const activateGuard: CanActivateFn = (route, state) => {
  // Any condition..
  return confirm("can i activate this route?")
};
