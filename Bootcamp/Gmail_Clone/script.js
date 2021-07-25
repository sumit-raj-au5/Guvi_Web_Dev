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
  data.forEach((mail) => {
      let  id = mail.id;
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
  $(".demail-short-detail").on("click", showMail);
}

async function showMail(){
    let id = $(this).closest('.row').attr('id');
    let arr = $(this).closest('.row').attr('class');
    let emailType = "";
    if (arr.split(' ').indexOf('received')!==-1){
        emailType='received/';
    }
    else if(arr.split(' ').indexOf('sent')!==-1){
        emailType='sent/';
    }
    else if(arr.split(' ').indexOf('draft')!==-1){
        emailType='draft/';
    }
    let url = api+emailType+id
    console.log(url);
    $("#mail").modal('show');
    try{
        console.log('Fetching mail');
        let resp= await fetch(url,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            },
        });
        var mail = await resp.json();
        var mailTitle = mail.subject;
        var mailBody = mail.mailContent;
        console.log(mailBody);
    }
    catch(error){
        console.log(error);
    }
    console.log(mailBody);
    $('.modal-title').html(mailTitle);
    $('.modal-body').html(mailBody);
}

async function sendMail(){
    let sendMailApi = api+"sent";
    let d = new Date();
    let createdAt = d.toISOString();
    let username = 'dummy';
    let mailTo = $('#composeEmail').value;
    let mailContent = $('#composeMailContent').value;
    let subject = $('#composeSubject').value;
    try {
        let resp = fetch(sendMailApi, {
          method: "POST",
          body: JSON.stringify({ createdAt, username, mailTo, mailContent, subject}),
          headers: {
            "Content-Type": "application/json",
          },
        });
        document.querySelector(".composeMailForm").reset();
        alert("mail sent");
        console.log("Post Created");
      } catch (error) {
        console.log(error);
      }
}
