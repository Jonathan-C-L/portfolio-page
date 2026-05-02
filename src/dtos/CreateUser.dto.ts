export interface CreateUserDto{
    username: string;
    email: string;
    password: string;
    // dob?: string; --> '?' marks date of birth as optional
}