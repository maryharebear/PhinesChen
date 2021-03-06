import { Style } from 'mapbox-gl';

export type MapProps = {
    mapStyle: string | Style | undefined;
    lng: number;
    lat: number;
    zoom: number;
    data: GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>[];
};
