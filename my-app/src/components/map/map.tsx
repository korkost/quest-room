import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Location } from '../../utils/const';
import DefaultPin from '../../assets/img/icon-blip.svg';
import 'leaflet/dist/leaflet.css';
import * as S from './map.styled';

const LAYER_URL =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const LAYER_COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
const ZOOM = 17;

const defaultIcon = new Icon({
  iconUrl: DefaultPin,
  iconSize: [56, 70],
  iconAnchor: [20, 25],
});

const position = {
  lat: Location.Lat,
  lng: Location.Lng,
};

const Map = () => {
  return (
    <S.ContactsMap>
      <MapContainer
        center={position}
        zoom={ZOOM}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url={LAYER_URL} attribution={LAYER_COPYRIGHT} />
        <Marker position={position} icon={defaultIcon} />
      </MapContainer>
    </S.ContactsMap>
  );
};

export default Map;
