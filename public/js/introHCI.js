'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	console.log("Attempting to grab URL: project/"+idNumber);
	$.get("/project/"+idNumber, callback);
}

function callback(result){
	console.log(result);
	var id = result['id'];
	console.log(id);
	console.log("callback being called");
	//OR $('#project'+id).find('.details').html("This works too!");

	$("#project" + id + " .details").html("<img src=\'"+result['image']+
											"\' class=\'detailsImage\'>" + "<h2>" + result['date'] + "</h2>" + 
											result['summary']);


}