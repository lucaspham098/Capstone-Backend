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
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      exercise_name: 'Hammer curl',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      exercise_name: 'Incline Curl',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      exercise_name: 'Tricep Pushdown',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      exercise_name: 'Lateral Raise',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '62d123fc-3ab5-44a9-a594-c57a9e3b533c',
      exercise_name: 'Tricep Extension',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'c5fc17b3-1487-44e5-ae5c-d63df947b961',
      exercise_name: 'Leg Press',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'faa7180c-b2f0-4e1b-a8f7-0e7ba583ad5b',
      exercise_name: 'RDL',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '83410ecc-0df0-4d05-900b-2dd7bde6e6ee',
      exercise_name: 'Leg Extensions',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'a3f65973-9b31-4e98-a9d1-858a20e1e192',
      exercise_name: 'Leg Curl',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'b68d46ad-f64b-42e3-b7a9-717d0c807541',
      exercise_name: 'Calf Raises',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'a0938035-ca00-4c48-834c-62ef17f6829a',
      exercise_name: 'Incline Press',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '312f3444-7476-40ea-b982-500e00d936af',
      exercise_name: 'Dips',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'ef0272ed-3adc-4ae9-907a-eaa899c921e0',
      exercise_name: 'Incline Chest Flies',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '5fa1b53f-9768-4b19-9c67-e9612241a60d',
      exercise_name: 'Rows',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '8705e6c0-0da4-43da-be60-c64a1915c572',
      exercise_name: 'Shrugs',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'a6ceeeb4-fa14-41be-a097-24fd78facd1c',
      exercise_name: 'Face Pulls',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: 'e43ba249-664b-4637-ba55-40672e3e7a9d',
      exercise_name: 'Lat Pulldown',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },
    {
      id: '0272486c-95e3-4405-90c3-cb495bd229a9',
      exercise_name: 'Lat Pullover',
      user_id: '036fa1ff-e605-4776-bc46-622cad4c9ebd',
    },

  ]);
};
