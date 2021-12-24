export class Product {
  constructor(
    public name: string,
    public price: number,
    public category: string,
    public room: string,
    public comment: string,
    public date: Date,
    public id?: string,

  ) {

  }
}

export class Groups {
  constructor(
     public name: string,
     public id?: string
    ) {

  }
}


