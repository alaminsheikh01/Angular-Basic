interface Address {
    street: string;
    city: string;
    zipcode: string;
}

export interface Users {
    id: Number;
    name: string;
    username: string;
    email: string;
    address: Address
}