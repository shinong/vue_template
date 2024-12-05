<template>
  <div ref="mapContainer" style="height: 500px; width: 100%"></div>
</template>

<script setup lang="ts">
import { Map as LeafletMap, Icon, Marker, tileLayer, Circle } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ref, onMounted } from 'vue'

// References
const mapContainer = ref<HTMLElement | null>(null) // Use ref for the map container
const mapInstance = ref<LeafletMap | null>(null) // use ref for the map instance

// get current geolocation
const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords

        // Center the map to the user's location
        if (mapInstance.value) {
          mapInstance.value.setView([latitude, longitude], 15)

          // Add a marker for the current location
          const marker = new Marker([latitude, longitude], { tiitle: 'you are here' }).addTo(
            mapInstance.value
          )
        }
      },
      (error) => {
        console.error('Error getting location:', error.message)
      }
    )
  } else {
    console.error('Geolocation is not supported by this browser.')
  }
}

onMounted(() => {
  if (mapContainer.value) {
    // Initialize the Leaflet map
    mapInstance.value = new LeafletMap(mapContainer.value).setView([43.4711, -80.5433], 16)
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapInstance.value)

    getCurrentLocation()
  }
})
</script>

<style>
/* Ensure the map container has a height for rendering */
#map {
  height: 500px;
}
</style>
