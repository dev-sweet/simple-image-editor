const memberItemData = [
    {
        _id: "01",
        img: "images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg",
        online: "",
        name: "Maliha Mouli",
        id: "",
        porfileIcon: "",
        sendIcon: ""
    },
    {
        _id: "02",
        img: "images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg",
        online: "images/icons/Group 9059.svg",
        name: "Maliha Mouli",
        id: "9297343",
        porfileIcon: "images/icons/google (2).svg",
        sendIcon: "images/icons/Send_3_.svg"
    },
    {
        _id: "03",
        img: "images/nav_image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg",
        online: "images/icons/Group 9059.svg",
        name: "shahjalal rafi",
        id: "9297343",
        porfileIcon: "images/icons/google (2).svg",
        sendIcon: "images/icons/Send_3_.svg"
    },
]

// all selector defined here
const oflineUserBtn = document.getElementById('offline-user')
const dutypediaUserBtn = document.getElementById('dutypedia-user')
const handleBookList = document.getElementById("book-list")
const handleCreateGroupBtn = document.getElementById("create-group-btn")
const groupPartSection = document.getElementById("group-part")
const handleCreatedBookList = document.querySelector("#created-book-list")
const addMoreBookList = document.getElementById("addMore-bookList")
const postDataBtn = document.querySelector("#postDataBtn")
const userInputRowEdit = document.querySelector("#edit-input-field")
const cancleEditInput = document.querySelector("#cancleEditInput")
const deleteTableRow = document.querySelector("#delete-input-field")
const denyBtnToDelete = document.querySelector("#denyBtn")
const saveRowDataBtn = document.querySelector("#saveDataBtn")
const confirmDeleteRowBtn = document.querySelector("#confirmDeleteBtn")
const handleRoutineCard = document.querySelector(".routine-card")
const handleClassRoutine = document.querySelector("#class-routine")
const handleDietRoutine = document.querySelector("#diet-routine")
const handleWorkoutRoutine = document.querySelector("#workout-routine")
const handleAddMoreRoutineBtn = document.getElementById("addMore-routine-btn")
const createdClassRoutineIconBtn = document.getElementById("created-class-routine")
const classRoutineChoosDayNext = document.getElementById("choosDayNext")
const classRoutineCancelChoosDay = document.getElementById("choosDayCancel")
const createClassRoutineBtn = document.getElementById("createRoutineBtn")
const cancelCreateRoutineBtn = document.getElementById("cancelCreateRoutineBtn")
const editClassRoutineBtn = document.getElementById("edit-class-routine")
const removeClassRoutineBtn = document.getElementById("delete-class-routine")
const confirmRoutineDeletePopupBtn = document.getElementById("confirmRoutineDeleteBtn")
const cancleRoutineDeletePopup = document.getElementById("cancleRoutineDeleteBtn")
const yesCreateRoutineCancelBtn = document.getElementById("yes_CreateRoutine_CancelBtn")
const noCreateRoutineBtn = document.getElementById("no_CreateRoutine_Btn")
const createdNewClassRoutine = document.getElementById("created-new-classRoutine")
const afterEditRoutineSaveBtn = document.getElementById("afterEditRoutineSaveBtn")
const editRoutineCancelBtn = document.getElementById("cancelEditRoutineSaveBtn")
// diet routine start
const addDietRoutineTableRow = document.getElementById("addDietRoutineRow")
const createdDietRoutine = document.getElementById("created-diet-routine")
const dietChoosDateNextBtn = document.getElementById("dietChoosDateNextBtn")
const dietChoosDateCancelBtn = document.getElementById("dietChoosDateCancelBtn")
const createDietRoutineBtn = document.getElementById("createDietRoutineBtn")
const dietRoutineSaveCancelBtn = document.getElementById("dietRoutineSaveCancel")
const cancelDietRoutineBtn = document.getElementById("cancelDietRoutineBtn")
const dietRoutineName = document.getElementById("routine-name")

// diet Routine Date
const saveDiet = document.getElementById("dietRoutineSave")

