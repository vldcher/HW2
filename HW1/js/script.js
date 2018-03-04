class BaseClass {

        constructor(firstName) {
        this.id =  Math.floor((Math.random() * 100));
        this.firstName = firstName;

    }

    get salary() {
        return this.salaryPerMonth();
    }

    salaryPerMonth() {
        return 50;
    }
}

class FixedSalary extends BaseClass {
    constructor(firstName, fixedSalary) {
        super(firstName);
        this.fixedSalary = fixedSalary;
        this.currentSalary = super.salary;
    }

    salaryPerMonth() {
        super.salaryPerMonth();
        return this.fixedSalary;
    }
}

class WagedSalary extends BaseClass {
    constructor(firstName, hourRate) {
        super(firstName);
        this.hourRate = hourRate;
        this.currentSalary = super.salary;
    }

    salaryPerMonth() {
        super.salaryPerMonth();
        return 20.8 * 8* this.hourRate;
    }
}

let Employees = [];

Employees.push(new FixedSalary('some',100),
               new FixedSalary('aefw', 200),
               new FixedSalary('black', 50),
               new FixedSalary('brown', 120),
               new WagedSalary('jack', 200),
               new WagedSalary('white', 300),
               new WagedSalary('purple', 700),
               new WagedSalary('capitan', 100),);

function showAll() {
    Employees.sort(sorting);
    let html = "<table class='table table-hover' id='table-all'>";
        html += "<tr class='table-success'>";
        html += "<th>ID</th>";
        html += "<th>Name</th>";
        html += "<th>Salary</th>";
        html += "</tr>";

    for (let i = 0; i < Employees.length; i++) {
        html +="<tr>";
        html +="<td>" + Employees[i].id + "</td>";
        html +="<td>" + Employees[i].firstName +  "</td>";
        html +="<td>" + Employees[i].currentSalary + "</td>";
        html +="</tr>";
    }
    html+="</table>";
    // html +=`<button type="button" class="btn btn-info hide-table">Hide table</button>`
    $(".output_first").html(html);
}


function showFirst() {
    Employees.sort(sorting);
    let html = "<table class='table table-striped table-hover'>";
        html +="<tr class='table-warning'>";
        html +="<th>Name</th>";
        html +="<th>Salary</th>";
        html +="</tr>";
    for (let i = 0; i < 5; i++) {
        html +="<tr>";
        html +="<td>"+Employees[i].firstName+"</td>";
        html +="<td>"+Employees[i].currentSalary+"</td>";

        html +="</tr>";

    }
    html +="</table>";
    $(".output_second").html(html);

}

function showLast() {
    Employees.sort(sorting);
    let html = "<table class='table table-striped table-hover'>";
        html +="<tr class='table-danger'>";
        html +="<th>ID</th>";
        html +="</tr>";
    for (let i = Employees.length-1; i > (Employees.length-4); i--) {
        html +="<tr>";
        html +="<td>"+Employees[i].id+"</td>";
        html +="</tr>";

    }
    html+="</table>";
    $(".output_third").html(html);

}

function sorting(a,b) {
    if (a.currentSalary < b.currentSalary)
        return 1;
    if (a.currentSalary > b.currentSalary)
        return -1;
    if (a.currentSalary === b.currentSalary) {
        if (a.firstName < b.firstName)
            return -1;
        if (a.firstName > b.firstName)
            return 1;
    }
    return 0;
}


$(function() {
    $('.add-employee').on('submit', function() {

        let firstName = $("#firstName").val();
        let value = $("#value").val();


        if($('#fixed').is(':checked')){
            Employees.push(new FixedSalary(firstName, value));
            alert("New employee with fixed salary added");
            $('.add-employee')[0].reset();
        } else {
            Employees.push(new WagedSalary(firstName,  value));
            alert("New employee with waged salary added");
            $('.add-employee')[0].reset();
        }
        showAll();
        showFirst();
        showLast();
    });

    // $('.container').on('click', '.hide-table', function() {
    //     $( ".table-all" ).hide( "fast");
    //
    // });
});

