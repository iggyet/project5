module.exports = {
  up: async (queryInterface) => {
    const restaurantList = [
      {
        categories: "Japanese",
        location: "Clementi Mall",
        name: "Ichiban Sushi",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert("restaurants", restaurantList, {
      returning: true,
    });

    const oneTwoPaxList = [
      {
        restaurant_id: 1,
        name: "Ichi",
        contact_number: 88888888,
        // queue_position:1
        // queue_number: "A1",
        queue_status: "Active",
        // table_for: 2,
        // group_size: 2,
        // number_of_active_queues: 2,
        // now_serving:"A1"
        taken_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        name: "Ban Sushi",
        contact_number: 99999999,
        // queue_position:1
        // queue_number: "A2",
        queue_status: "Active",
        // table_for: 2,
        // group_size: 2,
        // number_of_active_queues: 2,
        // now_serving:"A1"
        taken_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert(
      "one_to_two_pax_waiting_lists",
      oneTwoPaxList,
      {
        returning: true,
      }
    );

    const threeFourPaxList = [
      {
        restaurant_id: 1,
        name: "Icha",
        contact_number: 88888888,
        // queue_position:1
        // queue_number: "B1",
        queue_status: "Active",
        // number_of_active_queues: 1,
        // now_serving:"A1"
        taken_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert(
      "three_to_four_pax_waiting_lists",
      threeFourPaxList,
      {
        returning: true,
      }
    );

    const staffList = [
      {
        restaurant_id: 1,
        email: "a@a.com",
        password:
          "1f40fc92da241694750979ee6cf582f2d5d7d28e18335de05abc54d0560e0f5302860c652bf08d560252aa5e74210546f369fbbbce8c12cfc7957b2652fe9a75",
        name: "Alan",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert("staffs", staffList, {
      returning: true,
    });

    const availableTableList = [
      {
        restaurant_id: 1,
        table_capacity: 2,
        table_number: 1,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 2,
        table_number: 2,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 2,
        table_number: 3,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 2,
        table_number: 4,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 2,
        table_number: 5,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 2,
        table_number: 6,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 2,
        table_number: 7,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 2,
        table_number: 8,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 2,
        table_number: 9,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 2,
        table_number: 10,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 4,
        table_number: 11,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 4,
        table_number: 12,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 4,
        table_number: 13,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 4,
        table_number: 14,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 4,
        table_number: 15,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 4,
        table_number: 16,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 4,
        table_number: 17,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 4,
        table_number: 18,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 4,
        table_number: 19,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 4,
        table_number: 20,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 4,
        table_number: 21,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        restaurant_id: 1,
        table_capacity: 4,
        table_number: 22,
        status: "Available",
        combinability: "Yes",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert("available_tables", availableTableList, {
      returning: true,
    });
  },

  down: async (queryInterface) => {
    await Promise.all([
      await queryInterface.bulkDelete("restaurants", null, {}),
      await queryInterface.bulkDelete("one_to_two_pax_waiting_lists", null, {}),
      await queryInterface.bulkDelete(
        "three_to_four_pax_waiting_lists",
        null,
        {}
      ),
      await queryInterface.bulkDelete("staffs", null, {}),
      await queryInterface.bulkDelete("available_tables", null, {}),
    ]);
  },
};
