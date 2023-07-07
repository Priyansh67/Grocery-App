export interface SignUp{
    Name:string,
    Email:string,
    Phone:number,
    Password:string
}

export interface logIn{
    Email:string,
    Password:string
}

export interface product{
    ProductName:string,
    ProductDescription:string,
    ProductCategory:string,
    ProductQuantity:number,
    ProductImage:string,
    ProductPrice:number,
    ProductDiscount:number,
    ProductSpecification:string
}