// Manager List
const threeDots = document.getElementById("ingredients__3dots")
const ingredientProfile = document.getElementById("ingredients__profile")
const ingredientMessage = document.getElementById("ingredients__message")
const deleteBtn = document.getElementById("DeleteBtn")
const memberList = document.getElementById("Member-list")
const memberListOnline = document.querySelector(".member-list-online")
const memberListOffLine = document.querySelector(".member-lists-offline")


const memberDutypediaUser = document.getElementById("member-dutypedia-user")
const memberOfflineUser = document.getElementById("member-offline-user")

const onlineAndOfflineMember = document.getElementById("onlineAndOffLineMember")
const addMember = document.getElementById("addMember")

const PopUpCencelMember = document.getElementById("cencelDeleteMember")
const PopUpDeleteMember = document.getElementById("confirmDeleteMember")

// add mentor variable
const addMentor = document.getElementById("addMentor")
const MentorPopUpStop = document.querySelector(".cross-btn")
const allMentor = document.getElementById("mentorList")
const cancelBtnSelectedMentor = document.querySelector(".popup-cancel-btn")
const selectedMentorBtn = document.querySelector(".selected-mentor-btn")
const addSelectedMentor = document.querySelector(".popup-add-btn")

const mentor1 = document.getElementById("mentor1")

selectedMentorBtn.addEventListener("click", () => {
    document.getElementById("selected-mentor").remove()
})

addSelectedMentor.addEventListener("click", () => {
    displayMentor(memberItemData)
    document.getElementById("selected-mentor-popup").style.display = "none";
    document.getElementById("academic-activities-section").style.filter = "blur(0px)" //blur display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(0px)" //blur display
    document.querySelector(".vendor-section").style.filter = "blur(0px)"
})

mentor1.addEventListener("click", () => {
    document.querySelector(".mentor-popup-text").style.display = "none";
    document.getElementById("selected-mentor-popup").style.display = "block";

})

addMentor.addEventListener("click", () => {
    document.querySelector(".mentor-popup-text").style.display = "block";
    document.getElementById("academic-activities-section").style.filter = "blur(2px)"; //blur display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(2px)"; //blur display
    document.querySelector(".vendor-section").style.filter = "blur(2px)";
})

MentorPopUpStop.addEventListener("click", () => {
    document.querySelector(".mentor-popup-text").style.display = "none";
    document.getElementById("academic-activities-section").style.filter = "blur(0px)" //blur display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(0px)" //blur display
    document.querySelector(".vendor-section").style.filter = "blur(0px)"
})

cancelBtnSelectedMentor.addEventListener("click", () => {
    document.getElementById("selected-mentor-popup").style.display = "none";
    document.getElementById("academic-activities-section").style.filter = "blur(0px)" //blur display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(0px)" //blur display
    document.querySelector(".vendor-section").style.filter = "blur(0px)"
})

function displayMember(allMembers) {
    const memberListContainer = document.getElementById("memberList")
    allMembers.forEach(member => {
        memberListContainer.innerHTML = `
        <div className="member__item" id="member__item1">
        <div className="member__item__details">
        <img src=${member.img} alt="men 1">
        <img id="isOnline" src=${member.online} alt="message">
            <div className="member__item__details__personal">
                <h4 className="member__item__details-name">${member.name}</h4>
                <p className="member__item__details-id">Id : ${member.id}</p>
            </div>
        </div>
        <div className="member__item__ingredients">
            <div id="ingredients__profile" className="member__item__ingredients_profile">
                <img src=${member.porfileIcon} alt="profile">
            </div>
            <div id="ingredients__message" className="member__item__ingredients_message">
                <img src=${member.sendIcon} alt="message">
            </div>
            <div id="DeleteBtn">Delete</div>
            <div id="ingredients__3dots" className="member__item__ingredients_option">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
        `
    })
}

