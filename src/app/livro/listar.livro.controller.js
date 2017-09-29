export class ListarLivroController {
    constructor($timeout, webDevTec, toastr, $http) {
        'ngInject';
        this.$http = $http;
        this.toastr = toastr;
        this.listarLivro = [];

        this.carregarTabela();

    }

    carregarTabela() {
        this.$http.get('http://libraryapp-alezio.rhcloud.com/api/books/').then((sucesso) => {
            this.listarLivro = sucesso.data;

    });

}
}
