/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('preset-workouts', (table) => {
        table.uuid('id').primary()
        table.string('workout_name').notNullable()
        table
            .uuid('user_id')
            .references('users.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable()
        table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('preset-workouts')
};
