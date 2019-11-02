<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    $gender = 'male'|'female'; 
    return [
        'first_name' => $faker->firstName($gender),// Randomly choose male and female first names
        'last_name' => $faker->lastName(),
        'email' => $faker->unique()->safeEmail,
        'password' => bcrypt("12345678"),
        'street'=> $faker->streetAddress(),
        'city'=> $faker->city(),
        'parish'=> $faker->state(),
        'country'=> $faker->country(),
        'remember_token' => str_random(10),
    ];
});
