import bcrypt from 'bcrypt'

export const hassPassword = async(password) => {
  try{
    const saltRounds=10;
    const hashedpassword = await bcrypt.hash(password, saltRounds);
  }
  catch(error){
    console.log(error);
  }
};

export const comparepassword = async (password,hashedpassword) => {
  return bcrypt.compare(password,hashedpassword);
}