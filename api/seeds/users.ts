import { type Knex } from 'knex'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

const TABLE_NAME = 'admin'

export async function seed (knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del()

  const roleIdQuery = await knex('roles').where('name', 'ROLE_ADMIN').first()
  const roleId = roleIdQuery ? roleIdQuery.id : null

  if (!roleId) {
    console.error('ROLE_ADMIN not found in roles table.')
    return
  }

  const hashedPassword = await bcrypt.hash('adminsupersky', 10)
  const uniqueId = uuidv4()

  await knex(TABLE_NAME).insert([
    {
      id: uniqueId,
      name: 'Supersky Admin',
      password: hashedPassword,
      email: 'adminsupersky@gmail.com',
      id_role: roleId
    }
  ])
}
