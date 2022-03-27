let $ = function(id)
{
	return document.getElementById(id);
}

function toggleStructureContent()
{
	if($('structure-content').style.display === auto)
  {
  	$('structure-content').style.display = none;
  } else if($('structure-content').style.display === none)
  {
  	$('structure-content').style.display = auto;
  }
}