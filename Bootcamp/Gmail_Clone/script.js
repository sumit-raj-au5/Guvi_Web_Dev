const api = "https://60fcd20238907c0017e8fa9b.mockapi.io/user/";
const container = document.querySelector(".container-fluid");
const mediumScreenSize = 992;
let currentSidebarOption = "inbox";
let showSidebar = false;
//Received mail section
const receivedUrl = api + "received";
async function getReceivedMail() {
  try {
    let resp = await fetch(receivedUrl);
    let data = await resp.json();
    //console.log(data);
    printReceivedMail(data);
  } catch (error) {
    console.log(error);
  }
}

// function printReceivedMail(data) {
//   container.innerHTML = "";
//   data.forEach((mail) => {
//     let id = mail.id;
//     let username = mail.username;
//     let subject = mail.subject;
//     let mailContent = mail.mailContent.substring(0, 20);
//     let date = mail.createdAt;
//     let d = new Date(date);
//     let hours = d.getHours();
//     hours = hours < 10 ? "0" + hours : hours;
//     let minutes = d.getMinutes();
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     let time = hours + ":" + minutes;
//     container.innerHTML += `<div class="row emailRow received" id="${id}">
//         <div class="col-sm-3">
//         <input type="checkbox" name="" id="" />
//         <span class="material-icons"> star_border </span>
//         <span class="material-icons"> label_important </span>
//         </div>

//         <div class="col-sm-3 email-short-detail">
//           <h3 class="emailRow-title">${username}</h3>
//         </div>
//         <div class="col-sm-3 email-short-detail">
//           <div class="emailRow-message">
//             <h4 class="emailRow-title">
//               ${subject}
//               <span class="emailRow-description"> - ${mailContent}</span>
//             </h4>
//           </div>
//         </div>
//         <div class="col-sm-3 email-short-detail">
//           <p class="emailRow-time">${time}</p>
//         </div>

//       </div>`;
//   });
//   $(".email-short-detail").on("click", showMail);
// }

//sent mail section
const sentUrl = api + "sent";
async function getSentMail() {
  try {
    let resp = await fetch(sentUrl);
    let data = await resp.json();
    console.log(data);
    printSentMail(data);
  } catch (error) {
    console.log(error);
  }
}

function printSentMail(data) {
  container.innerHTML = "";
  $(this).scrollTop(0);
  data.forEach((mail) => {
    let id = mail.id;
    let username = mail.username;
    let subject = mail.subject;
    let mailContent = mail.mailContent.substring(0, 150);
    let date = mail.createdAt;
    let d = new Date(date);
    let hours = d.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let tod = hours < 12 ? "AM" : "PM";
    hours = hours > 12 ? hours - 12 : hours;
    let minutes = d.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time = hours + ":" + minutes + " " + tod;
    //class send received draft in line of 92 isn't letting it become function
    container.innerHTML += `<div class="row emailRow sent" id="${id}">
    <div class="col-md-1 w-auto my-auto">
    <input class="my-auto" type="checkbox" name="" id="" />
    <span class="material-icons my-auto"> star_border </span>
    <span class="material-icons my-auto"> label_important </span>
    </div>
    
    <div class="col-md-3 my-auto email-short-detail emailRow-title">
      <p class="my-auto">${username}</p>
    </div>

    <div class="col-md-7 email-short-detail my-auto">
      <div class="emailRow-message">
        <h4 class="my-auto">
          ${subject}
          <span class="my-auto emailRow-description">${mailContent}</span>
        </h4>
      </div>
    </div>

    <div class="col-md-1 my-auto  email-short-detail">
      <p class="float-end my-auto emailRow-time">${time}</p>
    </div>
    
  </div>`;
  });

  $(".email-short-detail").on("click", showMail);
}

//Print fetched mail
function printReceivedMail(data) {
  container.innerHTML = "";
  $(this).scrollTop(0);
  data.forEach((mail) => {
    let id = mail.id;
    let username = mail.username;
    let subject = mail.subject;
    let mailContent = mail.mailContent.substring(0, 150);
    let date = mail.createdAt;
    let d = new Date(date);
    let hours = d.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let tod = hours < 12 ? "AM" : "PM";
    hours = hours > 12 ? hours - 12 : hours;
    let minutes = d.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time = hours + ":" + minutes + " " + tod;
    container.innerHTML += `<div class="row emailRow received h-25" id="${id}">
        <div class="col-md-1 w-auto my-auto">
        <input class="my-auto" type="checkbox" name="" id="" />
        <span class="material-icons my-auto"> star_border </span>
        <span class="material-icons my-auto"> label_important </span>
        </div>
        
        <div class="col-md-3 my-auto email-short-detail emailRow-title">
          <p class="my-auto">${username}</p>
        </div>

        <div class="col-md-7 email-short-detail my-auto">
          <div class="emailRow-message">
            <h4 class="my-auto">
              ${subject}
              <span class="my-auto emailRow-description">${mailContent}</span>
            </h4>
          </div>
        </div>

        <div class="col-md-1 my-auto  email-short-detail">
          <p class="float-end my-auto emailRow-time">${time}</p>
        </div>
        
      </div>`;
  });
  $(".email-short-detail").on("click", showMail);
}

