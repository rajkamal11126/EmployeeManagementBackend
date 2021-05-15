$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "http://localhost:3000/employee/getAllData",
        success: function (result, status, xhr) {
            valueEnter(result.data);
            console.log(result.data);
        },
        error: function (xhr, status, error){
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
        }
    })
const valueEnter = (result) => {  
    let employee = ''  
    $.each(result, function (key, tableValues) {
        employee += `<tr> 
    <td>${tableValues.firstName}</td> 
    <td>${tableValues.lastName}</td>  
    <td>${tableValues.email}</td>   
    <td><a href="C:\Users\Rajkamal\Downloads\JavaScript\EmployeeManagementBackend\EditEmployee\edit.css"</a></td> 
    <td>Delete</td>
  </tr>`
        })
        $('#tableBody').append(employee);
    }
})