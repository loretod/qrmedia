//qrmedia.js


function showPage(pageId)
{
	$(".page").not(pageId).hide();
	$(pageId).show();
}


function saveMedia(type)
{
	console.log('saving media of type: ' + type);
	//check to make sure they recorded something
	//upload it to cloud storage

	//go to the preview page...

}

function confirmMedia()
{
	//create a link/qrcode to it
	//upload that to cloud
}



$( document ).ready(function() {
	$("#video_btn").click(function(e){ showPage("#record_video"); });
	$("#audio_btn").click(function(e){ showPage("#record_audio"); });
	

	$("#save_video").click( function(e){ saveMedia("video"); } );
	$("#save_audio").click( function(e){ saveMedia("audio"); } );


});