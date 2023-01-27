// SIDE BAR CLOSE & OPEN START
// SIDE BAR CLOSE & OPEN START
// SIDE BAR CLOSE & OPEN START

const vendorSection= document.querySelector(".vendor-section");
const vendorAbout= document.querySelector(".vendor-section .vendor-about");
const vendorName= document.querySelector(".vendor-section .vendor-navigation-icon span");
const shadowRemover= document.querySelector(".shadow-remover");
const fullScreenSection= document.querySelector(".full-screen-section");
const dropdownSection=  document.querySelectorAll(".vendor-nav-more")



vendorSection.addEventListener('mouseover', function(){
    shadowRemover.style.width="20vw"
    fullScreenSection.classList.add('full-screen-section-width-class')

    // Open opened toggle
    for (i = 0; i < dropdownSection.length; i++){
        document.querySelectorAll(".vendor-nav-more")[i].style.height = "auto";
        document.querySelectorAll(".vendor-nav-more")[i].style.opacity = "1";
    }

})



vendorSection.addEventListener('mouseout', function(){
    shadowRemover.style.width="4vw"
    fullScreenSection.classList.remove('full-screen-section-width-class')
    
    // Close opened toggle
    for (i = 0; i < dropdownSection.length; i++){
        document.querySelectorAll(".vendor-nav-more")[i].style.height = "0vw";
        document.querySelectorAll(".vendor-nav-more")[i].style.opacity = "0";
    }
})


// SIDE BAR CLOSE & OPEN END
// SIDE BAR CLOSE & OPEN END
// SIDE BAR CLOSE & OPEN END

let plusIcon =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8.146 6.955" > <g id="plus" transform="translate(-442.5 -965)"> <line id="Line_771" data-name="Line 771" x2="7.146" transform="translate(443 968.478)" stroke-linecap="round" stroke-width="1" /> <line id="Line_772" data-name="Line 772" y2="5.955" transform="translate(446.572 965.5)" stroke-linecap="round" stroke-width="1" /> </g> </svg>`
let minusIcon=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 8.146 6.955" > <line id="minus" x2="8" transform="translate(0.5 0.5)" fill="red" stroke-linecap="round" stroke-width="1"/> </svg>`




const sideBarMenuToggle=(sideId)=>{

    const toggleButton = document.querySelector(`#${sideId}`)
    
    const toggleOption = toggleButton.querySelector('.vendor-nav-more')
    const modeDataButton = toggleButton.querySelector('.vendor-nav-btn')

    

        // Close All other toggled bar
        // Close All other toggled bar
        let sideArray=["side-nav1","side-nav2","side-nav3","side-nav4","side-nav5","side-nav6","side-nav7","side-nav8","side-nav9","side-nav10"]

        sideArray.map((x)=>{
            let newToggleButton = document.querySelector(`#${x}`);

            if(newToggleButton !== toggleButton){
                let newToggleOption= newToggleButton.querySelector('.vendor-nav-more');        
                newToggleOption.style.display = "none"
                newToggleButton.querySelector('.vendor-nav-btn').innerHTML=plusIcon;
            }
        })


            // Open toggle bar
            if(toggleOption.style.display === "none"){
                toggleOption.style.display = "grid"
                toggleOption.style.height="auto"
                toggleOption.style.opacity = "1"
                toggleButton.querySelector('.vendor-nav-btn').innerHTML=minusIcon;
            }
            
            // Close opened toggle bar
            else{
                toggleOption.style.display = "none"
                toggleButton.querySelector('.vendor-nav-btn').innerHTML=plusIcon;
            }
    }



// SIDE BAR DROPDOWN SECTION END
// SIDE BAR DROPDOWN SECTION END
// SIDE BAR DROPDOWN SECTION END

































