export function routerConfig($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/listarAutor', {
      templateUrl: 'app/autor/listar.autor.html',
      controller: 'ListarAutorController',
      controllerAs: 'listarAutor'
    })
    .when('/salvarAutor/:tipo/:Id', {
      templateUrl: 'app/autor/manter.autor.html',
      controller: 'SalvarAutorController',
      controllerAs: 'salvarAutor'
    })
    .when('/salvarAutor/:tipo', {
      templateUrl: 'app/autor/manter.autor.html',
      controller: 'SalvarAutorController',
      controllerAs: 'salvarAutor'
    })
    .when('/listarLivro', {
      templateUrl: 'app/livro/listar.livro.html',
      controller: 'ListarLivroController',
      controllerAs: 'listarLivro'
    })
    .when('/salvarLivro/:tipo/:Id', {
      templateUrl: 'app/livro/manter.livro.html',
      controller: 'SalvarLivroController',
      controllerAs: 'salvarLivro'
    })
    .when('/salvarLivro/:tipo', {
      templateUrl: 'app/livro/manter.livro.html',
      controller: 'SalvarLivroController',
      controllerAs: 'salvarLivro'
    })
    .otherwise({
      redirectTo: '/'
    });
}
