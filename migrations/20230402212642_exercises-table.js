/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('exercises', (table) => {
        table.uuid('id').primary()
        table.string('exercise_name').notNullable()
        table
            .uuid('user_id')
            .references('users.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable()
        table
            .uuid('workout_id')
            .references('preset-workouts.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('exercises')
};