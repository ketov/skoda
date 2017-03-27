$(document).ready(function () {
    $(function () {
        $('.cars__car-block').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    });
});