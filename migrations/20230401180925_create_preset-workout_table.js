/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('preset-workouts', (table) => {
        table.string('workout_name').notNullable()
        table
            .uuid('user_id')
            .references('users.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table
            .uuid('exercise1')
            .references('exercises.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table
            .uuid('exercise2')
            .references('exercises.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table
            .uuid('exercise3')
            .references('exercises.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table
            .uuid('exercise4')
            .references('exercises.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table
            .uuid('exercise5')
            .references('exercises.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table
            .uuid('exercise6')
            .references('exercises.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table
            .uuid('exercise7')
            .references('exercises.id')
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
    return knex.schema.dropTable('preset-workouts')
};
