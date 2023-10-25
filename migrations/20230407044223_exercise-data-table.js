/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("exercise-data", (table) => {
        table
            .uuid('id').primary()
            .notNullable()
        table
            .uuid("user_id")
            .references("users.id")
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable()

        table
            .uuid('exercise_id')
            .references('exercises.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable()

        table
            .uuid('workout_id')
            .references('preset-workouts.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable()

        table.integer('weight_lbs').notNullable()
        table.integer('set_1').notNullable()
        table.integer('set_2').notNullable()
        table.integer('set_3').notNullable()
        table.integer('training_volume').notNullable()
        table.date('date').notNullable()
        table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('exercise-data')
};

