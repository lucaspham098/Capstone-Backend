/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('preset-workouts').del();
  await knex('preset-workouts').insert([
    {
      id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      workout_name: 'Arms',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      workout_name: 'Legs',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      workout_name: 'Chest/Back (Upper Back Focused)',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '93969f34-634d-4127-9563-1047771b45ff',
      workout_name: 'Chest/Back (Lat Focused)',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },

  ]);
};
