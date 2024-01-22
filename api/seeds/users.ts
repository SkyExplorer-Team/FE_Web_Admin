import { type Knex } from 'knex'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

const TABLE_NAME = 'users'

export async function seed (knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del()

  const hashedPassword = await bcrypt.hash('adminsupersky', 10)
  const uniqueId = uuidv4()

  await knex(TABLE_NAME).insert([
    {
      id: uniqueId,
      national_id: 'NAT123456',
      firstname: 'Supersky',
      lastname: 'Admin',
      password: hashedPassword,
      salutation: 'Mr.',
      email: 'adminsupersky@mail.com',
      dob: new Date(),
      phone: '+1234567890',
      subscribe: true,
      role_id: 'ROLE_ADMIN'
    }
  ])
};