//Draft mail section
const draftUrl = api + "draft";
async function getDraftMail() {
  try {
    let resp = await fetch(draftUrl);
    let data = await resp.json();
    console.log(data);
    printDraftMail(data);
  } catch (error) {
    console.log(error);
  }
}

function printDraftMail(data) {
  container.innerHTML = "";
  data.forEach((mail) => {
    let id = mail.id;
    let username = mail.username;
    let subject = mail.subject;
    let mailContent = mail.mailContent.substring(0, 20);
    let date = mail.createdAt;
    let d = new Date(date);
    let hours = d.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let tod = hours < 12 ? "AM" : "PM";
    hours = hours > 12 ? hours - 12 : hours;
    let minutes = d.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time = hours + ":" + minutes + " " + tod;
    container.innerHTML += `<div class="row emailRow h-25 draft" id="${id}">
    <div class="col-md-1 w-auto my-auto">
    <input class="my-auto" type="checkbox" name="" id="" />
    <span class="material-icons my-auto"> star_border </span>
    <span class="material-icons my-auto"> label_important </span>
    </div>
    
    <div class="col-md-3 my-auto demail-short-detail emailRow-title">
      <p class="my-auto">${username}</p>
    </div>

    <div class="col-md-7 demail-short-detail my-auto">
      <div class="emailRow-message">
        <h4 class="my-auto">
          ${subject}
          <span class="my-auto emailRow-description">${mailContent}</span>
        </h4>
      </div>
    </div>

    <div class="col-md-1 my-auto  demail-short-detail">
      <p class="float-end my-auto emailRow-time">${time}</p>
    </div>
    
  </div>`;
  });
  $(".demail-short-detail").on("click", (e) => {
    let triggering_element_id = $(e.target).closest(".row").attr("id");
    openComposeMail(true, triggering_element_id);
  });
}

//Open mail on click except draft mail
async function showMail() {
  let id = $(this).closest(".row").attr("id");
  let arr = $(this).closest(".row").attr("class");
  let emailType = "";
  if (arr.split(" ").indexOf("received") !== -1) {
    emailType = "received/";
  } else if (arr.split(" ").indexOf("sent") !== -1) {
    emailType = "sent/";
  } else if (arr.split(" ").indexOf("draft") !== -1) {
    emailType = "draft/";
  }
  let url = api + emailType + id;
  //console.log(url);
  $(".modal-header").removeClass("bg-dark text-white");
  $("#mail").modal("show");
  try {
    console.log("Fetching mail");
    let resp = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    var mail = await resp.json();
    var mailTitle = mail.subject;
    var mailBody = mail.mailContent;
    console.log(mailBody);
  } catch (error) {
    console.log(error);
  }
  //console.log(mailBody);
  $("#showMailTitle").html(mailTitle);
  $("#showMailBody").html(mailBody);
}

//Compose mail or open Draft mail
async function openComposeMail(draftMail = false, id) {
  var mailTo = "";
  var composeMailTitle = "";
  var mailBody = "";
  var composeMailSubject = "";
  $("#mail").modal("show");
  $("#mail").modal({
    focus: true,
  });
  if (draftMail) {
    let emailType = "draft/";
    let url = api + emailType + id;
    try {
      console.log("Fetching mail");
      let resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      var mail = await resp.json();
      mailTo = mail.mailTo;
      composeMailTitle = mail.subject;
      composeMailSubject = mail.subject;
      mailBody = mail.mailContent;

      console.log(mailBody);
    } catch (error) {
      console.log(error);
    }
  } else {
    composeMailTitle = "New Message";
  }

  let composeMailBody = `<div class="col-lg-12 p-0 message-box-input">
    <form id="composeMailForm">
      <div class="form-group">
        <input type="email" class="form-control" id="composeEmail" aria-describedby="emailHelp"
          placeholder="Recipient" value="${mailTo}">
        <input type="email" class="form-control" id="composeSubject" aria-describedby="emailHelp"
          placeholder="Subject" value="${composeMailSubject}">
        <textarea class="form-control" id="composeMailContent" rows="6">${mailBody}</textarea>
      </div>
    </form>
  </div>`;
  let composeMailFooter = `<div class="co-lg-12 message-box-last-content p-2">
  <a href="#" class="btn btn-primary btn-sm pl-3 pr-3 sendMailBtn" type="submit" draft="${draftMail}" id="${id}">SEND
  </a>
  <span>
    <i class="fa fa-paperclip" aria-hidden="true"></i>
    <i class="fa fa-file" aria-hidden="true"></i>
    <i class="fa fa-picture-o" aria-hidden="true"></i>
    <i class="fa fa-link" aria-hidden="true"></i>
    <i class="fa fa-smile-o" aria-hidden="true"></i>
  </span>
  <span class="pull-right">
    <i class="fa fa-trash-o" aria-hidden="true"></i>
    </span>
    </div>`;

  $(".modal-header").addClass("bg-dark text-white");
  $("#showMailTitle").html(composeMailTitle);
  $("#showMailBody").html(composeMailBody);
  $(".modal-footer").html(composeMailFooter);
  console.log("done");
}

