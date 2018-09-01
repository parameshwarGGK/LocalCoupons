export class TeamData {
    id: number;
    shop: string;
    coupon:string;
    startdate: string;
    enddate: string;
}
// export class MenuItem{
//     label:String;
// }

export const GetList = [
    { 'id': 1,'name': 'shop 1', 'price': '1', 'coupon': '231999', 'start': '2-3-1999', 'end': '2-3-1999' },
    { 'id': 1, 'name': 'shop 1','price': '2', 'coupon': '231999', 'start': '2-3-1999', 'end': '2-3-1999' },
    { 'id': 1, 'name': 'shop 1','price': '3', 'coupon': '231999', 'start': '2-3-1999', 'end': '2-3-1999' },
    { 'id': 1, 'name': 'shop 1','price': '4', 'coupon': '231999', 'start': '2-3-1999', 'end': '2-3-1999' }];

    export const List = [
        { 'id': 1,'shop': 'shop 1', 'address': '1', 'city': '2-3-1999', 'phonenumber': '2-3-1999' },
        { 'id': 1, 'shop': 'shop 1','address': '2', 'city': '2-3-1999', 'phonenumber': '2-3-1999' },
        { 'id': 1, 'shop': 'shop 1','address': '3', 'city': '2-3-1999', 'phonenumber': '2-3-1999' },
        { 'id': 1, 'shop': 'shop 1','address': '4', 'city': '2-3-1999', 'phonenumber': '2-3-1999' }];

    export class CouponCreation{
        id:number;
        ProductName:string;
        ProductDescription:string;
        ProductSpecifications:string;
        Industry:string;
        Quantity:string;
        SalesStartDate:string;
        SaleEndDate:string
        CouponCode:string;
        DistStartDate:string;
        DistEndDate:string;
    }

    export class ShopRegistration{
        id:number;
        LatLong:string;
        ShopName:string;
        ShopDescription:string;
        Address1:string;
        City:string;
        state:string;
        Country:string;
        Pincode:string;
        ContactNo1:string;
        ContactNo2:string;
        latitude: string;
        longitude: string;
    }


export class Car {
    id: number;
    ShopName: string;
    ProductName:string;
    Offer: string;
}

export const GetCars = [
{ 'id': 1,'ShopName': 'AAAAAAA', 'ProductName': 'Swift', 'Offer': '15%' },
{ 'id': 2, 'ShopName': 'BBBBBBB', 'ProductName': 'Swift', 'Offer': '15%' },
{ 'id': 3, 'ShopName': 'CCCCCCC', 'ProductName': 'Swift', 'Offer': '15%' },
{ 'id': 4, 'ShopName': 'DDDDDDD', 'ProductName': 'Swift', 'Offer': '15%' },
{ 'id': 5,'ShopName': 'EEEEEEE',  'ProductName': 'Swift', 'Offer': '15%' },
{ 'id': 6, 'ShopName': 'FFFFFFF', 'ProductName': 'Swift', 'Offer': '15%' },
{ 'id': 7, 'ShopName': 'GGGGGGG', 'ProductName': 'Swift', 'Offer': '15%' },
{ 'id': 8, 'ShopName': 'HHHHHHH', 'ProductName': 'Swift', 'Offer': '15%' }];