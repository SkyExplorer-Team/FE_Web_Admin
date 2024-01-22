import { type Knex } from 'knex'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

const TABLE_NAME = 'admin'

export async function seed (knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del()

  const hashedPassword = await bcrypt.hash('adminsupersky', 10)
  const uniqueId = uuidv4()

  await knex(TABLE_NAME).insert([
    {
      id: uniqueId,
      name: 'Supersky Super Admin',
      password: hashedPassword,
      email: 'adminsupersky@mail.com',
      id_role: '4b1f94d2-58cf-4a5e-b9f2-8af7c0d97f94'
    }
  ])
};
