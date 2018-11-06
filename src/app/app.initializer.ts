import { Injector } from '@angular/core';
import { Router } from '@angular/router';

// export function onAppInit(/* dependencies */): () => Promise<any> {
//   return (): Promise<any> => {
//     return new Promise((resolve, reject) => {
//       resolve();
//     });
//   };
// }

export function onAppInit(injector: Injector): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      let router = injector.get(Router);

      console.log('**** INITIAL ROUTES ****');
      console.log(router.config);

      let userPermittedRoutes = router.config.filter(i => i.path != 'admin');

      router.resetConfig(userPermittedRoutes);

      console.log('**** FILTERED ROUTES ****');
      console.log(router.config);

      resolve();
    });
  };
}
