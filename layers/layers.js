var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BUFFER12METERROADf2_1 = new ol.format.GeoJSON();
var features_BUFFER12METERROADf2_1 = format_BUFFER12METERROADf2_1.readFeatures(json_BUFFER12METERROADf2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER12METERROADf2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER12METERROADf2_1.addFeatures(features_BUFFER12METERROADf2_1);
var lyr_BUFFER12METERROADf2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER12METERROADf2_1, 
                style: style_BUFFER12METERROADf2_1,
                popuplayertitle: "BUFFER 12 METER ROADf 2",
                interactive: true,
                title: '<img src="styles/legend/BUFFER12METERROADf2_1.png" /> BUFFER 12 METER ROADf 2'
            });
var format_mergedpolulines_2 = new ol.format.GeoJSON();
var features_mergedpolulines_2 = format_mergedpolulines_2.readFeatures(json_mergedpolulines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergedpolulines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergedpolulines_2.addFeatures(features_mergedpolulines_2);
var lyr_mergedpolulines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mergedpolulines_2, 
                style: style_mergedpolulines_2,
                popuplayertitle: "merged polulines",
                interactive: true,
                title: '<img src="styles/legend/mergedpolulines_2.png" /> merged polulines'
            });
var format_SUBDIVISION_3 = new ol.format.GeoJSON();
var features_SUBDIVISION_3 = format_SUBDIVISION_3.readFeatures(json_SUBDIVISION_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUBDIVISION_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUBDIVISION_3.addFeatures(features_SUBDIVISION_3);
var lyr_SUBDIVISION_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUBDIVISION_3, 
                style: style_SUBDIVISION_3,
                popuplayertitle: "SUBDIVISION",
                interactive: true,
                title: '<img src="styles/legend/SUBDIVISION_3.png" /> SUBDIVISION'
            });
var format_subdivisionpolyline_4 = new ol.format.GeoJSON();
var features_subdivisionpolyline_4 = format_subdivisionpolyline_4.readFeatures(json_subdivisionpolyline_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_subdivisionpolyline_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_subdivisionpolyline_4.addFeatures(features_subdivisionpolyline_4);
var lyr_subdivisionpolyline_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_subdivisionpolyline_4, 
                style: style_subdivisionpolyline_4,
                popuplayertitle: "subdivision polyline",
                interactive: true,
                title: '<img src="styles/legend/subdivisionpolyline_4.png" /> subdivision polyline'
            });
var format_KOCHOLWOB18NOVESEME_5 = new ol.format.GeoJSON();
var features_KOCHOLWOB18NOVESEME_5 = format_KOCHOLWOB18NOVESEME_5.readFeatures(json_KOCHOLWOB18NOVESEME_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOCHOLWOB18NOVESEME_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOCHOLWOB18NOVESEME_5.addFeatures(features_KOCHOLWOB18NOVESEME_5);
var lyr_KOCHOLWOB18NOVESEME_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOCHOLWOB18NOVESEME_5, 
                style: style_KOCHOLWOB18NOVESEME_5,
                popuplayertitle: "KOCHOLWO B 18 NOV ESEME",
                interactive: true,
                title: '<img src="styles/legend/KOCHOLWOB18NOVESEME_5.png" /> KOCHOLWO B 18 NOV ESEME'
            });
var format_KocholwoB19NOVpolygones2_6 = new ol.format.GeoJSON();
var features_KocholwoB19NOVpolygones2_6 = format_KocholwoB19NOVpolygones2_6.readFeatures(json_KocholwoB19NOVpolygones2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB19NOVpolygones2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB19NOVpolygones2_6.addFeatures(features_KocholwoB19NOVpolygones2_6);
var lyr_KocholwoB19NOVpolygones2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB19NOVpolygones2_6, 
                style: style_KocholwoB19NOVpolygones2_6,
                popuplayertitle: "Kocholwo B 19 NOV polygones2",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB19NOVpolygones2_6.png" /> Kocholwo B 19 NOV polygones2'
            });
