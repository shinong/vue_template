<template>
  <div ref="mapContainer" style="height: 500px; width: 100%"></div>
</template>

<script setup lang="ts">
import { Map as LeafletMap, Icon, Marker, tileLayer, Circle } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ref, onMounted, onUnmounted } from 'vue'
import { Layer } from 'leaflet'

// type conversion to fix the ts check issue
const enforceLayerType = (layer: any): Layer => layer as Layer

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
          enforceLayerType(new Marker([latitude, longitude], { title: 'you are here' })).addTo(
            mapInstance.value as LeafletMap
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
    mapInstance.value = new LeafletMap(mapContainer.value, { attributionControl: false }).setView(
      [43.4711, -80.5433],
      16
    )

    enforceLayerType(
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
      })
    ).addTo(mapInstance.value as LeafletMap)

    getCurrentLocation()
  }
})

// Cleanup on component unmount
onUnmounted(() => {
  if (mapInstance.value) {
    mapInstance.value.remove()
    mapInstance.value = null
  }
})
</script>

<style>
/* Ensure the map container has a height for rendering */
#map {
  height: 500px;
}
</style>
