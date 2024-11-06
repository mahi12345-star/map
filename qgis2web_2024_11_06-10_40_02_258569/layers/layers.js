var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_map_1 = new ol.format.GeoJSON();
var features_map_1 = format_map_1.readFeatures(json_map_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_map_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_map_1.addFeatures(features_map_1);
var lyr_map_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_map_1, 
                style: style_map_1,
                popuplayertitle: "map",
                interactive: true,
                title: '<img src="styles/legend/map_1.png" /> map'
            });

lyr_OSMStandard_0.setVisible(true);lyr_map_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_map_1];
lyr_map_1.set('fieldAliases', {'id': 'id', 'Population': 'Population', 'Block name': 'Block name', });
lyr_map_1.set('fieldImages', {'id': 'TextEdit', 'Population': 'TextEdit', 'Block name': 'TextEdit', });
lyr_map_1.set('fieldLabels', {'id': 'no label', 'Population': 'no label', 'Block name': 'no label', });
lyr_map_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});