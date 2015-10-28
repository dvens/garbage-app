var extend = require('./../../helpers/extend');

function GeoMap(id, options) {

	var _this = this;
	var _element = document.querySelector(id);
	var _value;

	var _defaults = {
		key: null
	}
	
	var _options = extend(options, _defaults);

	_this.markers = [];
	_this.controls = [];
	_this.map = new google.maps.Map(_element, _options);
	_this.zoom = _options.zoom;

	_this.map.addListener('center_changed', function() {
      
      checkBounds();

    });

	function checkBounds() {

	  var mapBounds = _this.map.getBounds();
	  var currLat = _this.map.getCenter().lat();
	  var currLng = _this.map.getCenter().lng();
	  var newLat = currLat;
	  var newLng = currLng;
	  
	  if( mapBounds.getNorthEast().lat() > 84 ) {
	    
	    newLat = currLat - (mapBounds.getNorthEast().lat() - 84);

	  } else if( mapBounds.getSouthWest().lat() < -84 ) {
	    
	    newLat = currLng + (-84 - mapBounds.getSouthWest().lat());

	  }
	  
	  if( (newLat != currLat) || (newLng != currLng) ) {
	    
	    var newCenter = new google.maps.LatLng(newLat, newLng, true);
	    _this.map.panTo(newCenter);

	  }

	}

	_this.addMarker = function(obj) {
		
		var marker = obj;

		marker.setMap(this.map);

		this.markers.push(marker);

		return marker;

	}

	_this.addMarkers = function(array) {

		for (var i = 0; i < array.length; i++) {
			
			this.addMarker(array[i]);

		}

		return this.markers;
	}

	_this.zoomOut = function(value) {

		_value = _value || 1;

      	this.zoom = this.map.getZoom() - value;
      	this.map.setZoom(this.zoom);

	}

	_this.zoomIn = function(value) {
		
		_value = _value || 1;

      	this.zoom = this.map.getZoom() + value;
      	this.map.setZoom(this.zoom);

	}

	_this.panTo = function() {
		// TODO: Pan to exact point
	}

	_this.center = function(lat, lng) {
		
		this.map.panTo(new google.maps.LatLng(lat, lng));

	}

}

module.exports = GeoMap;