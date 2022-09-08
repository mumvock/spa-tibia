/**
 * Configurações gerais de todo o projeto.
 *
 * Nota-se que  `environment.prod.ts`   é utilizado no build produtivo,
 * enquanto     `environment.ts`        é utilizado apenas para desenvolvimento local.
 */
export const environment = {
    /** Flag que explicita produção vs desenvolvimento. */
    production: true,

    /** Centralização da identidade do projeto. */
    identity: {
        /**
         * Nome do projeto a ser exibido.
         *
         * `ATENÇÃO:` O nome do projeto na tag `<title>` dentro do `index.html` precisar manualmente definido.
         */
        name: 'Tibia',

        /** Endereço do logo exibido no `nav`. */
        logoSource: 'assets/images/tibia-logo-artwork.gif',
    }
};
