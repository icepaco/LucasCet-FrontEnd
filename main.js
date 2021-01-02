$(document).ready(function(){
	$.get("/user", function(data) {
	    $("#user").html(data.login);
	    sessionStorage.userId = data.userId;
	    $(".unauthenticated").hide();
	    $(".authenticated").show();
	});
	var $anchors = $('.app-menu');
	$anchors.each(function(){
		$ele = $(this);
		$ele.click(function(e){
			e.preventDefault();
			loadPage($(this).attr('href'));
		});
	});
	/*
	$.ajaxSetup({
		  beforeSend : function(xhr, settings) {
		    if (settings.type == 'POST' || settings.type == 'PUT'
		        || settings.type == 'DELETE') {
		*/ //     if (!(/^http:.*/.test(settings.url) || /^https:.*/
		    /*      .test(settings.url))) {
		        // Only send the token to relative URLs i.e. locally.
		        xhr.setRequestHeader("X-XSRF-TOKEN",
		            Cookies.get('XSRF-TOKEN'));
		      }
		    }
		  }
		});
		*/
});

function loadHomePage()
{
	$("#content-load").fadeToggle("slow", function(){
		$("#main-screen").fadeToggle("slow");
		$("#content-load").html("");
		location.hash="";
	});


}
function logout()
{
    $.post("/logout", function() {
        $("#user").html('');
        $(".unauthenticated").show();
        $(".authenticated").hide();
    })
    return true;
}
function importPage(url)
{
	var $data = "";
	console.log("importPage from "+url);
	return $.ajax({
        url : url,
        type : "GET",
        dataType : "html"
    });
}

function loadAjax(url, loader)
{
	$loader = $(loader);
	$.ajax({
        url : url,
        type : "GET",
        dataType : "html"
    }).done(function(data) {
		$loader.fadeIn("slow");
        $loader.html(data);
        $("#content-load link").each(function() {
            var cssLink = $(this).attr('href');
            $("head").append("  <link href=\"" + cssLink + "\" rel=\"stylesheet\" />");
        });
		var handler = $("header[data-loader]").attr('data-loader');
		if (handler)
		{

			location.hash = handler;
			switch(handler)
			{
				case "multimedia" :

					loadMediaHandler();
					break;
				case "substance" :
					loadSubHandler();
					break;
				case "application" :
					loadAppHandler();
			}
		}
        $(loader+" script").each(function() {
            var jsLink = $(this).attr('src');
            $("head").append("<script type=\"text/javascript\" src=\"" + jsLink + "\"></script>");
 });

 }).fail(function(jqXHR, textStatus, errorThrown) {
 $loader.html("Error!! File is not loaded");
 });
}

function switchPage(url)
{
	$("#content-load").fadeToggle("slow", function(){
		loadAjax(url, "#content-load");
	});
}

function loadPage(url)
{
	$loader = $("#content-load");
	//$loader.html("Loading...");
	$loader.hide();
	$("#main-screen").fadeToggle("slow", function(){
		loadAjax(url, "#content-load");
	});
	    var pagelink = "/";
	    //var url = pagelink + "index.html";
}
