var ids = ["contact", "about", "times"];

function initInitMaps()
{
	jQuery(document).ready(function(){
		
		initMaps();
	});
}

function showTest(id)
{
	jQuery('#' + id).slideToggle();
	jQuery('#' + id).attr('active', 'true');
	document.getElementById(id + '-btn').onclick = function(){hide(id)};
}

function show(id)
{
	for(var i = 0; i < ids.length; i++)
	{
		if(id != ids[i])
		{
			hide(ids[i]);
		}
		else if(jQuery('#' + id).attr('active') == 'false')
		{
			jQuery('#' + id).slideToggle();
			jQuery('#' + id).attr('active', 'true');
			document.getElementById(id + '-btn').onclick = function(){hide(id)};
		}
	}
}

function hide(id)
{
	if(jQuery('#' + id).attr('active') == 'true')
	{
		jQuery('#' + id).slideToggle();
		jQuery('#' + id).attr('active', 'false');
		document.getElementById(id + "-btn").onclick = function(){show(id)};
	}
}

var swim = 0;
var bike = 0;
var run = 0;
function resize(img_id)
{
	jQuery('#' + img_id).toggleClass('small large');
	jQuery('#' + img_id + '-cont').toggleClass('small-cont large-cont');
	jQuery('#' + img_id + '-story').toggleClass('small-story large-story');
	jQuery('#' + img_id + '-details').slideToggle(1000);
	jQuery('#' + img_id + '-border').toggleClass('small-border large-border');
	if(img_id = 'swim-pic' && swim == 0) {initSwimMap(); swim = 1;}
	if(img_id = 'swim-pic' && swim == 1) swim = 0;
	if(img_id = 'bike-pic' && bike == 0) {initBikeMap(); bike = 1;}
	if(img_id = 'bike-pic' && bike == 1) bike = 0;
	if(img_id = 'run-pic' && run == 0) {initRunMap(); run = 1;}
	if(img_id = 'run-pic' && run == 1) run = 0;
}

//MAPS
function initMaps()
{
	initSwimMap();
	initBikeMap();
	initRunMap();
}

function initSwimMap()
{
	initMap(51.5075000, 7.4430556, 12, 'swim-map', [{pos: {lat: 51.50694616, lng:7.46843398}, label: 'A'}, {pos: {lat: 51.508187, lng: 7.417848}, label: 'B'}]);
}

function initBikeMap()
{
	initMap(51.50694616, 7.46843398, 13, 'bike-map', [{pos: {lat: 51.50694616, lng: 7.46843398}, label: 'C'}]);
}

function initRunMap()
{
	initMap(51.49331465, 7.45424509, 13, 'run-map', [{pos: {lat: 51.49331465, lng: 7.45424509}, label: 'E'}]);
}

function initMap(lat, lng, zoom, element_id, markers)
{
	var pos = {lat: lat, lng:lng};
	var map = new google.maps.Map(document.getElementById(element_id), {
		zoom: zoom,
		center: pos
	});
	
	for(var i = 0; i < markers.length; i++)
	{
		marker = markers[i];
		var mark = new google.maps.Marker({
	    position: marker.pos,
	    map: map,
	    label: marker.label
		});
	}
}