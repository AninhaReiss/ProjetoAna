/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { ListarAutorController} from './autor/listar.autor.controller';
import { SalvarAutorController} from './autor/manter.autor.controller';
import { ListarLivroController} from './livro/listar.livro.controller';
import { SalvarLivroController} from './livro/manter.livro.controller';

angular.module('projetoAna', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngRoute', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .controller('ListarAutorController', ListarAutorController)
  .controller('SalvarAutorController', SalvarAutorController)
  .controller('ListarLivroController', ListarLivroController)
  .controller('SalvarLivroController', SalvarLivroController);
