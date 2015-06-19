interface ServerField {
  Name: string;
  DataType: string;
  Required: boolean;
  TextPattern?: string;
}

interface ServerData{
  row(id: number): Promise<EntityRowResponse>;
  list(): Promise<EntityListResponse>;
}

interface Response {

}

interface EntityResponse {
  fields: ServerField[];
  msg: any[];
  displayType: string;
  entityTypeId: number;
}


interface EntityRowResponse extends EntityResponse{
  data: any
}

interface EntityListResponse extends EntityResponse{
  data: any[]
}
