// Need to find elements with class ONLY "mtm". Then search for a href within them. 
// Then add in a div at the top of mtm

// Start our delayed check and keep track of how many
var count = 0; 
stateChange(-1);

// This adds a recheck after 2 seconds
function stateChange(newState) {
    setTimeout(function(){
        if(newState == -1){runAnalysis()}
    }, 2000);
}

// This actually runs the analysis of the page
function runAnalysis() {
    var mediaDivs = document.getElementsByClassName("mtm"); 
    if(count === mediaDivs.length)
    {
        // Call back to our waiting period and leave
        stateChange(-1);
        return;
    }
    
    // Assign the index to only add new ones
    var index = count;

    for (index; index < mediaDivs.length; ++index) {
        // assign an element
        var element = mediaDivs[index];

        // Get the first link
        var mediaLink = element.getElementsByTagName('a')[0].getAttribute('href');
        
        // Here we would query a webservice to evaluate the integrity of it
        //
    
        // Create a new span with this information
        var integrityDiv = document.createElement('div');
        integrityDiv.innerText = mediaLink;
    
        // Insert this before the media conteint
        element.insertBefore(integrityDiv,element.firstElementChild);
    }

    // Increase our count to not run repeats
    count = mediaDivs.length;

    // Call back to our waiting period
    stateChange(-1);
    return;
}



// Need to parse FB links:
// https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.brooksbrothers.com%2F4-for-%2524199-Dress-Shirts%2Fmen-columbus-day-sale%2Cdefault%2Csc.html%3Futm_content%3D59d707bb9c765%26utm_term%3Ddesktopfeed%26utm_campaign%3DD_C_1200x628%26utm_medium%3Dsocial%26utm_source%3DFacebook%26CMP%3DBAC_US_FB_DR_PS_COLUMBUSDAY_ALL_DLP_59d707bb9c765&h=ATP7k7Fjhuv93jWvAq46b7iC36j82LPfL2N