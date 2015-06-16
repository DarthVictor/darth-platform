/**
 * Created by DarthVictor on 13.06.2015.
 */
///<reference path='../../bower_components/promise-ts/promise-ts.d.ts'/>
import promise = require('promise-ts');
interface ServerData {
    get(id: number): promise.Promise
}
interface ServerField {
    
}
class AnimalsData /*implements ServerData */ {
    private fields : ServerField[] = [{
    "Name": "Type",
    "DataType": "STRING",
    "TextPattern": "SIMPLE",
    "Required": true,
},{
    "Name": "Name",
    "DataType": "STRING",
    "TextPattern": "SIMPLE",
    "Required": true,
},{
    "Name": "Age",
    "DataType": "INTEGER",
    "Required": false,
},{
    "Name": "BirthDate",
    "DataType": "DATE",

    "Required": false,
}]
/*
    var data = [
    {
        "Type": "monkey",
        "Name": "Abu",
        "Age": 6,
        "BirthDate": "1145-05-17"
    },
    {
        "Type": "ork",
        "Name": "Schrek",
        "Age": 36,
        "BirthDate": "1326-08-07"
    },
    {
        "Type": "girafe",
        "Name": "Melman",
        "Age": 12,
        "BirthDate": "1996-11-21"
    }

]*/
    /*get(id: number): promise.Promise = {

    }*/
}