//Calling send mail function based on catergory of mail
//if it is draft mail then id is passed so that it can be deleted from draft after sending
//if it's a new compose and send is pressed then directly send it.
$(document).on("click", ".sendMailBtn", function (e) {
  let draft = $(e.currentTarget).attr("draft");
  let id = $(e.currentTarget).attr("id");
  if (draft) {
    sendMail(draft, id);
  } else {
    sendMail();
  }
});
//send a mail
async function sendMail(draft = false, id = 0) {
  console.log("sending mail");
  let sendMailApi = api + "sent";
  let d = new Date();
  let createdAt = d.toISOString();
  let username = "dummy";
  let mailTo = document.getElementById("composeEmail").value;
  let mailContent = document.getElementById("composeMailContent").value;
  let subject = document.getElementById("composeSubject").value;

  try {
    let resp = await fetch(sendMailApi, {
      method: "POST",
      body: JSON.stringify({
        createdAt,
        username,
        mailTo,
        mailContent,
        subject,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.querySelector("#composeMailForm").reset();
    alert("mail sent");
    console.log("Mail Sent");
  } catch (error) {
    console.log(error);
  }
  $("#mail").modal("hide");

  //deleting draft mail...not working
  console.log(draft);
  if (draft === true) {
    console.log("inside if");
    let deleteDraftApi = api + "draft/" + id;
    console.log("i am trying draft delete");
    try {
      console.log("i am trying delete");
      let resp = await fetch(deleteDraftApi, {
        method: "DELETE",
      });
      console.log("Draft Mail Deleted");
    } catch (error) {
      console.error(error);
    }
  }
}

// async function deleteDraft(id) {
//   let deleteDraftApi = api + "draft/" + id;
//   console.log('i am trying draft delete');
//   try {
//     console.log('i am trying delete');
//     let resp = await fetch(deleteDraftApi, {
//       method: "DELETE",
//     });
//     console.log("Draft Mail Deleted");
//   } catch (error) {
//     console.error(error);
//   }
// }

//add active class on sidebar options
$(".sidebarOption").on("click", (e) => {
  $("#" + currentSidebarOption).removeClass("sidebarOption-active");
  $(e.currentTarget).addClass("sidebarOption-active");
  currentSidebarOption = e.currentTarget.id;

  //once a category is selected then sidebar hides on small screen
  let screenSize = $(window).width();
  if (screenSize < mediumScreenSize && showSidebar) {
    showSidebar = false;
    $("#sidebar").addClass("d-none");
    $("#emailSection").removeClass("d-none");
  }
});

//toggle sidebar on small screen
$("#toggleButton").on("click", () => {
  let screenSize = $(window).width(); //992 - size of medium screen
  console.log(screenSize);
  if (screenSize < mediumScreenSize && showSidebar) {
    showSidebar = false;
    $("#sidebar").addClass("d-none");
    $("#emailSection").removeClass("d-none");
  } else if (screenSize < mediumScreenSize && showSidebar === false) {
    showSidebar = true;
    $("#sidebar").removeClass("d-none");
    $("#emailSection").addClass("d-none");
  }
});

$(document).on("click", ".btn-close", async function (e) {
  let d = new Date();
  let createdAt = d.toISOString();
  let username = "dummy";
  let mailTo = document.getElementById("composeEmail").value;
  let mailContent = document.getElementById("composeMailContent").value;
  let subject = document.getElementById("composeSubject").value;
  let emailType = "draft";
  let draftUrl = api + emailType;
  try{
  let resp = await fetch(draftUrl, {
    method: "POST",
    body: JSON.stringify({
      createdAt,
      username,
      mailTo,
      mailContent,
      subject,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    });
    document.querySelector("#composeMailForm").reset();
    alert("mail drafted");
    console.log("Mail drafted");
  } 
  catch (error) 
  {
    console.log(error);
  }
});
// TODO: Adding focus to selected element of left sidebar
// TODO: Add delete functionality
// TODO: Refresh page when going on different category
// TODO: Remove sent mail from Draft
// TODO: new composed mail if not sent then saved into draft

