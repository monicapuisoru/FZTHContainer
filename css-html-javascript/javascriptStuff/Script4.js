// JavaScript source code
function hotel(id, name, description, addedDate, startPrice, country) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.addedDate = addedDate;
    this.startPrice = startPrice;
    this.country = country;
}

var h1 = new hotel(1, "Astoria1", "Astoria Hotel1", new Date(2013, 6, 21), 23, "Romania");
var h2 = new hotel(2, "Unirea1", "Unirea Hotel1", new Date(2013, 6, 21), 253, "Romania");
var h3 = new hotel(3, "Astoria2", "Astoria Hotel2", new Date(2013, 6, 21), 23, "Romania");
var h4 = new hotel(4, "Unirea2", "Unirea Hotel2", new Date(2013, 6, 21), 253, "Romania");
var h5 = new hotel(4, "Unirea5", "Unirea Hotel5", new Date(2013, 6, 21), 253, "Romania");


lista = [h1, h2, h3];

function update(hotelObject) {
    var idCautat = hotelObject.id;
    for(i =0; i<lista.length; i++)
    {
        if(idCautat == lista[i].id)
        {
            console.log("Update: id vechi: " + lista[i].id);
            lista = lista.splice(i, 1);
            lista = lista.push(hotelObject);
            console.log("Update: id nou: " + lista[i].id);
            break;
        }
    }
   
}

function add(hotelObject) {
    lista = lista.push(hotelObject);
    return lista;
}

function remove(ID)
{
    var idCautat;
    for (i = 0; i < lista.length; i++) {
        idCautat = lista[i].id;
        if (idCautat == ID) {
            console.log("Remove : am gasit: " + idCautat);
            console.log("Remove: nr elemente inainte: " + lista.length);
            lista = lista.splice(i, 1);
            console.log("Remove: nr elemente dupa: " + lista.length);
        }
    }
    return lista;
}

function maxID() {
    var maxID = 0;
    for (i = 0; i < lista.length; i++) {
        if (lista[i].id > maxID) {
            maxID = lista[i].id;
            console.log("maxID: Am gasit id-ul: " + maxID);
        }
    }
    return maxID;
}

    function getHotelObj(hotelID) {
        var gasit = false;
        var hotelCautat = lista[0];
        for (i = 0; i < lista.length; i++) {
            if (lista[i].id == hotelID)
                hotelCautat = lista[i];
            console.log("getHotel : Am gasit hotelul: " + hotelCautat.id);
        }

        return hotelCautat;
    }

   console.log(add(h4));
   console.log(update(h5));
   console.log(remove(4));
   console.log(maxID());
