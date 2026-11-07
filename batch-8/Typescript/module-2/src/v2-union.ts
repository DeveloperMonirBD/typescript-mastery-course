//* Literal Type
type Status = "pending";
const status: Status = "pending";

//* Basic Union
type Identity = string | number;
const id: Identity = "1231"

//* Literal Union
type Role = "user" | "admin" | "manager"
const userRole : Role = "admin"

//* Object Union
type Admin = {
    id: number;
    role: 'admin';
    privileges: string[]
};

type Member = {
    id: number;
    role: "member";
    plans: string[]
}

type User = Admin | Member;

const user: User = {
    id: 121,
    role: 'admin',
    privileges: ["abd", "dagag", "gdfa"]
}