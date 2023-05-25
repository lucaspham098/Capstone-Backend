/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require('bcrypt');
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    const password = '321';
    const hashedPassword = await bcrypt.hash(password, 10);
    await knex('users').insert([
        {
            id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
            username: 'lucaspham',
            password: hashedPassword,
            name: 'Lucas'
        }
    ]);
};
