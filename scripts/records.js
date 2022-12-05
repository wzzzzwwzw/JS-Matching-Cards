var URL = "http://fenw.etsisi.upm.es:10000";

$(document).ready(async function() {
    getRecords();
});

function getRecords() {
    $.ajax({
        url: `${URL}/records`,
        success: function(response) {
            var recordsList = $("#records_body");
            for (item of response) {
                var tr = $('<tr>');
                console.log(response);

                item.recordDate = formatDate(item.recordDate);

                Object.keys(item).forEach(key => {
                    var td = $('<td>');
                    td.append(item[key]);
                    tr.append(td);
                });
                recordsList.append(tr);
            }

        },
        error: function() {
            console.log("No se ha podido obtener la información");
        }

    });
}

function formatDate(item) {

    let d = new Date(item);
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
   let date = day + "/" + month + "/" + year;

    return date;

}