var format_KocholwoB20NOVpolygone_7 = new ol.format.GeoJSON();
var features_KocholwoB20NOVpolygone_7 = format_KocholwoB20NOVpolygone_7.readFeatures(json_KocholwoB20NOVpolygone_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB20NOVpolygone_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB20NOVpolygone_7.addFeatures(features_KocholwoB20NOVpolygone_7);
var lyr_KocholwoB20NOVpolygone_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB20NOVpolygone_7, 
                style: style_KocholwoB20NOVpolygone_7,
                popuplayertitle: "Kocholwo B 20 NOV polygone",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB20NOVpolygone_7.png" /> Kocholwo B 20 NOV polygone'
            });
var format_KocholwoB23NOVpolygone_8 = new ol.format.GeoJSON();
var features_KocholwoB23NOVpolygone_8 = format_KocholwoB23NOVpolygone_8.readFeatures(json_KocholwoB23NOVpolygone_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB23NOVpolygone_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB23NOVpolygone_8.addFeatures(features_KocholwoB23NOVpolygone_8);
var lyr_KocholwoB23NOVpolygone_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB23NOVpolygone_8, 
                style: style_KocholwoB23NOVpolygone_8,
                popuplayertitle: "Kocholwo B 23 NOV polygone",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB23NOVpolygone_8.png" /> Kocholwo B 23 NOV polygone'
            });
var format_KOCHOLWOB17THNOVPOLYGONE_9 = new ol.format.GeoJSON();
var features_KOCHOLWOB17THNOVPOLYGONE_9 = format_KOCHOLWOB17THNOVPOLYGONE_9.readFeatures(json_KOCHOLWOB17THNOVPOLYGONE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOCHOLWOB17THNOVPOLYGONE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOCHOLWOB17THNOVPOLYGONE_9.addFeatures(features_KOCHOLWOB17THNOVPOLYGONE_9);
var lyr_KOCHOLWOB17THNOVPOLYGONE_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOCHOLWOB17THNOVPOLYGONE_9, 
                style: style_KOCHOLWOB17THNOVPOLYGONE_9,
                popuplayertitle: "KOCHOLWO B 17 TH NOV POLYGONE",
                interactive: true,
                title: '<img src="styles/legend/KOCHOLWOB17THNOVPOLYGONE_9.png" /> KOCHOLWO B 17 TH NOV POLYGONE'
            });
var format_KocholwoB24novpolygone_10 = new ol.format.GeoJSON();
var features_KocholwoB24novpolygone_10 = format_KocholwoB24novpolygone_10.readFeatures(json_KocholwoB24novpolygone_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB24novpolygone_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB24novpolygone_10.addFeatures(features_KocholwoB24novpolygone_10);
var lyr_KocholwoB24novpolygone_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB24novpolygone_10, 
                style: style_KocholwoB24novpolygone_10,
                popuplayertitle: "Kocholwo B 24 nov polygone",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB24novpolygone_10.png" /> Kocholwo B 24 nov polygone'
            });
var format_KOCHOLWOB252627NOV2020ESEME_11 = new ol.format.GeoJSON();
var features_KOCHOLWOB252627NOV2020ESEME_11 = format_KOCHOLWOB252627NOV2020ESEME_11.readFeatures(json_KOCHOLWOB252627NOV2020ESEME_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOCHOLWOB252627NOV2020ESEME_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOCHOLWOB252627NOV2020ESEME_11.addFeatures(features_KOCHOLWOB252627NOV2020ESEME_11);
var lyr_KOCHOLWOB252627NOV2020ESEME_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOCHOLWOB252627NOV2020ESEME_11, 
                style: style_KOCHOLWOB252627NOV2020ESEME_11,
                popuplayertitle: "KOCHOLWO B 25,26,27 NOV 2020 ESEME",
                interactive: true,
                title: '<img src="styles/legend/KOCHOLWOB252627NOV2020ESEME_11.png" /> KOCHOLWO B 25,26,27 NOV 2020 ESEME'
            });
