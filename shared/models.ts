// Models for the CRM application

export interface Customer {
    id: string;
    name: string;
    email: string;
}

export interface Lead {
    id: string;
    name: string;
    status: string;
}