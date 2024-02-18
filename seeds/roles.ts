import { type Knex } from 'knex'
import { v4 as uuidv4 } from 'uuid'

const TABLE_NAME = 'roles'

export async function seed (knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del()

  const uniqueId = uuidv4()

  await knex(TABLE_NAME).insert([
    {
      id: uniqueId,
      name: 'ROLE_ADMIN'
    }
  ])
};
