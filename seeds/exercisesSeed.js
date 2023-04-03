/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('exercises').del();
    await knex('exercises').insert([
        {
            id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
            exercise_name: 'incline curl',
            user_id: 'd565dcd6-cfc1-4087-bca1-b9ad25e03c93',
        },
        {
            id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
            exercise_name: 'hammer curl',
            user_id: 'd565dcd6-cfc1-4087-bca1-b9ad25e03c93',
        },
        {
            id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
            exercise_name: 'shoulder press',
            user_id: 'd565dcd6-cfc1-4087-bca1-b9ad25e03c93',
        },
        {
            id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
            exercise_name: 'squat',
            user_id: '565e22ac-3999-4472-b4f2-d7dd5cb32316',
        },
        {
            id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
            exercise_name: 'lunges',
            user_id: '565e22ac-3999-4472-b4f2-d7dd5cb32316',
        }
    ]);
};