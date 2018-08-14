require.config({
    baseUrl: './js',
    paths:{
        'jquery': 'library/jquery.1.12.4.min'
        ,'jquery-ui': 'library/jquery-ui.1.12.1.min'
        ,'moment': 'library/moment.2.22.2.min'
        ,'moment-adapter': 'moment-adapter'
        ,'daterangepicker': 'library/jquery.comiseo.daterangepicker'
    },
    shim:{
        'jquery':{
            exports:'$'
        },
        'daterangepicker':{
            deps: ['jquery-ui', 'jquery', 'moment'],
        },
    }
});
requirejs([
    'jquery',
    'moment-adapter',
    'daterangepicker'
], function ($, moment, daterangepicker) {
    $('#input').daterangepicker();
});
