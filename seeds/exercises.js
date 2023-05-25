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
      exercise_name: 'Shoulder Press',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      exercise_name: 'Hammer curl',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      exercise_name: 'Incline Curl',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      exercise_name: 'Tricep Pushdown',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      exercise_name: 'Lateral Raise',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '62d123fc-3ab5-44a9-a594-c57a9e3b533c',
      exercise_name: 'Tricep Extension',
      workout_id: '5261168c-6bcb-4e2e-9428-012905780a6e',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'c5fc17b3-1487-44e5-ae5c-d63df947b961',
      exercise_name: 'Leg Press',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'faa7180c-b2f0-4e1b-a8f7-0e7ba583ad5b',
      exercise_name: 'RDL',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '83410ecc-0df0-4d05-900b-2dd7bde6e6ee',
      exercise_name: 'Leg Extensions',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'a3f65973-9b31-4e98-a9d1-858a20e1e192',
      exercise_name: 'Leg Curl',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'b68d46ad-f64b-42e3-b7a9-717d0c807541',
      exercise_name: 'Calf Raises',
      workout_id: 'dcf35025-080c-4706-8712-b5aebc183d64',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'a0938035-ca00-4c48-834c-62ef17f6829a',
      exercise_name: 'Incline Press (Upper Back)',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'b3bf7d64-e1e3-4c3c-949e-53d157be7596',
      exercise_name: 'Incline Press (Lats)',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '312f3444-7476-40ea-b982-500e00d936af',
      exercise_name: 'Dips (Upper Back)',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '9850541b-e882-49ab-ba23-b70d14c34e3f',
      exercise_name: 'Dips (Lats)',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'ef0272ed-3adc-4ae9-907a-eaa899c921e0',
      exercise_name: 'Incline Chest Flies (Upper Back)',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '685e9424-049e-4a70-bb04-dc7aba2c01c5',
      exercise_name: 'Incline Chest Flies (Lats)',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '5fa1b53f-9768-4b19-9c67-e9612241a60d',
      exercise_name: 'Rows',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '8705e6c0-0da4-43da-be60-c64a1915c572',
      exercise_name: 'Shrugs',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'a6ceeeb4-fa14-41be-a097-24fd78facd1c',
      exercise_name: 'Face Pulls',
      workout_id: 'ac41b823-acab-45cd-b769-bc90c268d8c8',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'e43ba249-664b-4637-ba55-40672e3e7a9d',
      exercise_name: 'Lat Pulldown',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '0272486c-95e3-4405-90c3-cb495bd229a9',
      exercise_name: 'Lat Pullover',
      workout_id: '93969f34-634d-4127-9563-1047771b45ff',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },

  ]);
};
