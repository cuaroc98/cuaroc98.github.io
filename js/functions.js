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

function resize(img_id)
{
	jQuery('#' + img_id).toggleClass('small', 'large');
}