var format_KocholwoB17thnovMikeandRuttopolygone_12 = new ol.format.GeoJSON();
var features_KocholwoB17thnovMikeandRuttopolygone_12 = format_KocholwoB17thnovMikeandRuttopolygone_12.readFeatures(json_KocholwoB17thnovMikeandRuttopolygone_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB17thnovMikeandRuttopolygone_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB17thnovMikeandRuttopolygone_12.addFeatures(features_KocholwoB17thnovMikeandRuttopolygone_12);
var lyr_KocholwoB17thnovMikeandRuttopolygone_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB17thnovMikeandRuttopolygone_12, 
                style: style_KocholwoB17thnovMikeandRuttopolygone_12,
                popuplayertitle: "Kocholwo B 17th nov Mike and Rutto polygone",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB17thnovMikeandRuttopolygone_12.png" /> Kocholwo B 17th nov Mike and Rutto polygone'
            });
var format_KocholwoB23rd2020MIKERUTTOPolygone_13 = new ol.format.GeoJSON();
var features_KocholwoB23rd2020MIKERUTTOPolygone_13 = format_KocholwoB23rd2020MIKERUTTOPolygone_13.readFeatures(json_KocholwoB23rd2020MIKERUTTOPolygone_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB23rd2020MIKERUTTOPolygone_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB23rd2020MIKERUTTOPolygone_13.addFeatures(features_KocholwoB23rd2020MIKERUTTOPolygone_13);
var lyr_KocholwoB23rd2020MIKERUTTOPolygone_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB23rd2020MIKERUTTOPolygone_13, 
                style: style_KocholwoB23rd2020MIKERUTTOPolygone_13,
                popuplayertitle: "Kocholwo B 23rd 2020 MIKE & RUTTO Polygone",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB23rd2020MIKERUTTOPolygone_13.png" /> Kocholwo B 23rd 2020 MIKE & RUTTO Polygone'
            });
var format_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14 = new ol.format.GeoJSON();
var features_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14 = format_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14.readFeatures(json_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14.addFeatures(features_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14);
var lyr_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14, 
                style: style_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14,
                popuplayertitle: "KOCHOLWO B 20TH NOV 2021 MIKE POLYGONE",
                interactive: true,
                title: '<img src="styles/legend/KOCHOLWOB20THNOV2021MIKEPOLYGONE_14.png" /> KOCHOLWO B 20TH NOV 2021 MIKE POLYGONE'
            });
var format_Kocholwob24thnov2020mikepolygone_15 = new ol.format.GeoJSON();
var features_Kocholwob24thnov2020mikepolygone_15 = format_Kocholwob24thnov2020mikepolygone_15.readFeatures(json_Kocholwob24thnov2020mikepolygone_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kocholwob24thnov2020mikepolygone_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kocholwob24thnov2020mikepolygone_15.addFeatures(features_Kocholwob24thnov2020mikepolygone_15);
var lyr_Kocholwob24thnov2020mikepolygone_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kocholwob24thnov2020mikepolygone_15, 
                style: style_Kocholwob24thnov2020mikepolygone_15,
                popuplayertitle: "Kocholwo b 24th nov 2020 mike polygone",
                interactive: true,
                title: '<img src="styles/legend/Kocholwob24thnov2020mikepolygone_15.png" /> Kocholwo b 24th nov 2020 mike polygone'
            });
var format_KocholwoB26N27THNOVmikePOLYGONE_16 = new ol.format.GeoJSON();
var features_KocholwoB26N27THNOVmikePOLYGONE_16 = format_KocholwoB26N27THNOVmikePOLYGONE_16.readFeatures(json_KocholwoB26N27THNOVmikePOLYGONE_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB26N27THNOVmikePOLYGONE_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB26N27THNOVmikePOLYGONE_16.addFeatures(features_KocholwoB26N27THNOVmikePOLYGONE_16);
var lyr_KocholwoB26N27THNOVmikePOLYGONE_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB26N27THNOVmikePOLYGONE_16, 
                style: style_KocholwoB26N27THNOVmikePOLYGONE_16,
                popuplayertitle: "Kocholwo B 26 N 27TH NOV mike POLYGONE",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB26N27THNOVmikePOLYGONE_16.png" /> Kocholwo B 26 N 27TH NOV mike POLYGONE'
            });
