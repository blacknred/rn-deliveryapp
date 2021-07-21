import React, {useRef, useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {COLORS, FONTS, GOOGLE_API_KEY, icons} from '../../constants';
import useColorScheme from '../../hooks/useColorScheme';
import {Location} from '../../store/profile';
import {Coordinates} from '../../types';
import {Text, View} from '../Themed';
import styles from './styles';

interface IDeliveryMapProps {
  from: Location;
  to: Coordinates;
}

export default ({from: {streetName, region}, to}: IDeliveryMapProps) => {
  const [fromLocation, setFromLocation] = useState<Coordinates>(region);
  const [duration, setDuration] = useState<number>(0);
  const [angle, setAngle] = useState<number>(0);
  const mapView = useRef<MapView>(null);
  const isReady = useRef<boolean>(false);
  const colorScheme = useColorScheme();
  const {tint, background} = COLORS[colorScheme];

  const handleZoom =
    (enlarge: boolean = true) =>
    () => {
      if (!mapView.current || !mapView.current.props.initialRegion) {
        return;
      }

      const {latitudeDelta, longitudeDelta} =
        mapView.current.props.initialRegion;

      mapView.current.animateToRegion(
        {
          ...region,
          latitudeDelta: enlarge ? latitudeDelta / 2 : latitudeDelta * 2,
          longitudeDelta: enlarge ? longitudeDelta / 2 : longitudeDelta * 2,
        },
        200,
      );
    };

  const handleDirectionReadiness = (result: any) => {
    const {duration: newDuration, coordinates} = result;

    setDuration(Math.ceil(newDuration));

    if (isReady.current || !mapView.current) {
      return;
    }
    isReady.current = true;

    // fit route into maps
    mapView.current.fitToCoordinates(coordinates, {
      edgePadding: styles.edgePadding,
    });

    // reposition the car
    if (coordinates.length >= 2) {
      const dx = coordinates[1].latitude - coordinates[0].latitude;
      const dy = coordinates[1].longitude - coordinates[0].longitude;

      setAngle((Math.atan2(dy, dx) * 180) / Math.PI);
    }

    setFromLocation({
      latitude: coordinates[0].latitude,
      longitude: coordinates[0].longitude,
    });
  };

  return (
    <View style={styles.container}>
      {/* map direction */}
      <MapView
        ref={mapView}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: (fromLocation.latitude + to.latitude) / 2,
          longitude: (fromLocation.longitude + to.longitude) / 2,
          latitudeDelta: Math.abs(fromLocation.latitude - to.latitude) * 2,
          longitudeDelta: Math.abs(fromLocation.longitude - to.longitude) * 2,
        }}>
        <MapViewDirections
          onReady={handleDirectionReadiness}
          apikey={GOOGLE_API_KEY}
          origin={fromLocation}
          strokeColor={tint}
          optimizeWaypoints
          destination={to}
          strokeWidth={5}
        />

        {/* destination marker */}
        <Marker coordinate={to}>
          <Image source={icons.pin} style={[styles.icon, {tintColor: tint}]} />
        </Marker>

        {/* car marker */}
        <Marker
          anchor={{x: 0.5, y: 0.5}}
          coordinate={fromLocation}
          rotation={angle}
          flat>
          <Image source={icons.car} style={styles.icon} />
        </Marker>
      </MapView>

      {/* header */}
      <View style={styles.floatContainer}>
        <Image source={icons.red_pin} style={styles.icon} />

        <View style={styles.container}>
          <Text style={FONTS.body3} numberOfLines={1}>
            {streetName}
          </Text>
        </View>

        <Text style={FONTS.body3}>{duration} mins</Text>
      </View>

      {/* zoom buttons */}
      <View style={styles.floatContainer2}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: background}]}
          onPress={handleZoom(true)}>
          <Text style={FONTS.body1}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: background}]}
          onPress={handleZoom(false)}>
          <Text style={FONTS.body1}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
