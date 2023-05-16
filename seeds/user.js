/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
        {
            id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
            username: 'lucaspham',
            password: 'omg',
            name: 'Lucas'
        }
    ]);
};
