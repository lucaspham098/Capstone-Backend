/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('exercise-workout-relationships', (table) => {
        table.uuid('id').primary()

        table
            .uuid("user_id")
            .references("users.id")
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable()

        table
            .uuid('exercise_id')
            .references("exercises.id")
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table
            .uuid('workout_id')
            .references('preset-workouts.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('exercise-workout-relationships')
};
