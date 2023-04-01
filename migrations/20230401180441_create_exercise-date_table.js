/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("exercise-data", (table) => {
        table
            .uuid("user_id")
            .references("users.id")
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table
            .uuid('exercise_id')
            .references('exercises.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.integer('weight(lbs)').notNullable()
        table.integer('set_1')
        table.integer('set_2')
        table.integer('set_3')
        table.string('comments')
        table.timestamp(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.droptable('exercise-data')
};
