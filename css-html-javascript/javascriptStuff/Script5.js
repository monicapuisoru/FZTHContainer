function generateTable(container, initialHotels) {

    var hotels = initialHotels;
    var tableContainer;
    init();

    function init() {
        container.empty();

        tableContainer = $('<table/>')
        container.append(tableContainer);
		
        generateTableContent();
    }

    function addTableHeaderRow() {
        var headerRowHtml = '<tr>' +
			'<th>Name</th>' +
			'<th>Description</th>' +
			'<th>Country</th>' +
			'<th>City</th>' +
			'<th>Added date</th>' +
			'<th>Start price</th>' +
            '<th>Operations</th>'
        '</tr>';

        var headerRow = $(headerRowHtml);
        tableContainer.append(headerRow);
    }


    function removeHotel(hotelId) {
        var positionToRemove = null;
        var index;

        // find the postion in the hotels array of the object that needs to be removed
        for (index = 0; index < hotels.length; index++) {
            var currentHotel = hotels[index];
            if (currentHotel.id === hotelId) {
                positionToRemove = index;

                // the position was found so we don't need to search the rest of the array
                break;
            }
        }

        if (positionToRemove != null) {
            // the given hotel exists already, so remove it from the array
            hotels.splice(positionToRemove, 1)
        } else {
            // the given hotel doesn't exist in the array, so we can throw an error or simply do nothing
            // we choose to simply do nothing
        }
    }
    function generateTableContent() {
        addTableHeaderRow();
        idCautat = null;
        for (var i = 0; i < hotels.length; i++) {
            var hotel = hotels[i];
            
            var row = $('<tr/>', {
                'data-id': hotel.id
            });
            
            idCautat = hotel.id;

            var hotelAddedDate = $.type(hotel.addedDate) == "date"
				? hotel.addedDate.toDateString()
				: hotel.addedDate;
            
            

            addTextTableCellToRow(row, hotel.name);
            addTextTableCellToRow(row, hotel.description);
            addTextTableCellToRow(row, hotel.country);
            addTextTableCellToRow(row, hotel.city);
            addTextTableCellToRow(row, hotelAddedDate);
            addTextTableCellToRow(row, hotel.startPrice);

            
            var button = $('<button data-id="'+
                idCautat+'" class="del">Delete</button>');
            row.append(button);

           
            var operationsCell = $('<td/>');
            
            tableContainer.append(row);
        }
        var button = $('<button >Add</button>');
        tableContainer.append(button);
    }


    container.on('click', 'button.del', function () {
        var obj  = $(this).attr("data-id");
        function   askUser() {
            var ans = confirm("Are  you sure you want to delete it?");
            console.log('asking user..');
            if (ans == true) {
                console.log("Ati confirmat stergerea!!");
                removeHotel(obj);
                console.log("obiect: "+obj);
            } else
                console.log("Ati anulat stergerea");
        }
    })
     
        
           
};
function addTextTableCellToRow(row, text) {
    var cellToAdd = $('<td/>', {
        text: text
    });
    row.append(cellToAdd);
};


