var format_KocholwoB25thnovMikepolygone_17 = new ol.format.GeoJSON();
var features_KocholwoB25thnovMikepolygone_17 = format_KocholwoB25thnovMikepolygone_17.readFeatures(json_KocholwoB25thnovMikepolygone_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB25thnovMikepolygone_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB25thnovMikepolygone_17.addFeatures(features_KocholwoB25thnovMikepolygone_17);
var lyr_KocholwoB25thnovMikepolygone_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB25thnovMikepolygone_17, 
                style: style_KocholwoB25thnovMikepolygone_17,
                popuplayertitle: "Kocholwo B 25th nov Mike polygone",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB25thnovMikepolygone_17.png" /> Kocholwo B 25th nov Mike polygone'
            });
var format_KocholwoB18thand19th2020Ruttopolygone_18 = new ol.format.GeoJSON();
var features_KocholwoB18thand19th2020Ruttopolygone_18 = format_KocholwoB18thand19th2020Ruttopolygone_18.readFeatures(json_KocholwoB18thand19th2020Ruttopolygone_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB18thand19th2020Ruttopolygone_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB18thand19th2020Ruttopolygone_18.addFeatures(features_KocholwoB18thand19th2020Ruttopolygone_18);
var lyr_KocholwoB18thand19th2020Ruttopolygone_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB18thand19th2020Ruttopolygone_18, 
                style: style_KocholwoB18thand19th2020Ruttopolygone_18,
                popuplayertitle: "Kocholwo B 18th and 19th 2020 Rutto polygone",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB18thand19th2020Ruttopolygone_18.png" /> Kocholwo B 18th and 19th 2020 Rutto polygone'
            });
var format_KocholwoB26thand27th2020RuttPolygone_19 = new ol.format.GeoJSON();
var features_KocholwoB26thand27th2020RuttPolygone_19 = format_KocholwoB26thand27th2020RuttPolygone_19.readFeatures(json_KocholwoB26thand27th2020RuttPolygone_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB26thand27th2020RuttPolygone_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB26thand27th2020RuttPolygone_19.addFeatures(features_KocholwoB26thand27th2020RuttPolygone_19);
var lyr_KocholwoB26thand27th2020RuttPolygone_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB26thand27th2020RuttPolygone_19, 
                style: style_KocholwoB26thand27th2020RuttPolygone_19,
                popuplayertitle: "Kocholwo B 26th and 27th 2020 Rutt Polygone",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB26thand27th2020RuttPolygone_19.png" /> Kocholwo B 26th and 27th 2020 Rutt Polygone'
            });
var format_KocholwoB20thNov2020Ruttopolygone_20 = new ol.format.GeoJSON();
var features_KocholwoB20thNov2020Ruttopolygone_20 = format_KocholwoB20thNov2020Ruttopolygone_20.readFeatures(json_KocholwoB20thNov2020Ruttopolygone_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB20thNov2020Ruttopolygone_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB20thNov2020Ruttopolygone_20.addFeatures(features_KocholwoB20thNov2020Ruttopolygone_20);
var lyr_KocholwoB20thNov2020Ruttopolygone_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB20thNov2020Ruttopolygone_20, 
                style: style_KocholwoB20thNov2020Ruttopolygone_20,
                popuplayertitle: "Kocholwo B 20th Nov 2020 Rutto polygone",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB20thNov2020Ruttopolygone_20.png" /> Kocholwo B 20th Nov 2020 Rutto polygone'
            });
