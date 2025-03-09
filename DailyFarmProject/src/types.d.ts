
export interface  signInProps{
    chevronClick:(type:string) => void;
    setStage?:(stage:number) => void;
    isFarmer?:boolean;
}

export interface loginDataType {
    login: string;
    password: string;
}

export interface cadsType {
    name: string,
    description: string,
    src: string
    saleValue?: string

}


export interface personalDate{
    firstName: string,
    lastName: string,
    birthdate: string,
}

export interface companyDate{
    company: string,
}

export interface loginDate{
    email: string,
    password: string,
    phone: string,
}

export interface countryDate{
        "coordinates": {
        "latitude": string,
        "longitude": string,
    }
}

export interface regDataType extends personalDate,companyDate,loginDate,countryDate  {}


