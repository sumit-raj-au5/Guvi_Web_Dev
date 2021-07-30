const api = "https://60f3c43a3cb0870017a8a05b.mockapi.io/post/";
const createPostForm = document.querySelector(".create-post-form");

async function getData(url) {
  try {
    let resp = await fetch(url);
    let data = await resp.json();
    //console.log(data);
    printPost(data);
  } catch (error) {
    console.log(error);
  }
}

function printPost(data) {
  let container = document.querySelector(".container");
  let col_count = 0;
  let row;
  data.forEach((element) => {
    if (col_count === 0) {
      let name = element.name;
      let title = element.title;
      let id = element.id;
      row = document.createElement("div");
      row.className = "row m-1";
      row.innerHTML += `
            <div class="card col-md-3" style="width: 18rem;" id="${id}" onclick="openPostPage(${id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="card-body">
            <h5 class="card-title">${title} </h5>
            <h6 class="card-subtitle mb-2">Created by ${name}</h6>
            </div>
            </div>
        `;
      container.append(row);
      col_count += 1;
    } else {
      let name = element.name;
      let title = element.title;
      let id = element.id;
      row.innerHTML += `
      <div class="card col-md-3" style="width: 18rem;" id="${id}" onclick="openPostPage(${id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="card-body">
            <h5 class="card-title">${title} </h5>
            <h6 class="card-subtitle mb-2">Created by ${name}</h6>
            </div>
            </div>
        `;
      if (col_count === 3) {
        col_count = 0;
      } else {
        col_count += 1;
      }
    }
  });
}

getData(api);

// Create Post

function openCreatePostForm() {
  console.log("create post");
  document.getElementById("createPostForm").style.display = "block";
}

function closeCreatePostForm() {
  console.log("Form Closed");
  document.getElementById("createPostForm").style.display = "none";
}


async function createPost() {
  console.log("Creating post");
  //e.preventDefault();
  try {
    var name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let title = document.getElementById("title").value;
    let query = document.getElementById("query").value;
    console.log(name + " " + password + " " + title + " " + query);
    let resp = fetch(api, {
      method: "POST",
      body: JSON.stringify({ name, password, title, query }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.querySelector(".create-post-form").reset();
    alert("Post Created");
    console.log("Post Created");
    closeCreatePostForm();
    document.querySelector(".container").innerHTML = "";
    getData(api);
  } catch (error) {
    console.log(error);
  }
}


async function deletePost(id) {
    var password = prompt('Enter Post Password to delete post');
    let post_password;
    try{
        console.log('Fetching password');
        let resp= await fetch(api+id,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            },
        });
        let data_to_delete = await resp.json();
        post_password=data_to_delete.password;
    }
    catch(error){
        console.log(error);
    }
    
    if(password === post_password){
    try {
        console.log('Deleting post');
        let resp = await fetch(api+id, {
            method:"DELETE",
        });
        alert('Post Deleted');
        document.querySelector(".container").innerHTML = "";
        getData(api);
    }
     catch (error) {
        console.log('Delete post error' + error);
    }
}
else{
    alert('wrong password!!!');
}
}

async function editPost(id) {
    console.log("editing post");
    //openCreatePostForm();
    try{
        console.log('Fetching password');
        let resp= await fetch(api+id,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            },
        });
        let data_to_edit= await resp.json();
        document.querySelector('.form-title').innerText="Edit Post";
        document.getElementById("name").value = data_to_edit.name;
        document.getElementById("password").value= data_to_edit.password;
        document.getElementById("title").value= data_to_edit.title;
        document.getElementById("query").value= data_to_edit.query;
        document.querySelector('.btn-create-post').innerText="Done";
        document.querySelector('.btn-create-post').removeAttribute("onclick");
        document.querySelector('.btn-create-post').addEventListener("click", async ()=>{
            try {
                let id  = data_to_edit.id;
                var name = document.getElementById("name").value;
                let password = document.getElementById("password").value;
                let title = document.getElementById("title").value;
                let query = document.getElementById("query").value;
                console.log(id);
                let resp = fetch(api+id, {
                  method: "PUT",
                  body: JSON.stringify({ name, password, title, query }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
                alert("Post Updated");
                console.log("Post Updated");
                document.querySelector(".create-post-form").reset();
                closeCreatePostForm();
                document.querySelector(".container").innerHTML = "";
               await getData(api);
              } catch (error) {
                console.log(error);
              }
        });
        document.querySelector('.btn-create-post').setAttribute("onclick", "createPost");
    }
    catch(error){
        console.log(error);
    }


  }

async function openPostPage(id) {
    console.log(id);
    try{
        let resp= await fetch(api+id,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
            },
        });
        let post = await resp.json();
        let commentPic = post.comments[0].profilePic;
        let commentUserName = post.comments[0].name;
        let comment = post.comments[0].comment;
        document.querySelector('.modal-title').innerText=post.title;
        document.querySelector('.modal-body').innerHTML=
        `${post.query}
        <br>
        <a href="#" class="btn btn-post-page edit" onclick="editPost(${id})" data-bs-toggle="modal" data-bs-target="#createPostModal">Edit</a>
        <a href="#" class="btn btn-post-page delete" onclick="deletePost(${id})">Delete</a>
        <a href="#" class="btn btn-post-page delete" onclick="addComment(${id})">Add Comment</a>
        <div class="mt-5"> Comments 
        <div class="container-fluid">
        <div class="row border-1 border-success m-3">
        <div class="col-12">
        <div class="comment d-flex">
        <img src="${commentPic}" alt="profile-pic" class="rounded-circle justify-content-start">
        <div class="ms-2 pt-4 comment-body justify-content-end">
        ${commentUserName}<br>
        ${comment}<br>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>`;

    }
    catch(error){
        console.log(error);
    }
}

// TODO : Add Comments, refresh post page on edit or delete
