<?php

use Faker\Generator as Faker;

$factory->define(App\Client::class, function (Faker $faker) {
    return [
        'name' => $faker->company(),
        'manager_id' => $faker->numberBetween($min = 1, $max = 3)// only user ids between 1 and 3 are made managers from permission seeder
    ];
});
