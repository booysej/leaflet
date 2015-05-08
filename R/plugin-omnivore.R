leafletOmnivoreDependencies <- function() {
  list(
    htmltools::htmlDependency(
      "leaflet-omnivore",
      "0.3.0",
      system.file("htmlwidgets/lib/leaflet-omnivore", package = "leaflet"),
      script = "leaflet-omnivore.min.js"
    ),
    htmltools::htmlDependency(
      "leaflet-omnivore-plugin",
      packageVersion("leaflet"),
      system.file("htmlwidgets/plugins/leaflet-omnivore-plugin", package = "leaflet"),
      script = "leaflet-omnivore-plugin.js"
    )
  )
}


#' @param topojson a TopoJSON list, or character vector of length 1
#' @describeIn map-layers Add TopoJSON layers to the map
#' @export
addTopoJSON = function(map, topojson, layerId = NULL) {
  map$dependencies <- c(map$dependencies, leafletOmnivoreDependencies())
  invokeMethod(map, getMapData(map), 'addTopoJSON', topojson, layerId)
}
