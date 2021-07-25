const api = "https://60fcd20238907c0017e8fa9b.mockapi.io/user/";
const container = document.querySelector(".container");

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

function printReceivedMail(data) {
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
    let minutes = d.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time = hours + ":" + minutes;
    container.innerHTML += `<div class="row emailRow received" id="${id}">
        <div class="col-sm-3">
        <input type="checkbox" name="" id="" />
        <span class="material-icons"> star_border </span>
        <span class="material-icons"> label_important </span>
        </div>
        
        <div class="col-sm-3 email-short-detail">
          <h3 class="emailRow-title">${username}</h3>
        </div>

        <div class="col-sm-3 email-short-detail">
          <div class="emailRow-message">
            <h4 class="emailRow-title">
              ${subject}
              <span class="emailRow-description"> - ${mailContent}</span>
            </h4>
          </div>
        </div>

        <div class="col-sm-3 email-short-detail">
          <p class="emailRow-time">${time}</p>
        </div>
        
      </div>`;
  });
  $(".email-short-detail").on("click", showMail);
}

//getReceivedMail();

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
  data.forEach((mail) => {
    let id = mail.id;
    let username = mail.username;
    let subject = mail.subject;
    let mailContent = mail.mailContent.substring(0, 20);
    let date = mail.createdAt;
    let d = new Date(date);
    let hours = d.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = d.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time = hours + ":" + minutes;
    container.innerHTML += `<div class="row emailRow sent" id="${id}">
        <div class="col-sm-3">
        <input type="checkbox" name="" id="" />
        <span class="material-icons"> star_border </span>
        <span class="material-icons"> label_important </span>
        </div>

        <div class="col-sm-3 email-short-detail">
          <h3 class="emailRow-title">${username}</h3>
        </div>

        <div class="col-sm-3 email-short-detail">
          <div class="emailRow-message">
            <h4 class="emailRow-title">
              ${subject}
              <span class="emailRow-description"> - ${mailContent}</span>
            </h4>
          </div>
        </div>

        <div class="col-sm-3 email-short-detail">
          <p class="emailRow-time">${time}</p>
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
  let id;
  data.forEach((mail) => {
    id = mail.id;
    let username = mail.username;
    let subject = mail.subject;
    let mailContent = mail.mailContent.substring(0, 20);
    let date = mail.createdAt;
    let d = new Date(date);
    let hours = d.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = d.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let time = hours + ":" + minutes;
    container.innerHTML += `<div class="row emailRow draft" id="${id}">
        <div class="col-sm-3">
        <input type="checkbox" name="" id="" />
        <span class="material-icons"> star_border </span>
        <span class="material-icons"> label_important </span>
        </div>

        <div class="col-sm-3 demail-short-detail">
          <h3 class="emailRow-title">${username}</h3>
        </div>

        <div class="col-sm-3 demail-short-detail">
          <div class="emailRow-message">
            <h4 class="emailRow-title">
              ${subject}
              <span class="emailRow-description"> - ${mailContent}</span>
            </h4>
          </div>
        </div>

        <div class="col-sm-3 demail-short-detail">
          <p class="emailRow-time">${time}</p>
        </div>
      </div>`;
  });
  $(".demail-short-detail").on("click", () => {
    openComposeMail((draftMail = true), id);
  });
}

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

async function openComposeMail(draftMail = false, id = 0) {
  var mailTo = "";
  var composeMailTitle = "";
  var mailBody = "";
  var composeMailSubject="";
  $("#mail").modal("show");
  if (draftMail) {
    console.log(id);
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
  let composeMailFooter=
  `<div class="co-lg-12 message-box-last-content p-2">
  <a href="#" class="btn btn-primary btn-sm pl-3 pr-3" type="submit" onclick="sendMail()">SEND
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

async function sendMail() {
  console.log("sending mail");
  let sendMailApi = api + "sent";
  let d = new Date();
  let createdAt = d.toISOString();
  let username = "dummy";
  let mailTo = document.getElementById("composeEmail").value;
  let mailContent = document.getElementById("composeMailContent").value;
  let subject = document.getElementById("composeSubject").value;
  console.log(
    JSON.stringify({
      createdAt,
      username,
      mailTo,
      mailContent,
      subject,
    })
  );
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
}
