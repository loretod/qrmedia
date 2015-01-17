//qrmedia.js

function signIn()
{
	$("#login form").hide();
	showPage("#home");
	console.log('Sign in was successful now record!');
}


function showPage(pageId)
{
	$(".page").not(pageId).hide();
	$(pageId).show();
	$(".loginform cf").hide();

}


function saveMedia(type)
{
	console.log('saving media of type: ' + type);
	//check to make sure they recorded something
	//upload it to cloud storage

	//go to the preview page...

}

function previewAudio()
{
	//create a link/qrcode to it
	//upload that to cloud
	showPage("#preview");
	saveMedia("audio")
}

function previewVideo()
{
	//create a link/qrcode to it
	//upload that to cloud
	showPage("#preview");
	saveMedia("video")
}

function print()
{
	console.log('print the QR code')
}


$( document ).ready(function() {
	$("#login").click(function(e){ signIn(); });

	$("#video_btn").click(function(e){ showPage("#record_video"); });
	$("#audio_btn").click(function(e){ showPage("#record_audio"); });
	

	$("#save_video").click( function(e){ previewVideo(); });
	$("#save_audio").click( function(e){ previewAudio(); }); 

	$("#makecode").click(function(e){ showPage("#QRpage"); });

	$("#makeanother").click(function(e){ showPage("#home"); });
	$("#print").click(function(e){ print(); });


});