var format_KocholwoB25thnov2020ruttopolygone_21 = new ol.format.GeoJSON();
var features_KocholwoB25thnov2020ruttopolygone_21 = format_KocholwoB25thnov2020ruttopolygone_21.readFeatures(json_KocholwoB25thnov2020ruttopolygone_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB25thnov2020ruttopolygone_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB25thnov2020ruttopolygone_21.addFeatures(features_KocholwoB25thnov2020ruttopolygone_21);
var lyr_KocholwoB25thnov2020ruttopolygone_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB25thnov2020ruttopolygone_21, 
                style: style_KocholwoB25thnov2020ruttopolygone_21,
                popuplayertitle: "Kocholwo B 25th nov 2020 rutto polygone",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB25thnov2020ruttopolygone_21.png" /> Kocholwo B 25th nov 2020 rutto polygone'
            });
var format_KocholwoB20th2020RuttoPolygone_22 = new ol.format.GeoJSON();
var features_KocholwoB20th2020RuttoPolygone_22 = format_KocholwoB20th2020RuttoPolygone_22.readFeatures(json_KocholwoB20th2020RuttoPolygone_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KocholwoB20th2020RuttoPolygone_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KocholwoB20th2020RuttoPolygone_22.addFeatures(features_KocholwoB20th2020RuttoPolygone_22);
var lyr_KocholwoB20th2020RuttoPolygone_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KocholwoB20th2020RuttoPolygone_22, 
                style: style_KocholwoB20th2020RuttoPolygone_22,
                popuplayertitle: "Kocholwo B 20th 2020 Rutto Polygone",
                interactive: true,
                title: '<img src="styles/legend/KocholwoB20th2020RuttoPolygone_22.png" /> Kocholwo B 20th 2020 Rutto Polygone'
            });
var format_kocholwobkiproppolygone_23 = new ol.format.GeoJSON();
var features_kocholwobkiproppolygone_23 = format_kocholwobkiproppolygone_23.readFeatures(json_kocholwobkiproppolygone_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kocholwobkiproppolygone_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kocholwobkiproppolygone_23.addFeatures(features_kocholwobkiproppolygone_23);
var lyr_kocholwobkiproppolygone_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kocholwobkiproppolygone_23, 
                style: style_kocholwobkiproppolygone_23,
                popuplayertitle: "kocholwo b kiprop polygone",
                interactive: true,
                title: '<img src="styles/legend/kocholwobkiproppolygone_23.png" /> kocholwo b kiprop polygone'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_kocholwobkiproppolygone_23,],
                                fold: "open",
                                title: "group1"});
var group_RUTTOpurple = new ol.layer.Group({
                                layers: [lyr_KocholwoB18thand19th2020Ruttopolygone_18,lyr_KocholwoB26thand27th2020RuttPolygone_19,lyr_KocholwoB20thNov2020Ruttopolygone_20,lyr_KocholwoB25thnov2020ruttopolygone_21,lyr_KocholwoB20th2020RuttoPolygone_22,],
                                fold: "open",
                                title: "RUTTO purple"});
var group_MIKEgreen = new ol.layer.Group({
                                layers: [lyr_KocholwoB17thnovMikeandRuttopolygone_12,lyr_KocholwoB23rd2020MIKERUTTOPolygone_13,lyr_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14,lyr_Kocholwob24thnov2020mikepolygone_15,lyr_KocholwoB26N27THNOVmikePOLYGONE_16,lyr_KocholwoB25thnovMikepolygone_17,],
                                fold: "open",
                                title: "MIKE green"});
var group_ESEME = new ol.layer.Group({
                                layers: [lyr_KOCHOLWOB18NOVESEME_5,lyr_KocholwoB19NOVpolygones2_6,lyr_KocholwoB20NOVpolygone_7,lyr_KocholwoB23NOVpolygone_8,lyr_KOCHOLWOB17THNOVPOLYGONE_9,lyr_KocholwoB24novpolygone_10,lyr_KOCHOLWOB252627NOV2020ESEME_11,],
                                fold: "open",
                                title: "ESEME"});
