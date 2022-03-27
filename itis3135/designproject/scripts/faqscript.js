let $ = function(id)
{
	return document.getElementById(id);
}

function toggleStructureContent()
{
	let element = $('structure-content');
  let style = window.getComputedStyle(element);
  let display = style.getPropertyValue('display');
  console.log(display);
  
	if(display === 'block')
  {
  	$('structure-content').style.display = 'none';
  } else if(display === 'none')
  {
  	$('structure-content').style.display = 'block';
  }
}