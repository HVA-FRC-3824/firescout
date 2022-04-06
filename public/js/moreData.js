function kidnap(newUrl) {
    James = [];
    //These variables store the data returned from the functions.
    let baseUrl = 'https://www.thebluealliance.com/api/v3'; //base TBA url
    //This ajax code requests data from The Blue Alliance
    $.ajax({
        url: baseUrl + newUrl, //This is the url we send to TBA which requests our data
        headers: {
            'X-TBA-Auth-Key': 'sXq0WfqWizhlS2WTDBoYLPFMg7EASbeuwDspHHzn9yO8zdSAGPRMO5oQDyET0G7g' //This header contains Evan Boswell's Blue Alliance authentication key, this will need to be changed for years beyond 2019/2020
        },
        method: 'GET', //This defines the method we use to pull data from Blue Alliance, in this instance we are using GET
        dataType: 'json', //This defines what format the data that is pulled from Blue Alliance will be in, in this instance we are pulling Json files
        async: false,
        success: function(data) { //this function logs our data in the console if it is successfully pulled
            James = data;
            //console.log(James);
            document.getElementById("displayText").innerHTML = JSON.stringify(James);
            displayAsTable(James);
            return James;

        },
    });
    $(document).ajaxError(function() { //this function alerts an error if the pulling the data is unsuccessful
        alert("An error occurred!");
    });

    //console.log(James);
}

function displayAsTable(data){
    const tableBody = document.getElementById("tbl");
    const headers = document.getElementById("headers");
    tableBody.innerHTML = "";
    headers.innerHTML = "";

    Object.keys(James[0]).forEach(title => {
        headers.insertAdjacentHTML("beforeend", "<th>" + JSON.stringify(title) + "</th>")
    });
    var i = 0;
    data.forEach(row => {
        i++;
        tableBody.insertAdjacentHTML("beforebegin","<tr id='row" + i + "'></tr>");
        Object.keys(row).forEach(cell => {
            document.getElementById("row" + i).insertAdjacentHTML("beforeend", "<td>" + JSON.stringify(row[cell]) + "</td>")
        });
    });
}