function displayMentor(allMentor) {

    const mentorListContainer = document.getElementById("mentorList")
    allMentor.forEach(mentor => {
        const mentorDiv = document.createElement('div')
        mentorDiv.className = "mentor__item"
        // mentorDiv.setAttribute("id", mentor._id);
        mentorDiv.innerHTML = `
        <div className="member__item__details">
        <img src=${mentor.img} alt="men 1">
        ${mentor.online ? `<img id="isOnline" src="${mentor.online}" alt="message" />` : ""}
            <div className="member__item__details__personal">
                <h4 className="member__item__details-name">${mentor.name}</h4>
                ${mentor.id ? `<p className="member__item__details-id">Id : ${mentor.id}</p>` : ""}
            </div>
        </div>
        <div className="member__item__ingredients">
        ${mentor.porfileIcon ? `<div id="ingredients__profile" className="member__item__ingredients_profile">
        <img src="${mentor.porfileIcon}" alt="profile">
        </div>` : ""}
        ${mentor.sendIcon ? `<div id="ingredients__message" className="member__item__ingredients_message">
        <img src=${mentor.sendIcon} alt="send">
    </div>` : ""}
            <div className="DeleteBtnMentor" onclick="">Delete</div>
            <div onclick='testing()' className="member__item__ingredients_option">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        `
        mentorListContainer.appendChild(mentorDiv)
    })
}


function testing() {
    const items = document.querySelectorAll(".mentor__item")
    items.forEach(item => {
        let mentorButton = item.querySelector(".member__item__ingredients_option")
        console.log(mentorButton)
        mentorButton.addEventListener("click", function() {
            items.forEach(mentor => {
                if(item !== mentor) {
                    console.log(mentor)
                    console.log(mentor.childNodes)
                    mentor.classList.add("DeleteBtnMentorShow")
                    mentor.classList.add("DeleteBtnMentorShow")
                    console.log(mentor.childNodes)
                }
            })
        })
    })
}


displayMentor(memberItemData)

// function handleMentorProfile(id) {
//     console.log(memberItemData, id)
// }

addMember.addEventListener("click", () => {
    onlineAndOfflineMember.style.display = "block";
    document.getElementById("memberList").style.display = "none";
    document.getElementById("searchAddSection").style.display = "none";
    document.querySelector(".member__option").style.display = "none"
})

deleteBtn.addEventListener("click", showDeleteMemberModal)

function showDeleteMemberModal(){
    document.getElementById("delete-member-popup").style.display = "block"
    document.getElementById("academic-activities-section").style.filter = "blur(2px)" //blur display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(2px)" //blur display
    document.querySelector(".vendor-section").style.filter = "blur(2px)"
}

memberOfflineUser.addEventListener("click", () => {
    memberOfflineUser.style.borderBottom = "1px solid red"
    memberOfflineUser.style.color = "red"
    memberDutypediaUser.style.borderBottom = "1px solid #ddd"
    memberDutypediaUser.style.color = "#ccc"
    memberListOnline.style.display = "none"
    memberListOffLine.style.display = "block"
})

memberDutypediaUser.addEventListener("click", () => {
    memberOfflineUser.style.borderBottom = "1px solid #ddd"
    memberOfflineUser.style.color = "#ccc"
    memberDutypediaUser.style.borderBottom = "1px solid red"
    memberDutypediaUser.style.color = "red"
    memberListOnline.style.display = "block"
    memberListOffLine.style.display = "none"
})

