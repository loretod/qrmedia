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

function previewMedia()
{
	//create a link/qrcode to it
	//upload that to cloud
	showPage()
}


$( document ).ready(function() {
	$("#video_btn").click(function(e){ showPage("#record_video"); });
	$("#audio_btn").click(function(e){ showPage("#record_audio"); });
	

	$("#save_video").click( function(e){ showPage("#preview"); });
		//event.saveMedia("video") ; 
		
	$("#save_audio").click( function(event){ 
		event.saveMedia("audio") ;
		event.showPage("#audio_preview")
	} );

	$("#create account").click( function(e){ showPage("#create account"); });

	//$("#preview_video").click( function(e){ showPage("video_preview"); } );showPage("audio_preview")
	//$("#preview").click( function(e){ ; } );


});