// import { View, Text, Pressable } from "react-native";
// import React, { useRef } from "react";
// import { useRoute } from "@react-navigation/native";
// import MapView, { Marker } from "react-native-maps";

// const MapScreen = () => {
//   const route = useRoute();
//   const mapView = useRef(null);

//   return (
//     <View>
//       <MapView
//         initialRegion={{
//           latitude:
//             route.params.searchPlaces[0].properties[0].coordinate.latitude,
//           longitude:
//             route.params.searchPlaces[0].properties[0].coordinate.longitude,
//           latitudeDelta:
//             route.params.searchPlaces[0].properties[0].coordinate.latitude,
//           longitudeDelta:
//             route.params.searchPlaces[0].properties[0].coordinate.longitude,
//         }}
//         ref={mapView}
//         style={{ width: "100%", height: "100%" }}
//       >
//         {route.params.searchPlaces.map((item) =>
//           item.properties.map((property) => (
//             <Marker
//               key={property.id}
//               coordinate={property.coordinate}
//               title={property.name}
//               description={`Coordinates: ${property.coordinate.latitude}, ${property.coordinate.longitude}`}
//             >
//               <Pressable className="bg-[#003580] px-2 py-1 rounded-[4px]">
//                 <Text className="text-[15] text-white text-center font-bold">
//                   {property.newPrice}
//                 </Text>
//               </Pressable>
//             </Marker>
//           ))
//         )}
//       </MapView>
//     </View>
//   );
// };

// export default MapScreen;

import { Pressable, Text, View } from "react-native";
import React, { useRef, useEffect, useState } from "react"; // Import useState and useEffect
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const route = useRoute();
  const mapView = useRef(null);
  const [initialRegion, setInitialRegion] = useState(null);

  useEffect(() => {
    if (route.params.searchPlaces.length > 0) {
      const coordinates = route.params.searchPlaces
        .map((item) => item.properties.map((property) => property.coordinate))
        .flat();
      const latitudes = coordinates.map((coord) => coord.latitude);
      const longitudes = coordinates.map((coord) => coord.longitude);

      const minLat = Math.min(...latitudes);
      const maxLat = Math.max(...latitudes);
      const minLng = Math.min(...longitudes);
      const maxLng = Math.max(...longitudes);

      const centerLat = (minLat + maxLat) / 2;
      const centerLng = (minLng + maxLng) / 2;
      const latDelta = maxLat - minLat + 0.1; // Adding a small offset
      const lngDelta = maxLng - minLng + 0.1; // Adding a small offset

      const region = {
        latitude: centerLat,
        longitude: centerLng,
        latitudeDelta: latDelta,
        longitudeDelta: lngDelta,
      };
      setInitialRegion(region);
    }
  }, [route.params.searchPlaces]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapView}
        style={{ flex: 1 }}
        initialRegion={initialRegion} // Set the initialRegion
      >
        {route.params.searchPlaces.map((item) =>
          item.properties.map((property) => (
            <Marker
              key={property.id}
              coordinate={property.coordinate}
              title={property.name}
              description={`Coordinates: ${property.coordinate.latitude}, ${property.coordinate.longitude}`}
            >
              <Pressable className="bg-[#003580] px-2 py-1 rounded-[4px]">
                <Text className="text-[15] text-white text-center font-bold">
                  {property.newPrice}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;