PopUpCencelMember.addEventListener("click", () => {
    document.getElementById("delete-member-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0px)" //blur display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(0px)" //blur display
    document.querySelector(".vendor-section").style.filter = "blur(0px)"
})

PopUpDeleteMember.addEventListener("click", () => {
    document.getElementById("delete-member-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0px)" //blur display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(0px)" //blur display
    document.querySelector(".vendor-section").style.filter = "blur(0px)"

    document.getElementById("member__item1").remove()
})

// selectAll.addEventListener("click", () => {
//     document.querySelectorAll("checkbox").style.backgroundColor = "black"
// })

// const dietStartDate = document.getElementById("selectDate")
// dietStartDate.valueAsDate = new Date()

// dietStartDate.onchange
// function dietStartDate(objecet) {
//     console.log(objecet.value)
// }

threeDots.addEventListener("click", handleProfile)
memberList.addEventListener("click", handleMemberList)

// threeDots.forEach(ele => {
//     ele.addEventListener("click", handleProfile)
// })

function handleProfile() {
    deleteBtn.style.display = "block"
}

function handleMemberList() {
    document.getElementById("member-listing-section").style.display = "block"
    // displayMember(memberItemData)
}

function handleStartDate(event) {
    let startDate = event.target.value
    console.log(startDate)
    document.getElementById("selectStartDate").value = startDate
}

dietRoutineName.addEventListener("click", handleRoutineName)

function handleRoutineName(event) {
    let routineName = event.target.value
    document.getElementById("routineName").innerText = routineName
}



// class routine js start here
// class routine js start here
// class routine js start here


// handleClassRoutine for make class routine active btn
handleClassRoutine.addEventListener("click", () => {
    routineButtonGroupColorMangaement(handleClassRoutine, handleDietRoutine, handleWorkoutRoutine)
    document.querySelector(".diet-routine-input").style.display = "none"
    document.querySelector(".diet-routine-section-table").style.display = "none"
    document.querySelector("#diet-routine-getuserInput").style.display = "none"
    displayShowHideElement("#created-class-routine", "#created-diet-routine")
})
// handleDietRoutine for make class routine active btn
handleDietRoutine.addEventListener("click", () => {
    routineButtonGroupColorMangaement(handleDietRoutine, handleClassRoutine, handleWorkoutRoutine)
})


// handleWorkOutRoutine for make class routine active btn
handleWorkoutRoutine.addEventListener("click", () => {
    routineButtonGroupColorMangaement(handleWorkoutRoutine, handleClassRoutine, handleDietRoutine)
})


// class routine function area

// routineButtonGroupColorMangaement function 
function routineButtonGroupColorMangaement(activeColorId, fixedColor_1_Id, fixedColor_2_Id) {
    activeColorId.style.color = "#E22222"
    activeColorId.style.borderColor = "#E22222"
    fixedColor_1_Id.style.color = "#666666"
    fixedColor_1_Id.style.borderColor = "#666666"
    fixedColor_2_Id.style.color = "#666666"
    fixedColor_2_Id.style.borderColor = "#666666"
}


// display show and hide by id/class function start here 

function displayShowHideElement(displayShowId, displayHideId) {
    document.querySelector(displayShowId).style.display = "block"
    document.querySelector(displayHideId).style.display = "none"
}

// class routine plus(create a routin) icon handelerr
createdClassRoutineIconBtn.addEventListener("click", () => {
    displayShowHideElement("#routine-user-input", "#created-class-routine")
})


// handle user choose day selection btn
classRoutineChoosDayNext.addEventListener("click", () => {
    displayShowHideElement("#class-routine-table-section", "#routine-user-input")
    document.getElementById("classroutine-editBtn-bottom").style.display = "none"
})

// handle user cancel choose day btn
classRoutineCancelChoosDay.addEventListener("click", () => {
    displayShowHideElement("#created-class-routine", "#routine-user-input")
})

// handle create routine btn
createClassRoutineBtn.addEventListener("click", () => {
    displayShowHideElement("#after-created-routine", "#class-routine-table-section")
})

// handle edit routine
editClassRoutineBtn.addEventListener("click", () => {
    document.getElementById("class-routine-table-section").style.display = "block"
    document.getElementById("after-created-routine").style.display = "none"
    document.getElementById("classroutine-editBtn-bottom").style.display = "block"
    document.getElementById("classroutine-editBtn-top").style.display = "none"
})

// handle edit routine
afterEditRoutineSaveBtn.addEventListener("click", () => {
    document.getElementById("class-routine-table-section").style.display = "none"
    document.getElementById("after-created-routine").style.display = "block"
})

// editRoutineCancelBtn hanldeler
editRoutineCancelBtn.addEventListener("click", () => {
    document.getElementById("class-routine-table-section").style.display = "none"
    document.getElementById("after-created-routine").style.display = "block"
    document.getElementById("classroutine-editBtn-bottom").style.display = "none"

})


// handle edit routine and show delete pop up
removeClassRoutineBtn.addEventListener("click", () => {
    document.getElementById("delete-routine-popup").style.display = "block"
    document.getElementById("academic-activities-section").style.filter = "blur(2px)" //blur display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(2px)" //blur display
    document.querySelector(".vendor-section").style.filter = "blur(2px)" //blur display
})


// handle cancel remove routine pop up box
cancleRoutineDeletePopup.addEventListener("click", () => {
    document.getElementById("delete-routine-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".vendor-section").style.filter = "blur(0)" //remove blur from display
})


// handle  remove routine pop up box
confirmRoutineDeletePopupBtn.addEventListener("click", () => {
    document.getElementById("after-created-routine").style.display = "none"
    document.getElementById("delete-routine-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".vendor-section").style.filter = "blur(0)" //remove blur from display
    document.getElementById("created-class-routine").style.display = "block"

})

// handle  remove routine pop up box
cancelCreateRoutineBtn.addEventListener("click", () => {
    document.getElementById("cancel-routine-popup").style.display = "block"
    document.getElementById("academic-activities-section").style.filter = "blur(2px)" //remove blur from display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(2px)" //remove blur from display
    document.querySelector(".vendor-section").style.filter = "blur(2px)" //remove blur from display

})




// handle  yes CreateRoutine CancelBtn pop up box
yesCreateRoutineCancelBtn.addEventListener("click", () => {
    document.getElementById("class-routine-table-section").style.display = "none"
    document.getElementById("cancel-routine-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".vendor-section").style.filter = "blur(0)" //remove blur from display
    document.getElementById("created-class-routine").style.display = "block"

})

// handle  yes CreateRoutine CancelBtn pop up box
noCreateRoutineBtn.addEventListener("click", () => {
    document.getElementById("cancel-routine-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".vendor-section").style.filter = "blur(0)" //remove blur from display
})


// handle  yes CreateRoutine CancelBtn pop up box
createdNewClassRoutine.addEventListener("click", () => {
    document.getElementById("routine-user-input").style.display = "block"
    document.getElementById("after-created-routine").style.display = "none"
})



// handle routine table coloum
handleAddMoreRoutineBtn.addEventListener("click", () => {
    const tableCol = document.createElement("div")
    tableCol.className = "routine-coloum order-3"
    tableCol.innerHTML =
        `
            <ul className="mx-0 px-0">
                <li><input type="text" className="selection-day-col" value="1st class"></li>
                <li>
                    <div className="d-flex time-input-container">
                        <input type="time" className="select-time-input" value="09:30:00">
                        <span>to</span>
                        <input type="time" className="select-time-input" value="09:30:00">
                    </div>
                </li>
                <li><input type="text" className="input-class-subject" value="Bangla"></li>
                <li><input type="text" className="input-class-subject" value="Bangla"></li>
                <li><input type="text" className="input-class-subject" value="Bangla"></li>
                <li><input type="text" className="input-class-subject" value="Bangla"></li>
                <li><input type="text" className="input-class-subject" value="Bangla"></li>
                <li><input type="text" className="input-class-subject" value="Bangla"></li>
                <li><input type="text" className="input-class-subject"></li>
            </ul>
    `
    document.querySelector(".routine-table-body-section").appendChild(tableCol)
})


// const showPopupBox = () => {

// }

// class routine end here
// class routine end here
// class routine end here

// ========================================================================================================
//==================================class routine end here===============================================
//========================================================================================================



// ========================================================================================================
//==================================diet routine start here===============================================
//========================================================================================================

addDietRoutineTableRow.addEventListener("click", () => {
    const dietRoutineTableRow = document.createElement("div")
    dietRoutineTableRow.className = "diet-routine-table-body"
    dietRoutineTableRow.innerHTML = `
    <div className="diet-routine-table-body-text">
                                            <input type="text" className="diet-meals-title" value="Breakfast">
                                        </div>
                                        <div id="dietTimeAdjustBtn" className="diet-routine-table-body-text">
                                            <button onclick="handleAdjustTime()" className="cmnBtn border-0">Adjust Time</button>
                                        </div>
                                        <div className="diet-routine-table-body-text choose-diet-day" id="dietSaturday">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="diet-routine-table-body-text choose-diet-day dietSun1" id="dietSunday">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="diet-routine-table-body-text choose-diet-day" id="dietMonday">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="diet-routine-table-body-text choose-diet-day" id="dietTuesday">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="diet-routine-table-body-text choose-diet-day" id="dietWednesday">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="diet-routine-table-body-text choose-diet-day" id="dietThursday">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="diet-routine-table-body-text choose-diet-day" id="dietFriday">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div className="clear"></div>
    `
    document.querySelector("#diet-routine-table").appendChild(dietRoutineTableRow)
})




handleDietRoutine.addEventListener("click", () => {
    // document.querySelector("#created-class-routine").style.display = "none"
    // document.querySelector("#created-diet-routine").style.display = "block"
    displayShowHideElement("#created-diet-routine", "#created-class-routine")
    document.querySelector("#routine-user-input").style.display = "none"
})

// handle create a diet routine 
createdDietRoutine.addEventListener("click", () => {
    // document.querySelector("#created-diet-routine").style.display = "none"
    // document.querySelector("#routine-user-input").style.display = "block"
    displayShowHideElement(".diet-routine-input", "#created-diet-routine");
})

// cancel create a diet routine
dietChoosDateCancelBtn.addEventListener("click", () => {
    displayShowHideElement("#created-diet-routine", ".diet-routine-input")
})

// after user get input processed to next next option
dietChoosDateNextBtn.addEventListener("click", () => {
    displayShowHideElement("#diet-routine-getuserInput", ".diet-routine-input")
    document.querySelector(".diet-routine-section-table").style.display = "block"
    document.querySelector("#diet-routine-table-btn").style.display = "block"
})


// create diet routine 

// var adjustTime = document.querySelector(".diet-routine-table-body-text .cmnBtn")
// adjustTime.addEventListener("click", handleAdjustTime)

function handleAdjustTime() {
    displayShowHideElement("#diet-rotine-chooseDay-popup", "#diet-routine-table-btn")
    document.querySelector("#diet-routine-getuserInput").style.display = "none "
    document.querySelector(".diet-routine-section-table").style.filter = "blur(2px)"
    document.querySelector(".diet-routine-section-table").style.backgroundColor = "#FDEBEB"
    var cols = document.getElementsByClassName('diet-meals-title');
    for (i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor = '#FDEBEB';
    }

    // diet Time
    let dietSat = document.getElementById("satardayTime").value
    const dietSun = document.getElementById("sundayTime").value
    const dietMon = document.getElementById("mondayTime").value
    const dietTues = document.getElementById("tuesdayTime").value
    const dietWed = document.getElementById("wednesdayTime").value
    const dietThurs = document.getElementById("thursdayTime").value
    const dietFri = document.getElementById("fridayTime").value

    console.log(dietSat, dietSun, dietMon, dietSun, dietTues, dietWed, dietThurs, dietFri)

    dietSat = ""
    console.log(dietSat)
}

// cancel adjust time diet routine 
dietRoutineSaveCancelBtn.addEventListener("click", () => {
    displayShowHideElement("#diet-routine-table-btn ", "#diet-rotine-chooseDay-popup")
    document.querySelector("#diet-routine-getuserInput").style.display = "block "
    document.querySelector(".diet-routine-section-table").style.filter = "blur(0px)"
    document.querySelector(".diet-routine-section-table").style.backgroundColor = "#fff"
    var cols = document.getElementsByClassName('diet-meals-title');
    for (i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor = '#fff';
    }
})


// diet adjust



saveDiet.addEventListener("click", handleSaveDiet)

function handleSaveDiet() {
    // document.getElementById("diet-routine-table").style.display = "none"

    // diet Time
    let dietSat = document.getElementById("satardayTime").value
    const dietSun = document.getElementById("sundayTime").value
    const dietMon = document.getElementById("mondayTime").value
    const dietTues = document.getElementById("tuesdayTime").value
    const dietWed = document.getElementById("wednesdayTime").value
    const dietThurs = document.getElementById("thursdayTime").value
    const dietFri = document.getElementById("fridayTime").value

    // diet Icon
    const dietSatIcon = document.querySelector("#dietSaturday i")
    const dietSunIcon = document.querySelector("#dietSunday i")
    const dietMonIcon = document.querySelector("#dietMonday i")
    const dietTuesIcon = document.querySelector("#dietTuesday i")
    const dietWedIcon = document.querySelector("#dietWednesday i")
    const dietThursIcon = document.querySelector("#dietThursday i")
    const dietFriIcon = document.querySelector("#dietFriday i")

    let p = document.createElement("p")

    if (dietSat !== "") {
        dietSatIcon.style.display = "block"
        document.getElementById("dietSaturday").append(p.innerText = document.getElementById("satardayTime").value)
        document.getElementById("satardayTime").value = ""
    }
    if (dietSun !== "") {
        dietSunIcon.style.display = "block"
        document.querySelector(".dietSun1").append(p.innerText = dietSun)
    }
    if (dietMon !== "") {
        dietMonIcon.style.display = "block"
        document.getElementById("dietMonday").append(p.innerHTML = dietMon)
    }
    if (dietTues !== "") {
        dietTuesIcon.style.display = "block"
        document.getElementById("dietTuesday").append(p.innerText = dietTues)
    }
    if (dietWed !== "") {
        dietWedIcon.style.display = "block"
        document.getElementById("dietWednesday").append(p.innerText = dietWed)
    }
    if (dietThurs !== "") {
        dietThursIcon.style.display = "block"
        document.getElementById("dietThursday").append(p.innerText = dietThurs)
    }
    if (dietFri !== "") {
        dietFriIcon.style.display = "block"
        document.getElementById("dietFriday").append(p.innerText = dietFri)
    }

    displayShowHideElement("#diet-routine-table-btn ", "#diet-rotine-chooseDay-popup")
    document.querySelector("#diet-routine-getuserInput").style.display = "block "
    document.querySelector(".diet-routine-section-table").style.filter = "blur(0px)"
    document.querySelector(".diet-routine-section-table").style.backgroundColor = "#fff"

    var cols = document.getElementsByClassName('diet-meals-title');
    for (i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor = '#fff';
    }
}

createDietRoutineBtn.addEventListener("click", handleCreateDiet)


function handleCreateDiet() {
    document.getElementById("dietTimeAdjustBtn").style.display = "none"
    document.getElementById("dietTimeAdjust").style.display = "none"
    console.log(document.querySelectorAll(".dietDynamicAdjust"))
    let allTime = document.querySelectorAll(".dietDynamicAdjust")

    for (let i = 0; i < allTime.length; i++) {
        let item = allTime[i];
        item.style.display = "none"
    }

    document.querySelector("#routine-edit").style.display = "block"
    document.querySelector("#addServerbuttonInner").style.display = "none"
    document.querySelector("#first-table-row").style.display = "none"
    document.querySelector("#static-table-value").style.display = "block"

    createDietRoutineBtn.style.display = "none"
    cancelDietRoutineBtn.style.display = "none"
}

cancelDietRoutineBtn.addEventListener("click", () => {
    // document.getElementById("diet-routine-section").style.display = "none"
    // document.getElementById("created-diet-routine").style.display = "block"
})

// choose day logic here 
// var a = document.getElementById("dietSat")
// var b = document.getElementsByClassName("diet-routine-table-body-text")
// const firstChild = document.querySelector("#oneDay")

// function checkedChooseDay() {
//     if (a) {
//         firstChild.innerHTML = `<span style="font-size=10px">Checked</span>`
//         a.setAttribute
//         console.log("html add")
//     } else {
//         firstChild.innerHTML = ""
//     }
// }


// a.addEventListener("click", () => {
//     checkedChooseDay()
//     console.log("hello checkbox")
// })



// ========================================================================================================
//==================================diet routine end here===============================================
//========================================================================================================




// =========================================
//  start booklist  activities
// =======================================

//handle oflineUserBtn btn
oflineUserBtn.addEventListener('click', () =>
    changeBtnColor("#E22222", "#E22222", "#666666", "#d3d3d3")
)

//handle duplidiya btn
dutypediaUserBtn.addEventListener('click', () =>
    changeBtnColor("#666666", "#d3d3d3", "#E22222", "#E22222")
)

// duplidya and offline button color managment
const changeBtnColor = (offlineColor, offlineBorderColor, duplidiyaColor, duplidiayBorderColor) => {
    oflineUserBtn.style.color = offlineColor
    oflineUserBtn.style.borderColor = offlineBorderColor
    dutypediaUserBtn.style.color = duplidiyaColor
    dutypediaUserBtn.style.borderColor = duplidiayBorderColor
}


// handle create-group-btn 
handleCreateGroupBtn.addEventListener("click", () => {
    groupPartSection.style.display = "none"
    document.getElementById("academic-activities-section").style.display = "block"
})


// add booklist handleer booklist card activities
handleBookList.addEventListener('click', () => {
    displayShowHideElement("#created-book-list", "#booklist-table")
    document.querySelector("#booklist-edit").style.display = "none"
    handleBookList.classList.add("b");

    document.getAnimations()

    handleRoutineCard.classList.remove("b")
})


// add routine handleer  card activities
handleRoutineCard.addEventListener("click", () => {
    document.getElementById("routine-top-btn-section").style.display = "block"
    handleRoutineCard.classList.add("b");
    handleBookList.classList.remove("b")
})



// handle created book list
handleCreatedBookList.addEventListener('click', () => {
    document.querySelector("#booklist-table").style.display = "block"
    document.querySelector("#addServerbuttonInner").style.display = "block"
    handleCreatedBookList.style.display = "none"
    document.querySelector("#tableButtonbottom").style.display = "none"
})


//handle postDataBtn 
postDataBtn.addEventListener('click', () => {
    document.querySelector("#booklist-edit").style.display = "block"
    document.querySelector("#addServerbuttonInner").style.display = "none"
    document.querySelector("#first-table-row").style.display = "none"
    document.querySelector("#static-table-value").style.display = "block"

})

// handle edit row 
userInputRowEdit.addEventListener("click", () => {
    document.getElementById("tableButtonbottom").style.display = "block"
    document.getElementById("addServerbuttonInner").style.display = "none"
})


// handle save data btn
saveRowDataBtn.addEventListener("click", () => {
    document.getElementById("tableButtonbottom").style.display = "none"
})

// handle cancle edit row 
cancleEditInput.addEventListener("click", () => {
    document.getElementById("tableButtonbottom").style.display = "none"
})

// handle userTableDeleter Row 
deleteTableRow.addEventListener("click", () => {
    document.getElementById("delete-booklist-popup").style.display = "block"
    document.getElementById("academic-activities-section").style.filter = "blur(2px)" //blur display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(2px)" //blur display
    document.querySelector(".vendor-section").style.filter = "blur(2px)" //blur display
})

// handle deny(when user click = NO) delete table row;
denyBtnToDelete.addEventListener("click", () => {
    document.getElementById("delete-booklist-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0px)"
})


// handle confirm deleter button on table
confirmDeleteRowBtn.addEventListener("click", () => {
    document.querySelector("#booklist-table").style.display = "none"
    document.querySelector("#booklist-edit").style.display = "none"
    document.querySelector("#delete-booklist-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0px)"
})


// handle add more booklist row
addMoreBookList.addEventListener("click", () => {
    const tableRow = document.createElement("div")
    tableRow.className = "row user-input-box"
    tableRow.innerHTML =
        `
            <div className="col-lg-3 px-0">
                <div className="left-border">
                    <input type="text" className="user-input-text">
                </div>
            </div>
            <div className="col-lg-3 px-0">
                <div className="left-border">
                    <input type="text" className="user-input-text">
                </div>
            </div>
            <div className="col-lg-3 px-0">
                <div className="left-border">
                    <input type="text" className="user-input-text">
                </div>
            </div>
            <div className="col-lg-3 px-0">
                <div>
                    <input type="text" className="user-input-text">
                </div>
            </div>
    
    `
    document.getElementById("main-table").appendChild(tableRow)

})


// =========================================
//  end booklist  activities
// =======================================