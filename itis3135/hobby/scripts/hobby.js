function $(id)
{
	return document.getElementById(id);
}

window.addEventListener("click", function(evt)
{
  console.log("click detected")
	if(evt.target == $("home-button"))
  {
  	$("home-page-content").style.display = "auto";
  } else if(evt.target == $("systems-button") || evt.target == $("favorites-button") || evt.target == $("wishlist-button") || evt.target == $("about-button"))
  {
  	$("home-page-content").style.display = "none";
  }
  
  if(evt.target == $("systems-button"))
  {
  	$("systems-page-content").style.display = "auto";
  } else if(evt.target == $("home-button") || evt.target == $("favorites-button") || evt.target == $("wishlist-button") || evt.target == $("about-button"))
  {
  	$("systems-page-content").style.display = "none";
  }
  
  if(evt.target == $("favorites-button"))
  {
  	$("favorites-page-content").style.display = "auto";
  } else if(evt.target == $("systems-button") || evt.target == $("home-button") || evt.target == $("wishlist-button") || evt.target == $("about-button"))
  {
  	$("favorites-page-content").style.display = "none";
  }
  
  if(evt.target == $("wishlist-button"))
  {
  	$("wishlist-page-content").style.display = "auto";
  } else if(evt.target == $("systems-button") || evt.target == $("favorites-button") || evt.target == $("home-button") || evt.target == $("about-button"))
  {
  	$("wishlist-page-content").style.display = "none";
  }
  
  if(evt.target == $("about-button"))
  {
  	$("about-page-content").style.display = "auto";
  } else if(evt.target == $("systems-button") || evt.target == $("favorites-button") || evt.target == $("wishlist-button") || evt.target == $("home-button"))
  {
  	$("about-page-content").style.display = "none";
  }
})