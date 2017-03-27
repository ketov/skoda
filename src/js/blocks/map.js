$(document).ready(function () {

        ymaps.ready(init);

        function init() {
            var center1 = [55.7682,37.5265];
            var myMap = new ymaps.Map('map', {
                center: center1,
                zoom: 16,
                controls: []
            });

            myMap.behaviors.disable('scrollZoom');
            //var myPlacemark = new ymaps.Placemark(center1, {
            //    hintContent: 'Москва, Ленинские Горы, дом 1, строение 11'
            //});

            //myMap.geoObjects.add(myPlacemark);
        }
        
        $(function () {
        $('.map__block').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    });
});