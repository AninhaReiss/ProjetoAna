export class SalvarAutorController {
  constructor($timeout, webDevTec, toastr, $http, $route, $location) {
    'ngInject';
    this.$http = $http;
    this.toastr = toastr;
    this.$route = $route;
    this.tipo = this.$route.current.params.tipo;
    this.Id = this.$route.current.params.Id;
    this.$location = $location;
    if (this.tipo == 'editar') {
      this.getById(this.Id);
    }
  }

  salvar() {
    if (this.tipo == 'incluir') {
      this.$http.post('http://libraryapp-alezio.rhcloud.com/api/authors/', this.salvarAutor).then(() => {
        this.toastr.success('Autor salvo com sucesso', 'Sucesso');
        this.$location.path('/listarAutor');
      });
    } else {
      this.$http.patch('http://libraryapp-alezio.rhcloud.com/api/authors/'+this.Id, this.salvarAutor).then(() => {
        this.toastr.success('Autor alterado com sucesso', 'Sucesso');
      });
    }
  }

  deletar(){
    this.$http.delete('http://libraryapp-alezio.rhcloud.com/api/authors/'+this.Id, this.salvarAutor).then(() => {
        this.toastr.success('Autor excluído com sucesso', 'Sucesso');
        this.$location.path('/listarAutor');
      });
  }

  getById() {
    this.$http.get('http://libraryapp-alezio.rhcloud.com/api/authors/' + this.Id).then((sucesso) => {
      this.salvarAutor = sucesso.data;
    });

  }
}