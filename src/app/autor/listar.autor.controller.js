export class ListarAutorController {
    constructor($timeout, webDevTec, toastr, $http) {
        'ngInject';
        this.$http = $http;
        this.listarAutor = [];

        this.carregarTabela();

    }

    carregarTabela() {
        this.$http.get('http://libraryapp-alezio.rhcloud.com/api/authors/').then((sucesso) => {
            this.listarAutor = sucesso.data;

            // this.listarAutor.forEach(function (sucesso) {
            //     this.$http.get('http://libraryapp-alezio.rhcloud.com/api/authors/' + sucesso.data.id + '/books/count').then((sucesso) => {
            //         this.salvarAutor = sucesso.data;
            //     });
            // }, this);
    });

}
}
