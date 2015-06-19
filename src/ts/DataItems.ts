/**
 * Created by DarthVictor on 13.06.2015.
 */
function Entity(id: number): ServerData {
  if (id == 1){
    return new AnimalsData;
  }
  else{
    throw new Error("Unimplemented")
  }
}

class AnimalsData implements ServerData  {
  private fields : ServerField[] = [{
      Name: "Type",
      DataType: "STRING",
      TextPattern: "SIMPLE",
      Required: true,
  },{
      Name: "Name",
      DataType: "STRING",
      TextPattern: "SIMPLE",
      Required: true,
  },{
      Name: "Age",
      DataType: "INTEGER",
      Required: false,
  },{
      Name: "BirthDate",
      DataType: "DATE",
      Required: false,
  }];

  private data: any[] = [
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

  ];

  public row(id: number){
    return  new Promise<EntityRowResponse>(function(resolve, reject) {
      resolve({
          fields: this.fields,
          msg: [],
          displayType: "Row",
          entityTypeId: 1,
          data: this.data[id]
      });
    });
  }

  public list(): Promise<EntityListResponse>  {
  return  new Promise<EntityRowResponse>(function(resolve, reject) {
    resolve({
      fields: this.fields,
      msg: [],
      displayType: "Row",
      entityTypeId: 1,
      data: this.data
    });
  })
}
}
