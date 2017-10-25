var ids = ["contact", "about", "times"];
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
	//jQuery('#' + img_id + '-story').slideToggle(600);
	jQuery('#' + img_id + '-story').toggleClass('small-story large-story');
	jQuery('#' + img_id + '-details').slideToggle(1000);
	if(img_id = 'swim-pic' && swim == 0) {initMap(51.50694616, 7.46843398, 13, 'swim-map'); swim = 1;}
	if(img_id = 'swim-pic' && swim == 1) swim = 0;
	if(img_id = 'bike-pic' && bike == 0) {initMap(51.50694616, 7.46843398, 13, 'bike-map'); bike = 1;}
	if(img_id = 'bike-pic' && bike == 1) bike = 0;
	if(img_id = 'run-pic' && run == 0) {initMap(51.49331465, 7.45424509, 14, 'run-map'); run = 1;}
	if(img_id = 'run-pic' && run == 1) run = 0;
}

function initMaps()
{
	initMap(51.50694616, 7.46843398, 13, 'swim-map');
	initMap(51.50694616, 7.46843398, 13, 'bike-map');
	initMap(51.49331465, 7.45424509, 14, 'run-map');
}

function initMap(lat, lng, zoom, element_id)
{
	var pos = {lat: lat, lng:lng};
	var map = new google.maps.Map(document.getElementById(element_id), {
		zoom: zoom,
		center: pos
	});
	var mark = new google.maps.Marker({
	  position: pos,
	  map: map
	});
}
