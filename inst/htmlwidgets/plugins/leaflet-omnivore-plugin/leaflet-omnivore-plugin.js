LeafletWidget.methods.addTopoJSON = function(data, layerId, parserOptions) {
  var self = this;
  if (typeof(data) === "string") {
    data = JSON.parse(data);
  }

  var globalStyle = data.style || {};

  var gjlayer = L.geoJson(null, {
    style: function(feature) {
      if (feature.style || feature.properties.style) {
        return $.extend({}, globalStyle, feature.style, feature.properties.style);
      } else {
        return globalStyle;
      }
    },
    onEachFeature: function(feature, layer) {
      var extraInfo = {
        featureId: feature.id,
        properties: feature.properties
      };
      var popup = feature.properties.popup;
      if (typeof popup !== 'undefined' && popup !== null) layer.bindPopup(popup);
      /*
      layer.on("click", mouseHandler(self.id, layerId, "geojson_click", extraInfo), this);
      layer.on("mouseover", mouseHandler(self.id, layerId, "geojson_mouseover", extraInfo), this);
      layer.on("mouseout", mouseHandler(self.id, layerId, "geojson_mouseout", extraInfo), this);
      */
    }
  });
  omnivore.topojson.parse(data, null, gjlayer);
  this.geojson.add(gjlayer, layerId);
};