var group_WAYPOINTS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "WAYPOINTS"});
var group_SUBDIVISIONCSV = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "SUBDIVISION CSV"});
var group_Polylines = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Polylines"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_BUFFER12METERROADf2_1.setVisible(true);lyr_mergedpolulines_2.setVisible(true);lyr_SUBDIVISION_3.setVisible(true);lyr_subdivisionpolyline_4.setVisible(true);lyr_KOCHOLWOB18NOVESEME_5.setVisible(true);lyr_KocholwoB19NOVpolygones2_6.setVisible(true);lyr_KocholwoB20NOVpolygone_7.setVisible(true);lyr_KocholwoB23NOVpolygone_8.setVisible(true);lyr_KOCHOLWOB17THNOVPOLYGONE_9.setVisible(true);lyr_KocholwoB24novpolygone_10.setVisible(true);lyr_KOCHOLWOB252627NOV2020ESEME_11.setVisible(true);lyr_KocholwoB17thnovMikeandRuttopolygone_12.setVisible(true);lyr_KocholwoB23rd2020MIKERUTTOPolygone_13.setVisible(true);lyr_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14.setVisible(true);lyr_Kocholwob24thnov2020mikepolygone_15.setVisible(true);lyr_KocholwoB26N27THNOVmikePOLYGONE_16.setVisible(true);lyr_KocholwoB25thnovMikepolygone_17.setVisible(true);lyr_KocholwoB18thand19th2020Ruttopolygone_18.setVisible(true);lyr_KocholwoB26thand27th2020RuttPolygone_19.setVisible(true);lyr_KocholwoB20thNov2020Ruttopolygone_20.setVisible(true);lyr_KocholwoB25thnov2020ruttopolygone_21.setVisible(true);lyr_KocholwoB20th2020RuttoPolygone_22.setVisible(true);lyr_kocholwobkiproppolygone_23.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_BUFFER12METERROADf2_1,lyr_mergedpolulines_2,lyr_SUBDIVISION_3,lyr_subdivisionpolyline_4,group_ESEME,group_MIKEgreen,group_RUTTOpurple,group_group1];
lyr_BUFFER12METERROADf2_1.set('fieldAliases', {'id': 'id', });
lyr_mergedpolulines_2.set('fieldAliases', {'POLYLINE': 'POLYLINE', 'id': 'id', 'POLYGONE': 'POLYGONE', });
lyr_SUBDIVISION_3.set('fieldAliases', {'SERIAL NO': 'SERIAL NO', 'PLOT NO': 'PLOT NO', 'NAME': 'NAME', 'X': 'X', 'Y': 'Y', 'WAYPOINT': 'WAYPOINT', 'AREA': 'AREA', });
lyr_subdivisionpolyline_4.set('fieldAliases', {'polyline': 'polyline', });
lyr_KOCHOLWOB18NOVESEME_5.set('fieldAliases', {'P/NO': 'P/NO', 'SERIAL NO': 'SERIAL NO', });
lyr_KocholwoB19NOVpolygones2_6.set('fieldAliases', {'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KocholwoB20NOVpolygone_7.set('fieldAliases', {'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KocholwoB23NOVpolygone_8.set('fieldAliases', {'SERIAL NO': 'SERIAL NO', 'P/NO': 'P/NO', });
lyr_KOCHOLWOB17THNOVPOLYGONE_9.set('fieldAliases', {'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KocholwoB24novpolygone_10.set('fieldAliases', {'P/NO': 'P/NO', 'SERIAL NO': 'SERIAL NO', });
lyr_KOCHOLWOB252627NOV2020ESEME_11.set('fieldAliases', {'SERIAL': 'SERIAL', 'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KocholwoB17thnovMikeandRuttopolygone_12.set('fieldAliases', {'SERIAL NO': 'SERIAL NO', 'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KocholwoB23rd2020MIKERUTTOPolygone_13.set('fieldAliases', {'SERIAL NO': 'SERIAL NO', 'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14.set('fieldAliases', {'SERIAL NO': 'SERIAL NO', 'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_Kocholwob24thnov2020mikepolygone_15.set('fieldAliases', {'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KocholwoB26N27THNOVmikePOLYGONE_16.set('fieldAliases', {'SERIAL NO': 'SERIAL NO', 'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KocholwoB25thnovMikepolygone_17.set('fieldAliases', {'SERIAL NO': 'SERIAL NO', 'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KocholwoB18thand19th2020Ruttopolygone_18.set('fieldAliases', {'SERIAL NUM': 'SERIAL NUM', 'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KocholwoB26thand27th2020RuttPolygone_19.set('fieldAliases', {'SERIAL NO': 'SERIAL NO', 'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KocholwoB20thNov2020Ruttopolygone_20.set('fieldAliases', {'SERIAL NO': 'SERIAL NO', 'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KocholwoB25thnov2020ruttopolygone_21.set('fieldAliases', {'SERIAL NO': 'SERIAL NO', 'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_KocholwoB20th2020RuttoPolygone_22.set('fieldAliases', {'SERIAL NO': 'SERIAL NO', 'P/NO': 'P/NO', 'NAME': 'NAME', });
lyr_kocholwobkiproppolygone_23.set('fieldAliases', {'SERIAL NO': 'SERIAL NO', 'P/NO': 'P/NO', 'NAME': 'NAME', 'AREA': 'AREA', });
lyr_BUFFER12METERROADf2_1.set('fieldImages', {'id': 'TextEdit', });
lyr_mergedpolulines_2.set('fieldImages', {'POLYLINE': 'TextEdit', 'id': 'TextEdit', 'POLYGONE': 'TextEdit', });
lyr_SUBDIVISION_3.set('fieldImages', {'SERIAL NO': 'TextEdit', 'PLOT NO': 'TextEdit', 'NAME': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'WAYPOINT': 'TextEdit', 'AREA': 'TextEdit', });
lyr_subdivisionpolyline_4.set('fieldImages', {'polyline': 'TextEdit', });
lyr_KOCHOLWOB18NOVESEME_5.set('fieldImages', {'P/NO': 'TextEdit', 'SERIAL NO': 'TextEdit', });
lyr_KocholwoB19NOVpolygones2_6.set('fieldImages', {'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KocholwoB20NOVpolygone_7.set('fieldImages', {'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KocholwoB23NOVpolygone_8.set('fieldImages', {'SERIAL NO': 'TextEdit', 'P/NO': 'TextEdit', });
lyr_KOCHOLWOB17THNOVPOLYGONE_9.set('fieldImages', {'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KocholwoB24novpolygone_10.set('fieldImages', {'P/NO': 'TextEdit', 'SERIAL NO': 'TextEdit', });
lyr_KOCHOLWOB252627NOV2020ESEME_11.set('fieldImages', {'SERIAL': 'TextEdit', 'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KocholwoB17thnovMikeandRuttopolygone_12.set('fieldImages', {'SERIAL NO': 'TextEdit', 'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KocholwoB23rd2020MIKERUTTOPolygone_13.set('fieldImages', {'SERIAL NO': 'TextEdit', 'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14.set('fieldImages', {'SERIAL NO': 'TextEdit', 'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Kocholwob24thnov2020mikepolygone_15.set('fieldImages', {'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KocholwoB26N27THNOVmikePOLYGONE_16.set('fieldImages', {'SERIAL NO': 'TextEdit', 'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KocholwoB25thnovMikepolygone_17.set('fieldImages', {'SERIAL NO': 'TextEdit', 'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KocholwoB18thand19th2020Ruttopolygone_18.set('fieldImages', {'SERIAL NUM': 'TextEdit', 'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KocholwoB26thand27th2020RuttPolygone_19.set('fieldImages', {'SERIAL NO': 'TextEdit', 'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KocholwoB20thNov2020Ruttopolygone_20.set('fieldImages', {'SERIAL NO': 'TextEdit', 'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KocholwoB25thnov2020ruttopolygone_21.set('fieldImages', {'SERIAL NO': 'TextEdit', 'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_KocholwoB20th2020RuttoPolygone_22.set('fieldImages', {'SERIAL NO': 'TextEdit', 'P/NO': 'TextEdit', 'NAME': 'TextEdit', });
lyr_kocholwobkiproppolygone_23.set('fieldImages', {'SERIAL NO': 'TextEdit', 'P/NO': 'TextEdit', 'NAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_BUFFER12METERROADf2_1.set('fieldLabels', {'id': 'no label', });
lyr_mergedpolulines_2.set('fieldLabels', {'POLYLINE': 'no label', 'id': 'no label', 'POLYGONE': 'no label', });
lyr_SUBDIVISION_3.set('fieldLabels', {'SERIAL NO': 'no label', 'PLOT NO': 'no label', 'NAME': 'no label', 'X': 'no label', 'Y': 'no label', 'WAYPOINT': 'no label', 'AREA': 'no label', });
lyr_subdivisionpolyline_4.set('fieldLabels', {'polyline': 'no label', });
lyr_KOCHOLWOB18NOVESEME_5.set('fieldLabels', {'P/NO': 'no label', 'SERIAL NO': 'no label', });
lyr_KocholwoB19NOVpolygones2_6.set('fieldLabels', {'P/NO': 'no label', 'NAME': 'no label', });
lyr_KocholwoB20NOVpolygone_7.set('fieldLabels', {'P/NO': 'no label', 'NAME': 'no label', });
lyr_KocholwoB23NOVpolygone_8.set('fieldLabels', {'SERIAL NO': 'no label', 'P/NO': 'no label', });
lyr_KOCHOLWOB17THNOVPOLYGONE_9.set('fieldLabels', {'P/NO': 'no label', 'NAME': 'no label', });
lyr_KocholwoB24novpolygone_10.set('fieldLabels', {'P/NO': 'no label', 'SERIAL NO': 'no label', });
lyr_KOCHOLWOB252627NOV2020ESEME_11.set('fieldLabels', {'SERIAL': 'no label', 'P/NO': 'no label', 'NAME': 'no label', });
lyr_KocholwoB17thnovMikeandRuttopolygone_12.set('fieldLabels', {'SERIAL NO': 'no label', 'P/NO': 'no label', 'NAME': 'no label', });
lyr_KocholwoB23rd2020MIKERUTTOPolygone_13.set('fieldLabels', {'SERIAL NO': 'no label', 'P/NO': 'no label', 'NAME': 'no label', });
lyr_KOCHOLWOB20THNOV2021MIKEPOLYGONE_14.set('fieldLabels', {'SERIAL NO': 'no label', 'P/NO': 'no label', 'NAME': 'no label', });
lyr_Kocholwob24thnov2020mikepolygone_15.set('fieldLabels', {'P/NO': 'no label', 'NAME': 'no label', });
lyr_KocholwoB26N27THNOVmikePOLYGONE_16.set('fieldLabels', {'SERIAL NO': 'no label', 'P/NO': 'no label', 'NAME': 'no label', });
lyr_KocholwoB25thnovMikepolygone_17.set('fieldLabels', {'SERIAL NO': 'no label', 'P/NO': 'no label', 'NAME': 'no label', });
lyr_KocholwoB18thand19th2020Ruttopolygone_18.set('fieldLabels', {'SERIAL NUM': 'no label', 'P/NO': 'no label', 'NAME': 'no label', });
lyr_KocholwoB26thand27th2020RuttPolygone_19.set('fieldLabels', {'SERIAL NO': 'no label', 'P/NO': 'no label', 'NAME': 'no label', });
lyr_KocholwoB20thNov2020Ruttopolygone_20.set('fieldLabels', {'SERIAL NO': 'no label', 'P/NO': 'no label', 'NAME': 'no label', });
lyr_KocholwoB25thnov2020ruttopolygone_21.set('fieldLabels', {'SERIAL NO': 'no label', 'P/NO': 'no label', 'NAME': 'no label', });
lyr_KocholwoB20th2020RuttoPolygone_22.set('fieldLabels', {'SERIAL NO': 'no label', 'P/NO': 'no label', 'NAME': 'no label', });
lyr_kocholwobkiproppolygone_23.set('fieldLabels', {'SERIAL NO': 'no label', 'P/NO': 'no label', 'NAME': 'no label', 'AREA': 'no label', });
lyr_kocholwobkiproppolygone_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});