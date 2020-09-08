let http =
  "https://vucodiing-students.herokuapp.com/users?_sort=id&_order=desc";
let studentID = 0;
let getInfo = $("#find-smt").val();
$(function () {
  $.ajax({
    method: "GET",
    url: http + "&_page=1",

    context: document.body,
  }).done(function (users) {
    let htmlString = "";

    for (let user of users) {
      htmlString += `<tr id="${user.id}">
          <td>${user.name}</td>
          <td>${user.birthday}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>
              <a href="repair-student.html?id=${user.id}" class="text-repair">
                  <i class="fa fa-edit">
                  </i>
                  Chỉnh sửa
              </a>
              |
              <a href="javascript:void(0)" onclick="confirmDel(${user.id})" class="text-delete" data-toggle="modal" data-target="#exampleModal">
  
                  <i class="fa fa-trash-alt">
                  </i>
                  Xoá
              </a>
          </td>
      </tr>`;
    }
    $("tbody").html(htmlString);
  });
});

function btn1() {
  $.ajax({
    method: "GET",
    url: http + "&_page=1",
    context: document.body,
  }).done(function (users) {
    let htmlString = "";

    for (let user of users) {
      htmlString += `<tr id="${user.id}">
        <td>${user.name}</td>
        <td>${user.birthday}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
            <a href="repair-student.html?id=${user.id}" class="text-repair">
                <i class="fa fa-edit">
                </i>
                Chỉnh sửa
            </a>
            |
            <a href="javascript:void(0)" onclick="confirmDel(${user.id})" class="text-delete" data-toggle="modal" data-target="#exampleModal">

                <i class="fa fa-trash-alt">
                </i>
                Xoá
            </a>
        </td>
    </tr>`;
    }
    $("tbody").html(htmlString);
  });
}

function btn2() {
  $.ajax({
    method: "GET",
    url: http + "&_page=2",
    context: document.body,
  }).done(function (users) {
    let htmlString = "";

    for (let user of users) {
      htmlString += `<tr id="${user.id}">
        <td>${user.name}</td>
        <td>${user.birthday}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
            <a href="repair-student.html?id=${user.id}" class="text-repair">
                <i class="fa fa-edit">
                </i>
                Chỉnh sửa
            </a>
            |
            <a href="javascript:void(0)" onclick="confirmDel(${user.id})" class="text-delete" data-toggle="modal" data-target="#exampleModal">

                <i class="fa fa-trash-alt">
                </i>
                Xoá
            </a>
        </td>
    </tr>`;
    }
    $("tbody").html(htmlString);
  });
}

function btn3() {
  $.ajax({
    method: "GET",
    url: http + "&_page=3",
    context: document.body,
  }).done(function (users) {
    let htmlString = "";

    for (let user of users) {
      htmlString += `<tr id="${user.id}">
        <td>${user.name}</td>
        <td>${user.birthday}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
            <a href="repair-student.html?id=${user.id}" class="text-repair">
                <i class="fa fa-edit">
                </i>
                Chỉnh sửa
            </a>
            |
            <a href="javascript:void(0)" onclick="confirmDel(${user.id})" class="text-delete" data-toggle="modal" data-target="#exampleModal">

                <i class="fa fa-trash-alt">
                </i>
                Xoá
            </a>
        </td>
    </tr>`;
    }
    $("tbody").html(htmlString);
  });
}

function btn4() {
  $.ajax({
    method: "GET",
    url: http + "&_page=4",
    context: document.body,
  }).done(function (users) {
    let htmlString = "";

    for (let user of users) {
      htmlString += `<tr id="${user.id}">
        <td>${user.name}</td>
        <td>${user.birthday}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
            <a href="repair-student.html?id=${user.id}" class="text-repair">
                <i class="fa fa-edit">
                </i>
                Chỉnh sửa
            </a>
            |
            <a href="javascript:void(0)" onclick="confirmDel(${user.id})" class="text-delete" data-toggle="modal" data-target="#exampleModal">

                <i class="fa fa-trash-alt">
                </i>
                Xoá
            </a>
        </td>
    </tr>`;
    }
    $("tbody").html(htmlString);
  });
}

function filterName() {
  if ($("#find-smt").val() === "") {
    alert("Nhập từ khoá tìm kiếm");
  } else {
    let nameFilter = "name=" + $("#find-smt").val();
    let birthdayFilter = "birthday=" + $("#find-smt").val();
    let phoneFilter = "phone=" + $("#find-smt").val();
    $.ajax({
      method: "GET",
      url: "https://vucodiing-students.herokuapp.com/users/?" + nameFilter,
      context: document.body,
    }).done(function (users) {
      let htmlString = "";

      for (let user of users) {
        htmlString += `<tr id="${user.id}">
          <td>${user.name}</td>
          <td>${user.birthday}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>
              <a href="repair-student.html?id=${user.id}" class="text-repair">
                  <i class="fa fa-edit">
                  </i>
                  Chỉnh sửa
              </a>
              |
              <a href="javascript:void(0)" onclick="confirmDel(${user.id})" class="text-delete" data-toggle="modal" data-target="#exampleModal">
  
                  <i class="fa fa-trash-alt">
                  </i>
                  Xoá
              </a>
          </td>
      </tr>`;
      }
      $("tbody").html(htmlString);
    });

    $.ajax({
      method: "GET",
      url: "https://vucodiing-students.herokuapp.com/users/?" + birthdayFilter,
      context: document.body,
    }).done(function (users) {
      let htmlString = "";

      for (let user of users) {
        htmlString += `<tr id="${user.id}">
          <td>${user.name}</td>
          <td>${user.birthday}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>
              <a href="repair-student.html?id=${user.id}" class="text-repair">
                  <i class="fa fa-edit">
                  </i>
                  Chỉnh sửa
              </a>
              |
              <a href="javascript:void(0)" onclick="confirmDel(${user.id})" class="text-delete" data-toggle="modal" data-target="#exampleModal">
  
                  <i class="fa fa-trash-alt">
                  </i>
                  Xoá
              </a>
          </td>
      </tr>`;
      }
      $("tbody").html(htmlString);
    });

    $.ajax({
      method: "GET",
      url: "https://vucodiing-students.herokuapp.com/users/?" + phoneFilter,
      context: document.body,
    }).done(function (users) {
      let htmlString = "";

      for (let user of users) {
        htmlString += `<tr id="${user.id}">
          <td>${user.name}</td>
          <td>${user.birthday}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>
              <a href="repair-student.html?id=${user.id}" class="text-repair">
                  <i class="fa fa-edit">
                  </i>
                  Chỉnh sửa
              </a>
              |
              <a href="javascript:void(0)" onclick="confirmDel(${user.id})" class="text-delete" data-toggle="modal" data-target="#exampleModal">
  
                  <i class="fa fa-trash-alt">
                  </i>
                  Xoá
              </a>
          </td>
      </tr>`;
      }
      $("tbody").html(htmlString);
    });
  }
}

function confirmDel(id) {
  studentID = id;
  $("#exampleModal").modal("show");
}
function dellStudent() {
  if ($("#exampleModal")) {
    let select = "#" + studentID;
    $.ajax({
      url: http + "/" + studentID,
      method: "DELETE",
    }).done(function () {
      $(select).remove();
      $("#exampleModal").modal("hide");
    });
  }
}
