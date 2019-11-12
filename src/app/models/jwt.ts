export interface Credentials {
    username: string;
    password: string;
}

export interface AuthUser {
    id: number;
    firstname: string;
    lastname: string;
    scopes: Array<string>;
    email: string;
    role: string;
}
