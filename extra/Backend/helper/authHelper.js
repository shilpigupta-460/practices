import bcrypt from "bcrypt"


export const hashPassword = async (password) => {
    try {
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    }
    catch (err) {
        console.log(err);
    }
}
export const verifyPassword = async (password, hashPassword) => {
    try {
        return bcrypt.compare(password, hashPassword)
    }
    catch (err) {
        console.log(err);
    }
}