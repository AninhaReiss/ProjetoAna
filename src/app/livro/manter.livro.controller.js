export class SalvarLivroController {
    constructor($timeout, webDevTec, toastr, $http, $route, $location) {
        'ngInject';
        this.$http = $http;
        this.toastr = toastr;
        this.$route = $route;
        this.tipo = this.$route.current.params.tipo;
        this.Id = this.$route.current.params.Id;
        this.$location = $location;
        this.dados = {
            authorId : null,
            lista : []
        }
        if (this.tipo == 'editar') {
            this.getById(this.Id);
        }
        this.carregarAutor();
    }

    carregarAutor() {
        this.$http.get('http://libraryapp-alezio.rhcloud.com/api/authors/').then((sucesso) => {
            this.dados.lista = sucesso.data;
        });
    }

    salvar() {
        if (this.tipo == 'incluir') {
            this.$http.post('http://libraryapp-alezio.rhcloud.com/api/books/', this.salvarLivro).then(() => {
                this.toastr.success('Livro salvo com sucesso', 'Sucesso');
                this.$location.path('/listarLivro');
            });
        } else {
            this.$http.patch('http://libraryapp-alezio.rhcloud.com/api/books/' + this.Id, this.salvarLivro).then(() => {
                this.toastr.success('Livro alterado com sucesso', 'Sucesso');
            });
        }
    }

    deletar() {
        this.$http.delete('http://libraryapp-alezio.rhcloud.com/api/books/' + this.Id, this.salvarLivro).then(() => {
            this.toastr.success('Livro excluído com sucesso', 'Sucesso');
            this.$location.path('/listarLivro');
        });
    }

    getById() {
        this.$http.get('http://libraryapp-alezio.rhcloud.com/api/books/' + this.Id).then((sucesso) => {
            this.salvarLivro = sucesso.data;
        });
    }

}