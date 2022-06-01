module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create items and categories tables before the table that references them
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      contact_number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      group_size: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.createTable("restaurants", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categories: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      location: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("staffs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "restaurants",
          key: "id",
        },
        allowNull: false,
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("available_tables", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "restaurants",
          key: "id",
        },
        allowNull: false,
      },
      table_capacity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      table_number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      status: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      combinability: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      estimated_to_be_available_at: {
        type: Sequelize.TIME,
      },
      occupied_at: {
        type: Sequelize.DATE,
      },
      available_at: {
        type: Sequelize.DATE,
      },
      seated_by_staff_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "staffs",
          key: "id",
        },
      },
      cleared_by_staff_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "staffs",
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.createTable("titles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title_name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      title_description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("staffs_titles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      staff_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "staffs",
          key: "id",
        },
        allowNull: false,
      },
      title_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "titles",
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.createTable("one_to_two_pax_waiting_lists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "restaurants",
          key: "id",
        },
      },
      available_table_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "available_tables",
          key: "id",
        },
      },
      queue_position: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      queue_number: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      queue_status: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      number_of_active_queues: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      now_serving: {
        type: Sequelize.TEXT,
        // references: {
        //   model: "one_to_two_pax_waiting_lists",
        //   key: "queue_number",
        // },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.createTable("three_to_four_pax_waiting_lists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "restaurants",
          key: "id",
        },
      },
      available_table_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "available_tables",
          key: "id",
        },
      },
      queue_position: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      queue_number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      queue_status: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      number_of_active_queues: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      now_serving: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "three_to_four_pax_waiting_lists",
        //   key: "queue_number",
        // },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.createTable("more_than_four_pax_waiting_lists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "restaurants",
          key: "id",
        },
      },
      available_table_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "available_tables",
          key: "id",
        },
      },
      queue_position: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      queue_number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      queue_status: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      number_of_active_queues: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      now_serving: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "more_than_four_pax_waiting_lists",
        //   key: "queue_number",
        // },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    // Drop tables with foreign key references first
    await Promise.all([
      queryInterface.dropTable("users"),
      queryInterface.dropTable("staffs"),
      queryInterface.dropTable("available_tables"),
      queryInterface.dropTable("titles"),
      queryInterface.dropTable("staffs_titles"),
      queryInterface.dropTable("restaurants"),
      queryInterface.dropTable("one_to_two_pax_waiting_lists"),
      queryInterface.dropTable("three_to_four_pax_waiting_lists"),
      queryInterface.dropTable("more_than_four_pax_waiting_lists"),
    ]);
  },
};
