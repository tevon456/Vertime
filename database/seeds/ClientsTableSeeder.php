<?php

use Illuminate\Database\Seeder;

class ClientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {    //Seed database with 4 clients
        factory(App\Client::class, 4)->create();
    }
}
