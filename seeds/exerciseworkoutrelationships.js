/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('exercise-workout-relationships').del()
  await knex('exercise-workout-relationships').insert([
    {
      id: '07bb2843-d3f5-4a8e-956d-7c4abec8c5de',
      exercise_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      workout_id: null
    },
    {
      id: '7efccf86-b4ed-4391-ab33-75f5087a7104',
      exercise_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
      workout_id: null
    },
    {
      id: 'fd1df383-d3c8-4007-8e19-dd40d9adc3b3',
      exercise_id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
      workout_id: null
    },
    {
      id: '9dcc51dd-76ce-467a-92a7-a9b711a9d3f0',
      exercise_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
      workout_id: null
    },
    {
      id: '3dce420b-e32a-4258-b285-1db17d4e5020',
      exercise_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
      workout_id: null
    },
    {
      id: 'cc7bf054-4a43-40c9-a7e6-f13a8148d4b3',
      exercise_id: '62d123fc-3ab5-44a9-a594-c57a9e3b533c',
      workout_id: null
    },
    {
      id: '4f5dd2af-d45d-4735-a265-d2e8d583a163',
      exercise_id: 'c5fc17b3-1487-44e5-ae5c-d63df947b961',
      workout_id: null
    },
    {
      id: 'fdf20eb4-a434-4542-935d-88afe517adae',
      exercise_id: 'faa7180c-b2f0-4e1b-a8f7-0e7ba583ad5b',
      workout_id: null
    },
    {
      id: '0aaf065c-368e-409f-952c-3490281383b9',
      exercise_id: '83410ecc-0df0-4d05-900b-2dd7bde6e6ee',
      workout_id: null
    },
    {
      id: 'fee4992d-dbda-4c93-bda4-1e10c92e8303',
      exercise_id: 'a3f65973-9b31-4e98-a9d1-858a20e1e192',
      workout_id: null
    },
    {
      id: 'bba96460-54e2-4531-9732-47593aa41c10',
      exercise_id: 'b68d46ad-f64b-42e3-b7a9-717d0c807541',
      workout_id: null
    },
    {
      id: '3fd2f923-b576-40ea-9843-ae992a60271e',
      exercise_id: 'a0938035-ca00-4c48-834c-62ef17f6829a',
      workout_id: null
    },
    {
      id: 'a90614ba-070c-4629-b46f-e2ba064f823d',
      exercise_id: '312f3444-7476-40ea-b982-500e00d936af',
      workout_id: null
    },
    {
      id: 'e1bfb640-819c-4a90-8b32-10d101d1365d',
      exercise_id: 'ef0272ed-3adc-4ae9-907a-eaa899c921e0',
      workout_id: null
    },
    {
      id: '94e6df15-4076-464a-95c5-17276238a19e',
      exercise_id: '5fa1b53f-9768-4b19-9c67-e9612241a60d',
      workout_id: null
    },
    {
      id: 'ae9fdf36-2a75-4c44-9dd7-1bd30b40d22b',
      exercise_id: '8705e6c0-0da4-43da-be60-c64a1915c572',
      workout_id: null
    },
    {
      id: 'd5edb7cb-1c6b-469c-b201-c066d162355c',
      exercise_id: 'a6ceeeb4-fa14-41be-a097-24fd78facd1c',
      workout_id: null
    },
    {
      id: '94f68c0e-5f43-4a59-9543-32fdb70924ea',
      exercise_id: 'e43ba249-664b-4637-ba55-40672e3e7a9d',
      workout_id: null
    },
    {
      id: '1ac8cb3e-5a0f-4fc3-9cea-c034010d3387',
      exercise_id: '0272486c-95e3-4405-90c3-cb495bd229a9',
      workout_id: null
    }
  ]);
};
