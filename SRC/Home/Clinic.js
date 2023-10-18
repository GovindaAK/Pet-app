import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Clinic = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation();
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  let text = "Loading....";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`;
  }

  const INITIAL_MARKER = [
    {
      id: 0,
      region: { latitude: 6.860274418762371, longitude: 79.86763542187308 },
      title: "Colombo South Animal Hospital",
      desc: "Contct No : 0112 726 890",
    },
    {
      id: 1,
      region: { latitude: 6.849301219225523, longitude: 79.86527062010882 },
      title: "Animal Clinic of Dr H.S. Gunasekera “Pet Health”",
      desc: "Contct No : 0716 663 283",
    },
    {
      id: 2,
      region: { latitude: 6.8477283567594265, longitude:  79.87524611100356 },
      title: "Mount Pet Clinic",
      desc: "Contct No : 0716 663 283",
    },
    {
      id: 3,
      region: { latitude: 6.855493743332762, longitude: 79.87969212015375 },
      title: "HappyPets Animal Clinic",
      desc: "Contct No : 0714 312 725",
    },
    {
      id: 4,
      region: { latitude: 6.855619772167837, longitude: 79.88368925195002 },
      title: "Central Pet Care",
      desc: "Contct No : 0773 460 430",
    },
    {
      id: 5,
      region: { latitude: 6.833304241982801, longitude: 79.87098485182962 },
      title: "Mount Care Veterinary Hospital",
      desc: "Contct No : 0716 839 823",
    },
    {
      id: 6,
      region: { latitude: 6.899878552886766, longitude: 79.87511283404885 },
      title: "PetVet Clinic",
      desc: "Contct No : 0112 599 799",
    },
    {
      id: 7,
      region: { latitude: 6.887691534322636, longitude: 79.90123424307185 },
      title: "Pet Care Animal Clinic and Surgery",
      desc: "Contct No : 0773 041 589",
    },
    {
      id: 8,
      region: { latitude: 6.887211546425789, longitude: 79.89337159759248 },
      title: "Best Care Animal Hospital",
      desc: "Contct No : 0117 400 800",
    },
    {
      id: 9,
      region: { latitude: 6.877166815801342, longitude: 79.89912398846306 },
      title: "Zootopia Vets",
      desc: "Contct No : 0701 011 761",
    },
    {
      id: 10,
      region: { latitude: 6.875844374714705, longitude: 79.90711906572912 },
      title: "Pet Rays Animal Clinic",
      desc: "Contct No : 071 409 0010",
    },
  ];

  const renderMarker = () => {
    return INITIAL_MARKER.map((_marker) => (
      <Marker
        key={_marker.id}
        coordinate={_marker.region}
        title={_marker.title}
        description={_marker.desc}
        onPress={() => {
          mapRef.current.animateToRegion({
            latitude: _marker.region.latitude,
            longitude: _marker.region.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          });
        }}
      />
    ));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
          <View style={styles.BackIcon}>
            <Ionicons name="md-arrow-back" size={28} color="#000" />
          </View>
        </TouchableOpacity>
      </View>
      <MapView
        ref={mapRef}
        showsMyLocationButton={true}
        showsUserLocation={true}
        style={styles.map}
        region={{
          latitude: location ? location.coords.latitude : 0,
          longitude: location ? location.coords.longitude : 0,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {renderMarker()}
      </MapView>

      <View style={styles.locationView}>
        <Text style={styles.locationText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 1,
  },
  locationView: {
    position: "absolute",
    bottom: 10,
    left: 4,
    backgroundColor: "white",
    paddingTop: 50,
  },
  locationText: {
    position: "absolute",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "white",
  },
  HeadText: {
    left: 39,
    fontSize: 40,
    color: "#000",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  BackIcon: {
    marginTop: -33,
    left: 5,
    width: 30,
  },
});

export default Clinic;
